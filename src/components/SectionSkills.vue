<script setup lang="ts">
import { onMounted, ref } from "vue";

// 能力成长图谱数据
interface Ability {
  label: string;
  sublabel: string;
  target: number;
  color: string;
}

const abilities = ref<Ability[]>([
  {
    label: "前端工程",
    sublabel: "已有优势",
    target: 90,
    color: "var(--accent)",
  },
  { label: "Python", sublabel: "Month 1", target: 30, color: "var(--blue)" },
  {
    label: "LLM 基础",
    sublabel: "Month 2",
    target: 50,
    color: "var(--purple)",
  },
  {
    label: "Agent 开发",
    sublabel: "Month 3-4",
    target: 70,
    color: "var(--orange)",
  },
  {
    label: "AI 工程化",
    sublabel: "Month 5-6",
    target: 85,
    color: "var(--red)",
  },
]);

// 技能树数据
interface SkillLevel {
  level: number;
  badgeClass: string;
  title: string;
  nodes: string[];
}

const skillLevels = ref<SkillLevel[]>([
  {
    level: 1,
    badgeClass: "l1",
    title: "基础编程",
    nodes: ["Python", "FastAPI", "AsyncIO", "Pydantic"],
  },
  {
    level: 2,
    badgeClass: "l2",
    title: "大模型基础",
    nodes: ["Prompt Engineering", "Token", "Embedding", "Transformer"],
  },
  {
    level: 3,
    badgeClass: "l3",
    title: "Agent 开发",
    nodes: ["LangChain", "LangGraph", "CrewAI", "AutoGen", "PydanticAI"],
  },
  {
    level: 4,
    badgeClass: "l4",
    title: "RAG",
    nodes: ["Chunk", "Embedding", "Retrieval", "Rerank"],
  },
  {
    level: 5,
    badgeClass: "l5",
    title: "AI 工程化",
    nodes: [
      "MCP",
      "Function Calling",
      "A2A",
      "Agent Memory",
      "Agent Evaluation",
    ],
  },
]);

const abilityBars = ref<HTMLElement[]>([]);

onMounted(() => {
  const bars = document.querySelectorAll(".ability-bar");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          bar.style.height = bar.getAttribute("data-target") + "%";
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 },
  );
  bars.forEach((b) => observer.observe(b));
});
</script>

<template>
  <section id="skills">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">Part 03</div>
        <h2 class="section-title">技能树</h2>
        <p class="section-desc">
          五层递进式技能体系，从前端工程师已有基础出发，逐步构建 AI Agent
          全栈能力。
        </p>
      </div>
      <div class="reveal" style="margin-bottom: 48px">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px">
          能力成长图谱
        </h3>
        <p
          style="
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 24px;
          "
        >
          从前端能力到 Agent 工程师的能力迁移与增长
        </p>
        <div class="ability-map" id="abilityMap">
          <div
            v-for="ability in abilities"
            :key="ability.label"
            class="ability-col"
          >
            <div class="ability-bar-wrap">
              <div
                class="ability-bar"
                :data-val="ability.target + '%'"
                :data-target="ability.target"
                :style="{ height: 0, background: ability.color }"
              ></div>
            </div>
            <div class="ability-label">{{ ability.label }}</div>
            <div class="ability-sublabel">{{ ability.sublabel }}</div>
          </div>
        </div>
      </div>
      <div class="skill-tree reveal">
        <template
          v-for="(skillLevel, index) in skillLevels"
          :key="skillLevel.level"
        >
          <div class="skill-level">
            <div class="skill-level-left">
              <div :class="['level-badge', skillLevel.badgeClass]">
                Level {{ skillLevel.level }}
              </div>
              <h4 class="skill-level-title">{{ skillLevel.title }}</h4>
            </div>
            <div class="skill-nodes">
              <span
                v-for="node in skillLevel.nodes"
                :key="node"
                class="skill-node"
                >{{ node }}</span
              >
            </div>
          </div>
          <div
            v-if="index < skillLevels.length - 1"
            class="skill-connector"
          ></div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ability-map {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-top: 32px;
}
.ability-col {
  text-align: center;
}
.ability-bar-wrap {
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 8px;
}
.ability-bar {
  width: 100%;
  max-width: 48px;
  border-radius: 8px 8px 0 0;
  transition: height 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}
.ability-bar::after {
  content: attr(data-val);
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
}
.ability-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 12px;
  font-weight: 500;
}
.ability-sublabel {
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 2px;
}

.skill-tree {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
}

.skill-level {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 32px;
  align-items: start;
  padding: 24px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--bg-card);
  transition: var(--transition);
}
.skill-level:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.skill-level-left {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.level-badge {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.02em;
}
.level-badge.l1 {
  background: var(--accent-dim);
  color: var(--accent);
}
.level-badge.l2 {
  background: var(--blue-dim);
  color: var(--blue);
}
.level-badge.l3 {
  background: var(--purple-dim);
  color: var(--purple);
}
.level-badge.l4 {
  background: var(--orange-dim);
  color: var(--orange);
}
.level-badge.l5 {
  background: rgba(239, 68, 68, 0.12);
  color: var(--red);
}

.skill-level-title {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: var(--text);
}

.skill-nodes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.skill-node {
  padding: 10px 18px;
  border-radius: 10px;
  border: 1px solid var(--border);
  font-size: 14px;
  font-weight: 500;
  transition: var(--transition);
  cursor: default;
}
.skill-node:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
  color: var(--accent);
  transform: scale(1.04);
}

.skill-connector {
  width: 2px;
  height: 24px;
  background: linear-gradient(var(--accent), var(--purple));
  margin: 0 auto;
  opacity: 0.3;
}

@media (max-width: 900px) {
  .skill-level {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .skill-level-left {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
  .ability-map {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
@media (max-width: 600px) {
  .ability-map {
    grid-template-columns: repeat(2, 1fr);
  }
  .skill-level-left {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
