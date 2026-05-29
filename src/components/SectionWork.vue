<script setup lang="ts">
</script>

<template>
  <section id="work">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Part 02</div>
        <h2 class="section-title">AI Agent 工程师工作内容</h2>
        <p class="section-desc">八大核心工作领域，涵盖从 Agent 开发到企业级 AI 应用的全链路能力。</p>
      </div>
      <div class="card-grid">
        <div class="card reveal"><div class="card-icon green">🤖</div><h3>Agent 开发</h3><p>设计 Agent 架构，实现 ReAct、Plan-and-Execute 等推理模式。</p><div class="card-stack"><span class="chip">LangChain</span><span class="chip">LangGraph</span><span class="chip">PydanticAI</span></div><p style="margin-top:12px;font-size:13px">案例：字节跳动 Coze 平台 Agent 开发</p></div>
        <div class="card reveal reveal-delay-1"><div class="card-icon blue">🔗</div><h3>LLM 集成</h3><p>对接 OpenAI、Claude、Gemini 等 API，处理流式响应与 Token 管理。</p><div class="card-stack"><span class="chip">OpenAI SDK</span><span class="chip">Anthropic SDK</span><span class="chip">LiteLLM</span></div><p style="margin-top:12px;font-size:13px">案例：企业多模型路由网关</p></div>
        <div class="card reveal reveal-delay-2"><div class="card-icon purple">🔧</div><h3>Tool 开发</h3><p>为 Agent 封装可调用的函数工具，连接内外部 API 与数据库。</p><div class="card-stack"><span class="chip">Function Calling</span><span class="chip">Pydantic</span><span class="chip">FastAPI</span></div><p style="margin-top:12px;font-size:13px">案例：飞书/Lark API Tool 集成</p></div>
        <div class="card reveal"><div class="card-icon orange">📚</div><h3>RAG 知识库建设</h3><p>文档解析、分块、向量化、检索增强生成，构建企业知识问答。</p><div class="card-stack"><span class="chip">Qdrant</span><span class="chip">Pinecone</span><span class="chip">LlamaIndex</span></div><p style="margin-top:12px;font-size:13px">案例：企业内部文档智能问答</p></div>
        <div class="card reveal reveal-delay-1"><div class="card-icon green">⚡</div><h3>Workflow 编排</h3><p>设计多步骤 AI 工作流，条件分支、并行执行、Human-in-the-Loop。</p><div class="card-stack"><span class="chip">LangGraph</span><span class="chip">Temporal</span><span class="chip">n8n</span></div><p style="margin-top:12px;font-size:13px">案例：AI 审批流程自动化</p></div>
        <div class="card reveal reveal-delay-2"><div class="card-icon blue">🔌</div><h3>MCP 开发</h3><p>开发 Model Context Protocol Server，标准化 AI 工具接入协议。</p><div class="card-stack"><span class="chip">MCP SDK</span><span class="chip">Cursor</span><span class="chip">Claude Desktop</span></div><p style="margin-top:12px;font-size:13px">案例：Cursor IDE MCP 插件生态</p></div>
        <div class="card reveal"><div class="card-icon purple">👥</div><h3>多 Agent 系统设计</h3><p>设计 Agent 间协作、通信与任务分配的多智能体架构。</p><div class="card-stack"><span class="chip">AutoGen</span><span class="chip">CrewAI</span><span class="chip">A2A</span></div><p style="margin-top:12px;font-size:13px">案例：AI 研发团队协作助手</p></div>
        <div class="card reveal reveal-delay-1"><div class="card-icon orange">🏗️</div><h3>企业级 AI 应用开发</h3><p>安全、可观测、可扩展的 AI 应用全栈开发与部署。</p><div class="card-stack"><span class="chip">Docker</span><span class="chip">K8S</span><span class="chip">Prometheus</span></div><p style="margin-top:12px;font-size:13px">案例：SaaS 产品 AI 功能模块</p></div>
      </div>
    </div>
  </section>
</template>
