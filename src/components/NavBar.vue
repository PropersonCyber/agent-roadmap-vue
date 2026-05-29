<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()

const navLinks = ref<InstanceType<typeof HTMLDivElement>>()
const mobileOpen = ref(false)
const activeSection = ref('hero')
const scrollProgress = ref(0)

const links = [
  { href: '#intro', label: '定义' },
  { href: '#work', label: '工作内容' },
  { href: '#skills', label: '技能树' },
  { href: '#roadmap', label: '学习路线' },
  { href: '#projects', label: '项目实战' },
  { href: '#career', label: '职业发展' },
  { href: '#resources', label: '学习资源' }
]

function handleScroll() {
  const sp = window.scrollY + 100
  document.querySelectorAll('section[id]').forEach((s) => {
    const el = s as HTMLElement
    if (sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) {
      activeSection.value = s.id
    }
  })
  const p = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = p > 0 ? (window.scrollY / p) * 100 : 0
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  mobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo" @click.prevent="scrollTo('hero')">
        <div class="nav-logo-icon">⚡</div>
        <span>Agent Roadmap</span>
      </a>
      <div class="nav-links" :class="{ open: mobileOpen }" ref="navLinks">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="{ active: activeSection === link.href.slice(1) }"
          @click.prevent="scrollTo(link.href.slice(1))"
        >{{ link.label }}</a>
      </div>
      <div class="nav-actions">
        <button class="theme-toggle" @click="toggleTheme" aria-label="切换主题">
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </button>
        <button class="menu-btn" @click="mobileOpen = !mobileOpen" aria-label="菜单">☰</button>
      </div>
    </div>
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </nav>
</template>

<style scoped>
.nav{position:fixed;top:0;left:0;right:0;height:var(--nav-h);z-index:1000;background:rgba(255,255,255,.72);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border);transition:var(--transition)}
[data-theme="dark"] .nav{background:rgba(9,9,11,.72)}
.nav-inner{max-width:var(--max-w);margin:0 auto;padding:0 24px;height:100%;display:flex;align-items:center;justify-content:space-between;gap:16px}
.nav-logo{display:flex;align-items:center;gap:10px;font-weight:600;font-size:15px;letter-spacing:-.02em}
.nav-logo-icon{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--purple));display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff}
.nav-links{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}
.nav-links::-webkit-scrollbar{display:none}
.nav-links a{padding:6px 12px;border-radius:8px;font-size:13px;color:var(--text-secondary);white-space:nowrap;transition:var(--transition)}
.nav-links a:hover,.nav-links a.active{color:var(--text);background:var(--bg-hover)}
.nav-actions{display:flex;align-items:center;gap:8px;flex-shrink:0}
.theme-toggle{width:40px;height:40px;border-radius:10px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;transition:var(--transition)}
.theme-toggle:hover{background:var(--bg-hover);border-color:var(--border-strong)}
.theme-toggle svg{width:18px;height:18px}
.progress-bar{position:fixed;top:var(--nav-h);left:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--purple));z-index:999;transition:width .1s linear}
.menu-btn{display:none;width:40px;height:40px;border-radius:10px;border:1px solid var(--border);align-items:center;justify-content:center}

@media(max-width:900px){
  .nav-links{display:none;position:fixed;top:var(--nav-h);left:0;right:0;background:var(--bg-elevated);border-bottom:1px solid var(--border);padding:12px 24px;flex-direction:column}
  .nav-links.open{display:flex}
  .menu-btn{display:flex}
}
</style>
