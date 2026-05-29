<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'

const revealRef = useReveal()
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-grid"></div>
    <div class="hero-glow"></div>
    <div class="container hero-content">
      <div class="hero-badge" ref="revealRef">
        <span class="hero-badge-dot"></span>
        6 个月系统化转型路线 · 2026 最新版
      </div>
      <h1 class="reveal reveal-delay-1">AI Agent Engineer<br>Roadmap</h1>
      <p class="hero-sub reveal reveal-delay-2">从前端工程师到 AI Agent 工程师的成长路线</p>

      <div class="hero-stats reveal reveal-delay-3">
        <div class="stat-card">
          <div class="stat-label">当前能力画像</div>
          <div class="stat-value">1~2 年前端工程师</div>
          <div class="stat-tags">
            <span class="tag">Vue3</span><span class="tag">React</span><span class="tag">Node.js</span>
            <span class="tag purple">TypeScript</span><span class="tag blue">Docker</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-label">转型目标</div>
          <div class="stat-value">AI Agent 工程师</div>
          <div class="stat-tags">
            <span class="tag">Agent 开发</span><span class="tag purple">RAG</span><span class="tag blue">MCP</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-label">学习周期</div>
          <div class="stat-value">6 个月 · 全职投入</div>
          <div class="stat-tags"><span class="tag">1200+ 小时</span></div>
        </div>
        <div class="stat-card">
          <div class="stat-label">最终岗位目标</div>
          <div class="stat-value">大厂 / AI 创业公司 / 企业 AI 团队</div>
          <div class="stat-tags"><span class="tag">25K~60K+</span></div>
        </div>
      </div>

      <div class="hero-cta reveal reveal-delay-4">
        <a href="#roadmap" class="btn btn-primary" @click.prevent="$emit('scrollTo', 'roadmap')">查看学习进度 →</a>
        <a href="#skills" class="btn btn-secondary" @click.prevent="$emit('scrollTo', 'skills')">查看技能树</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero{min-height:100vh;display:flex;align-items:center;padding-top:var(--nav-h);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:var(--gradient-hero);pointer-events:none}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:64px 64px;mask-image:radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent);opacity:.5}
.hero-glow{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,var(--accent-glow),transparent 70%);top:10%;left:50%;transform:translateX(-50%);pointer-events:none;animation:pulse 8s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:.5;transform:translateX(-50%) scale(1)}50%{opacity:.8;transform:translateX(-50%) scale(1.1)}}
.hero-content{position:relative;z-index:1;text-align:center;max-width:860px;margin:0 auto}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px 6px 8px;border-radius:100px;border:1px solid var(--border);background:var(--bg-card);font-size:13px;color:var(--text-secondary);margin-bottom:32px;box-shadow:var(--shadow-sm)}
.hero-badge-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);animation:blink 2s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.4}}
.hero h1{font-size:clamp(36px,6vw,64px);font-weight:800;letter-spacing:-.04em;line-height:1.08;margin-bottom:20px;background:linear-gradient(135deg,var(--text) 0%,var(--text-secondary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:clamp(16px,2.5vw,20px);color:var(--text-secondary);margin-bottom:48px;line-height:1.6}
.hero-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:48px;text-align:left}
.stat-card{padding:24px;border-radius:var(--radius-lg);border:1px solid var(--border);background:var(--bg-card);transition:var(--transition)}
.stat-card:hover{border-color:var(--accent);box-shadow:var(--shadow-glow);transform:translateY(-2px)}
.stat-label{font-size:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px}
.stat-value{font-size:15px;font-weight:600;line-height:1.5}
.stat-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.hero-cta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

@media(max-width:600px){
  .hero-stats{grid-template-columns:1fr}
}
</style>
