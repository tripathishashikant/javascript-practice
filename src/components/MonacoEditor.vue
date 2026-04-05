<template>
  <div
    ref="editorElement"
    class="c-monaco-editor"
  />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const editorElement = ref(null)
let editor = null

self.MonacoEnvironment = {
  getWorker() {
    return new editorWorker()
  },
}

onMounted(() => {
  if (!editorElement.value) {
    return
  }

  monaco.editor.defineTheme('quantum-blue-terminal', {
    base: 'vs-dark',
    inherit: true,
    colors: {
      'editor.background': '#181818',
      'editor.foreground': '#6B99CC',
      'editor.lineHighlightBackground': '#202020',
      'editorCursor.foreground': '#A0CFFF',
      'editor.selectionBackground': '#203248',
      'editor.inactiveSelectionBackground': '#1a2533',
    },
    rules: [
      { token: 'comment', foreground: '6B99CC' },
      { token: 'keyword', foreground: 'A0CFFF' },
      { token: 'identifier', foreground: 'A0CFFF' },
      { token: 'number', foreground: 'FFFFFF' },
      { token: 'string', foreground: '6B99CC' },
    ],
  })

  editor = monaco.editor.create(editorElement.value, {
    automaticLayout: true,
    fontFamily: 'JetBrains Mono, monospace',
    fontLigatures: false,
    fontSize: 15,
    lineHeight: 24,
    minimap: { enabled: false },
    model: monaco.editor.createModel(props.modelValue, 'javascript'),
    overviewRulerBorder: false,
    padding: { top: 18, bottom: 18 },
    roundedSelection: false,
    scrollBeyondLastLine: false,
    scrollbar: {
      horizontalScrollbarSize: 6,
      verticalScrollbarSize: 6,
    },
    theme: 'quantum-blue-terminal',
  })

  editor.onDidChangeModelContent(() => {
    emit('update:modelValue', editor?.getValue() ?? '')
  })
})

watch(
  () => props.modelValue,
  (value) => {
    if (!editor || editor.getValue() === value) {
      return
    }

    editor.setValue(value)
  },
)

onBeforeUnmount(() => {
  editor?.getModel()?.dispose()
  editor?.dispose()
})
</script>
