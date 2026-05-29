## Architecture Overview

Agent Roadmap Vue 是一个单页个人路线图应用，帮助从前端工程师向 AI Agent 工程师转型。核心用户价值是提供结构化的 6 个月学习路线，包含任务追踪、进度可视化和技能树展示。

## Tech Stack

- **框架**: Vue 3 (Composition API + `<script setup>`)
- **构建**: Vite 6 + TypeScript 5.7，`@` 路径别名指向 `./src`
- **样式**: 纯 CSS Variables（无 CSS-in-JS 或 CSS 框架）
- **状态管理**: Composables（Vue Composition API 原生，无 Vuex/Pinia）
- **持久化**: localStorage（无后端依赖）

## Module Map

项目由以下能力域组成，每个能力域的详细规范见对应 spec：

| 能力域 | 职责 | 关键文件 | Spec 位置 |
|--------|------|----------|-----------|
| 组件架构 | 页面编排、组件层级、Props/Events 契约 | `src/components/` | component-architecture/spec.md |
| 数据流 | 数据定义 -> composable 计算 -> 组件消费 | `src/data/`, `src/types/` | data-flow/spec.md |
| 主题系统 | CSS 变量体系、暗色/亮色切换、响应式断点 | `src/styles/variables.css` | theme-system/spec.md |
| 组合式函数 | 可复用状态逻辑的接口与行为契约 | `src/composables/` | composable-patterns/spec.md |

## Architecture Decisions

### ADR-1: 使用 Composables 替代状态管理库

**Context**: 应用规模较小（< 20 个组件），状态集中在任务进度追踪和主题切换。

**Decision**: 使用 Vue 3 reactive (`ref`/`computed`) + composables 封装共享状态，不使用 Pinia 或 Vuex。

**Rationale**: 模块级单例 ref + composable 返回工厂函数，模式足够应对当前复杂度，减少依赖。

### ADR-2: CSS Variables 替代 CSS-in-JS

**Context**: 需要运行时主题切换（暗色/亮色），且希望迁移到其他框架时样式可复用。

**Decision**: 所有颜色值定义在 CSS 变量中，通过 `[data-theme]` 属性切换。组件内使用 `scoped` 样式。

**Rationale**: 零运行时开销、SSR 友好、框架无关、浏览器原生支持。

### ADR-3: localStorage 作为唯一持久化层

**Context**: 无后端、单用户、纯前端应用。

**Decision**: 任务完成状态、学习连续天数、主题偏好均持久化到 localStorage。

**Rationale**: 零服务端依赖、即开即用、符合应用规模。

### ADR-4: 模块级单例 ref 模式

**Context**: 多个组件需要共享同一个状态（如 tasks 对象被 SectionRoadmap、MonthSection、WeekCard、TaskItem、ProgressDashboard 同步读取）。

**Decision**: composable 文件在模块作用域声明 `ref` 实例，export 的工厂函数 `useXxx()` 返回该实例引用。

**Rationale**: 省去 Provide/Inject 样板代码，所有调用点自然共享同一状态。但限制了 composable 在不同作用域复用——当前场景无此需求。

## Cross-Cutting Concerns

- **类型安全**: 导出的接口和公共 API 必须有显式 TypeScript 类型。`any` 禁止使用，`unknown` 用于不可信输入。
- **主题支持**: 所有渲染到 DOM 的颜色值必须引用 CSS 变量，禁止硬编码色值。
- **持久化键名**: localStorage 键名统一用 `agent-roadmap-*` 前缀。
- **事件防抖**: scroll 事件必须使用 `{ passive: true }` 标志。
- **视差/动画**: IntersectionObserver 用于滚动驱动动画，及时 `unobserve` 避免泄漏。
- **项目信息读取**: Agent 如需读取项目结构、模块组成、技术栈等上下文信息，SHALL 从 `openspec/specs/spec.md` 的 Module Map 中获取，或从对应的 capability spec 中查找。SHALL NOT 直接穿透到源码文件进行"探索式发现"。

## Capability Spec Index

- [组件架构](component-architecture/spec.md)
- [数据流](data-flow/spec.md)
- [主题系统](theme-system/spec.md)
- [组合式函数](composable-patterns/spec.md)
