<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  num: string
  title: string
  difficulty: {
    stars: string
    label: string
  }
  tags: string[]
  value: {
    title: string
    desc: string
  }
  archDiagram: string
}

const projects = ref<Project[]>([
  {
    num: '01',
    title: '企业知识库 Agent',
    difficulty: { stars: '★★★☆☆', label: '中等难度' },
    tags: ['RAG', 'Qdrant', 'FastAPI', 'Vue3'],
    value: {
      title: '项目价值',
      desc: '企业最常见的 AI 落地场景，可直接作为面试作品集核心项目'
    },
    archDiagram: `┌─────────┐ ┌──────────┐ ┌─────────┐
│ Vue3    │───▶│ FastAPI  │───▶│ Qdrant  │
│ Frontend│    │ Backend  │    │ Vector  │
└─────────┘    └────┬─────┘    └─────────┘
                    │
              ┌─────▼────┐
              │ LLM API  │
              │ (Claude) │
              └──────────┘`
  },
  {
    num: '02',
    title: 'AI Coding Agent',
    difficulty: { stars: '★★★★☆', label: '较高难度' },
    tags: ['LangGraph', 'Claude', 'MCP'],
    value: {
      title: '项目价值',
      desc: '对标 Cursor/Copilot 核心能力，展示 Agent 编排与 Tool 集成深度'
    },
    archDiagram: `┌──────────┐    ┌───────────┐
│ LangGraph│───▶│  Claude   │
│ Workflow │    │    API    │
└────┬─────┘    └───────────┘
     │
┌────▼────┐  ┌──────────┐
│ MCP: FS │  │ MCP: Git │
│Read/Write│  │  Commit  │
└─────────┘  └──────────┘`
  },
  {
    num: '03',
    title: 'AI DevOps Agent',
    difficulty: { stars: '★★★★☆', label: '较高难度' },
    tags: ['GitLab API', 'K8S', 'Prometheus', 'LangGraph'],
    value: {
      title: '项目价值',
      desc: '结合已有 DevOps 经验，AI + 运维自动化是热门方向'
    },
    archDiagram: `┌───────────┐    ┌──────────┐
│ LangGraph │───▶│  GitLab  │
│   Agent   │    │  CI/CD   │
└─────┬─────┘    └──────────┘
      │
┌─────▼─────┐  ┌────────────┐
│  K8S API  │  │ Prometheus │
│  Deploy   │  │ Monitoring │
└───────────┘  └────────────┘`
  },
  {
    num: '04',
    title: '多 Agent 研发助手',
    difficulty: { stars: '★★★★★', label: '高难度' },
    tags: ['AutoGen', 'CrewAI', 'MCP'],
    value: {
      title: '项目价值',
      desc: '多 Agent 协作是 2026 最前沿方向，展示系统架构设计能力'
    },
    archDiagram: `┌─────────┐   ┌─────────┐   ┌─────────┐
│PM Agent │   │Dev Agent│   │QA Agent │
└────┬────┘   └────┬────┘   └────┬────┘
     │             │             │
     └─────────────┼─────────────┘
                   │
            ┌──────▼──────┐
            │ Orchestrator│
            │   (CrewAI)  │
            └──────┬──────┘
                   │
            ┌──────▼──────┐
            │  MCP Tools  │
            └─────────────┘`
  }
])
</script>

<template>
  <section id="projects">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Part 05</div>
        <h2 class="section-title">项目实战路线</h2>
        <p class="section-desc">
          四个递进式实战项目，从 RAG 知识库到多 Agent 系统，构建完整作品集。
        </p>
      </div>
      <div
        v-for="project in projects"
        :key="project.num"
        class="project-card reveal"
      >
        <div>
          <div class="project-header">
            <div class="project-num">{{ project.num }}</div>
            <div class="project-title">{{ project.title }}</div>
          </div>
          <div class="difficulty">
            <span class="diff-stars">{{ project.difficulty.stars }}</span
            ><span class="diff-label">{{ project.difficulty.label }}</span>
          </div>
          <div class="card-stack">
            <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>
          <div class="project-value">
            <h5>{{ project.value.title }}</h5>
            <p>{{ project.value.desc }}</p>
          </div>
        </div>
        <div class="arch-diagram">
          <pre>{{ project.archDiagram }}</pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  padding: 32px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  background: var(--bg-card);
  transition: var(--transition);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 24px;
}
.project-card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
.project-card:nth-child(even) {
  direction: rtl;
}
.project-card:nth-child(even) > * {
  direction: ltr;
}
.project-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
}
.project-num {
  font-size: 48px;
  font-weight: 800;
  opacity: 0.4;
  line-height: 1;
  font-family: var(--mono);
}
.project-title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.difficulty {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
}
.diff-stars {
  color: var(--orange);
  font-size: 14px;
  letter-spacing: 2px;
}
.diff-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-left: 8px;
}
.arch-diagram {
  height: 100%;
  padding: 24px;
  border-radius: var(--radius);
  border: 1px dashed var(--border);
  background: var(--bg);
  font-family: var(--mono);
  font-size: 12px;
  line-height: 1.8;
  color: var(--text-secondary);
}
.arch-diagram pre {
  margin: 0;
  white-space: pre;
  font-family: inherit;
}
.project-value {
  margin-top: 16px;
  padding: 16px;
  border-radius: var(--radius);
  background: var(--accent-dim);
  border-left: 3px solid var(--accent);
}
.project-value h5 {
  font-size: 13px;
  color: var(--accent);
  margin-bottom: 4px;
  font-weight: 600;
}
.project-value p {
  font-size: 14px;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .project-card {
    grid-template-columns: 1fr;
  }
  .project-card:nth-child(even) {
    direction: ltr;
  }
}
</style>
