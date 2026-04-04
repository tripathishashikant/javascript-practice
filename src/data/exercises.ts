import type { ExerciseSummary } from '../types/exercise'

export const exercises: ExerciseSummary[] = [
  {
    id: 'promise-timer-delay',
    category: 'Promises',
    title: 'Timer Delay',
    description: 'Practice creating a promise that resolves after a fixed delay.',
  },
  {
    id: 'promise-persistent-loader',
    category: 'Promises',
    title: 'Persistent Loader',
    description: 'Retry a failing async task until it succeeds or the retry limit is reached.',
  },
  {
    id: 'template-tags-i18n',
    category: 'Template Tags',
    title: 'i18n Translator',
    description: 'Build a tagged template helper that swaps placeholders using translation keys.',
  },
]
