<script setup lang="ts">
</script>

<template>
  <section id="career">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Part 06</div>
        <h2 class="section-title">职业发展路线</h2>
        <p class="section-desc">从前端工程师到 AI Platform Engineer 的完整成长路径。</p>
      </div>
      <div class="career-path reveal">
        <div class="career-step"><h4>前端工程师</h4><div class="salary">8K ~ 18K</div><p>Vue/React 开发，组件化架构，已有 1~2 年经验</p></div>
        <div class="career-arrow">↓</div>
        <div class="career-step"><h4>AI 应用开发工程师</h4><div class="salary">15K ~ 25K</div><p>LLM API 集成，Prompt 工程，简单 RAG 应用，AI 功能前端对接</p></div>
        <div class="career-arrow">↓</div>
        <div class="career-step active"><h4>AI Agent 工程师</h4><div class="salary">25K ~ 45K</div><p>Agent 架构设计，Tool/MCP 开发，Workflow 编排，RAG 系统，Multi-Agent</p></div>
        <div class="career-arrow">↓</div>
        <div class="career-step"><h4>Senior AI Engineer</h4><div class="salary">40K ~ 60K</div><p>复杂 Agent 系统设计，Agent Evaluation，团队技术 Leader</p></div>
        <div class="career-arrow">↓</div>
        <div class="career-step"><h4>AI Platform Engineer</h4><div class="salary">50K ~ 80K+</div><p>AI 基础设施，Agent 平台化，Multi-Tenant，Enterprise AI 架构</p></div>
      </div>
      <div class="career-details reveal">
        <div class="card"><h3>🏢 企业需求</h3><ul><li>互联网大厂 AI 应用团队</li><li>AI 创业公司核心研发</li><li>传统企业数字化转型</li><li>SaaS 产品 AI 功能线</li></ul></div>
        <div class="card"><h3>💪 核心能力要求</h3><ul><li>Python + FastAPI 后端开发</li><li>LangChain/LangGraph Agent 开发</li><li>RAG 全链路工程能力</li><li>MCP / Tool 标准化开发</li><li>系统设计与工程化思维</li></ul></div>
        <div class="card"><h3>📈 市场趋势</h3><ul><li>2026 Agent 工程师需求增长 300%+</li><li>MCP 成为行业标准协议</li><li>Multi-Agent 系统成为主流</li><li>前端 + AI 复合型人才稀缺</li></ul></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-path{display:flex;flex-direction:column;align-items:center;gap:0;padding:48px 0}
.career-step{width:100%;max-width:560px;padding:28px 32px;border-radius:var(--radius-lg);border:1px solid var(--border);background:var(--bg-card);text-align:center;transition:var(--transition);position:relative}
.career-step:hover{border-color:var(--accent);box-shadow:var(--shadow-glow);transform:scale(1.02)}
.career-step.active{border-color:var(--accent);background:var(--accent-dim)}
.career-step h4{font-size:18px;font-weight:700;margin-bottom:4px}
.career-step .salary{font-size:14px;color:var(--accent);font-weight:600;margin-bottom:8px}
.career-step p{font-size:13px;color:var(--text-secondary);line-height:1.6}
.career-arrow{font-size:20px;color:var(--text-muted);padding:8px 0;animation:flowDown 2s ease-in-out infinite}
@keyframes flowDown{0%,100%{opacity:.4;transform:translateY(0)}50%{opacity:1;transform:translateY(4px)}}
.career-details{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin-top:40px;width:100%}
</style>
