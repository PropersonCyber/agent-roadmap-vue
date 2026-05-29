<script setup lang="ts">
</script>

<template>
  <section id="intro">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Part 01</div>
        <h2 class="section-title">什么是 AI Agent 工程师</h2>
        <p class="section-desc">AI Agent 工程师是连接大模型能力与企业业务场景的桥梁，负责设计、开发和部署能够自主规划、调用工具、完成复杂任务的智能体系统。</p>
      </div>
      <div class="compare-grid reveal">
        <div class="compare-card"><h4><span>📋</span> 工作定义</h4><p>基于大语言模型（LLM）构建具备感知、推理、规划、行动能力的智能体系统。将 AI 能力产品化，解决企业真实业务问题，而非仅做模型训练或前端展示。</p></div>
        <div class="compare-card"><h4><span>⚙️</span> vs 传统软件工程师</h4><p>传统工程师编写确定性逻辑；Agent 工程师设计非确定性系统——通过 Prompt、Tool、Workflow 引导 LLM 做出合理决策，并处理幻觉、容错与评估。</p></div>
        <div class="compare-card"><h4><span>🧠</span> vs AI 算法工程师</h4><p>算法工程师聚焦模型训练与优化；Agent 工程师聚焦应用层——集成现有 LLM API，构建 RAG、Tool Calling、Multi-Agent 编排，无需从头训练模型。</p></div>
        <div class="compare-card"><h4><span>🏢</span> 企业典型职责</h4><p>设计 Agent 架构、开发 Tool/MCP Server、构建 RAG 知识库、编排 Workflow、Agent 评估与监控、与产品/后端协作落地 AI 功能。</p></div>
      </div>
      <div class="flow-diagram reveal">
        <div class="flow-node">👤 用户</div><span class="flow-arrow">↓</span>
        <div class="flow-node highlight">🤖 Agent</div><span class="flow-arrow">↓</span>
        <div class="flow-node">🧠 LLM</div><span class="flow-arrow">↓</span>
        <div class="flow-node">🔧 Tools</div><span class="flow-arrow">↓</span>
        <div class="flow-node highlight">✅ 执行结果</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.compare-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:0}
.compare-card{padding:28px;border-radius:var(--radius-lg);border:1px solid var(--border);background:var(--bg-card)}
.compare-card h4{font-size:16px;font-weight:600;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.compare-card h4 span{font-size:20px}
.flow-diagram{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px;padding:48px 24px;border-radius:var(--radius-xl);border:1px solid var(--border);background:var(--bg-card);margin-top:32px}
.flow-node{padding:16px 28px;border-radius:var(--radius);border:1px solid var(--border);background:var(--bg-elevated);font-weight:600;font-size:15px;text-align:center;min-width:100px;transition:var(--transition)}
.flow-node:hover{border-color:var(--accent);box-shadow:var(--shadow-glow)}
.flow-node.highlight{border-color:var(--accent);background:var(--accent-dim);color:var(--accent)}
.flow-arrow{font-size:24px;color:var(--text-muted);animation:flowDown 2s ease-in-out infinite}
@keyframes flowDown{0%,100%{opacity:.4;transform:translateY(0)}50%{opacity:1;transform:translateY(4px)}}

@media(max-width:600px){
  .flow-diagram{flex-direction:column}
  .flow-arrow{transform:rotate(90deg)}
}
</style>
