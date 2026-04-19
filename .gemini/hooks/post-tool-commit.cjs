#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const input = fs.readFileSync(0, 'utf8');
const data = JSON.parse(input);

const mutators = ['write_file', 'replace', 'run_shell_command'];

if (mutators.includes(data.tool_name) && !data.tool_response.error) {
  try {
    // Only commit if there are actual changes in the workspace
    const status = execSync('git status --porcelain').toString().trim();
    if (status) {
      execSync('git add -A');
      const message = `Auto-commit: ${data.tool_name} on ${data.tool_input.file_path || 'workspace'}`;
      execSync(`git commit -m "${message}"`);
    }
  } catch (err) {
    // Fail silently in the hook to avoid blocking the agent, 
    // but in a real scenario you might want to log this.
  }
}

process.stdout.write(JSON.stringify({}) + '\n');
process.exit(0);
