import { ref, watch, onMounted } from 'vue'

const THEME_KEY = 'agent-roadmap-theme'
type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null
    theme.value = saved || 'dark'
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  watch(theme, (val) => {
    document.documentElement.setAttribute('data-theme', val)
    localStorage.setItem(THEME_KEY, val)
  })

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggleTheme }
}
