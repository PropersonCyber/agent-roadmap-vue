<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('python')

const tabs = [
  { id: 'python', label: 'Python' },
  { id: 'llm', label: 'LLM' },
  { id: 'langgraph', label: 'LangGraph' },
  { id: 'rag', label: 'RAG' },
  { id: 'mcp', label: 'MCP' },
  { id: 'agent', label: 'Agent' }
]

const resources: Record<string, Array<{ type: string; url: string; label: string; desc: string }>> = {
  python: [
    { type: '官方文档', url: 'https://docs.python.org/3/', label: 'Python 3 官方文档', desc: 'Python 语言权威参考' },
    { type: '官方文档', url: 'https://fastapi.tiangolo.com/', label: 'FastAPI 官方文档', desc: '现代 Python Web 框架' },
    { type: 'Github', url: 'https://github.com/tiangolo/full-stack-fastapi-template', label: 'full-stack-fastapi-template', desc: 'FastAPI 全栈项目模板' },
    { type: '视频课程', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc', label: 'Python Full Course - Mosh', desc: '6 小时 Python 入门' },
    { type: '推荐书籍', url: '#', label: '《Fluent Python》', desc: 'Python 进阶必读' },
    { type: '推荐书籍', url: '#', label: '《Architecture Patterns with Python》', desc: 'Python 架构设计' }
  ],
  llm: [
    { type: '官方文档', url: 'https://platform.openai.com/docs', label: 'OpenAI API 文档', desc: 'GPT 系列 API 参考' },
    { type: '官方文档', url: 'https://docs.anthropic.com/', label: 'Anthropic Claude 文档', desc: 'Claude API 与 Prompt 指南' },
    { type: 'Github', url: 'https://github.com/dair-ai/Prompt-Engineering-Guide', label: 'Prompt Engineering Guide', desc: 'Prompt 工程完整指南' },
    { type: '视频课程', url: 'https://www.deeplearning.ai/short-courses/', label: 'DeepLearning.AI 短课', desc: 'Andrew Ng LLM 系列课程' },
    { type: '推荐书籍', url: '#', label: '《Build a Large Language Model (From Scratch)》', desc: '从零理解 LLM 原理' }
  ],
  langgraph: [
    { type: '官方文档', url: 'https://langchain-ai.github.io/langgraph/', label: 'LangGraph 官方文档', desc: '状态图 Agent 编排框架' },
    { type: 'Github', url: 'https://github.com/langchain-ai/langgraph', label: 'langchain-ai/langgraph', desc: 'LangGraph 源码与示例' },
    { type: '视频课程', url: 'https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/', label: 'AI Agents in LangGraph', desc: 'DeepLearning.AI 官方课程' },
    { type: '推荐书籍', url: '#', label: 'LangChain 官方 Cookbook', desc: 'LangChain 实战食谱' }
  ],
  rag: [
    { type: '官方文档', url: 'https://qdrant.tech/documentation/', label: 'Qdrant 向量数据库文档', desc: '开源向量搜索引擎' },
    { type: 'Github', url: 'https://github.com/run-llama/llama_index', label: 'LlamaIndex', desc: 'RAG 框架标杆项目' },
    { type: 'Github', url: 'https://github.com/chroma-core/chroma', label: 'Chroma', desc: '轻量级 Embedding 数据库' },
    { type: '视频课程', url: 'https://www.deeplearning.ai/short-courses/building-applications-vector-databases/', label: 'Building Apps with Vector Databases', desc: '向量数据库应用开发' },
    { type: '推荐书籍', url: '#', label: '《RAG 实战指南》', desc: 'RAG 系统设计参考' }
  ],
  mcp: [
    { type: '官方文档', url: 'https://modelcontextprotocol.io/', label: 'MCP 官方规范', desc: 'Model Context Protocol 标准' },
    { type: 'Github', url: 'https://github.com/modelcontextprotocol/servers', label: 'MCP Servers 官方仓库', desc: '官方 MCP Server 实现集合' },
    { type: 'Github', url: 'https://github.com/modelcontextprotocol/python-sdk', label: 'MCP Python SDK', desc: 'Python MCP Server 开发' },
    { type: '视频课程', url: 'https://www.youtube.com/results?search_query=MCP+Model+Context+Protocol+tutorial', label: 'MCP 开发教程', desc: 'MCP Server 开发实战' }
  ],
  agent: [
    { type: '官方文档', url: 'https://python.langchain.com/docs/concepts/agents/', label: 'LangChain Agents 文档', desc: 'Agent 核心概念与模式' },
    { type: 'Github', url: 'https://github.com/microsoft/autogen', label: 'Microsoft AutoGen', desc: '多 Agent 对话框架' },
    { type: 'Github', url: 'https://github.com/crewAIInc/crewAI', label: 'CrewAI', desc: '角色化 Multi-Agent 框架' },
    { type: 'Github', url: 'https://github.com/pydantic/pydantic-ai', label: 'PydanticAI', desc: '类型安全 Agent 框架' },
    { type: '视频课程', url: 'https://www.deeplearning.ai/short-courses/ai-agentic-design-patterns-with-autogen/', label: 'AI Agentic Design Patterns with AutoGen', desc: 'AutoGen Agent 设计模式' },
    { type: '推荐书籍', url: '#', label: '《AI Agents in Action》', desc: 'Agent 系统工程实践' }
  ]
}
</script>

<template>
  <section id="resources">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Part 07</div>
        <h2 class="section-title">学习资源</h2>
        <p class="section-desc">精选官方文档、开源项目、视频课程与推荐书籍，助力高效学习。</p>
      </div>
      <div class="resource-tabs reveal">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="resource-tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >{{ tab.label }}</button>
      </div>
      <div
        v-for="(items, key) in resources"
        :key="key"
        class="resource-panel reveal"
        :class="{ active: activeTab === key }"
      >
        <div class="resource-grid">
          <div v-for="(item, idx) in items" :key="idx" class="resource-item">
            <div class="resource-type">{{ item.type }}</div>
            <a :href="item.url" target="_blank">{{ item.label }}</a>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resource-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:32px}
.resource-tab{padding:8px 18px;border-radius:8px;font-size:13px;font-weight:500;border:1px solid var(--border);transition:var(--transition)}
.resource-tab:hover,.resource-tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.resource-panel{display:none}
.resource-panel.active{display:block}
.resource-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
.resource-item{padding:20px;border-radius:var(--radius);border:1px solid var(--border);background:var(--bg-card);transition:var(--transition)}
.resource-item:hover{border-color:var(--accent);transform:translateY(-2px)}
.resource-type{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:6px}
.resource-item a{font-size:14px;font-weight:500;color:var(--accent);word-break:break-all}
.resource-item a:hover{text-decoration:underline}
.resource-item .desc{font-size:13px;color:var(--text-secondary);margin-top:4px}
</style>
