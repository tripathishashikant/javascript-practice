#!/usr/bin/env node

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');
const data = JSON.parse(input);

const protectedFiles = ['.env', 'package.json'];
const targetPath = data.tool_input.file_path || '';

if (protectedFiles.some(file => targetPath.includes(file))) {
  process.stdout.write(JSON.stringify({
    decision: "deny",
    reason: `Modification of ${targetPath} is blocked by project mandates.`
  }) + '\n');
} else {
  process.stdout.write(JSON.stringify({ decision: "allow" }) + '\n');
}

process.exit(0);
