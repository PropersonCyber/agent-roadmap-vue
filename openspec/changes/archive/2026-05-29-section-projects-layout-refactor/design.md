## Context

当前 SectionProjects.vue 组件实现存在两个问题：
1. **布局问题**: `project-num` 和 `project-title` 是独立的块级元素，分别占据一行，视觉上编号与标题的关联性较弱
2. **维护问题**: 4 个项目卡片完全硬编码在模板中，新增/修改项目需要改动多处 HTML

## Goals / Non-Goals

**Goals:**
- 将编号和标题整合到同一行，增强视觉关联性
- 抽离数据层，使用 `v-for` 循环渲染提高可维护性
- 保持所有现有视觉样式和交互行为

**Non-Goals:**
- 不修改卡片整体网格布局（左侧内容/右侧架构图）
- 不修改响应式断点行为
- 不添加新的功能特性

## Decisions

### 1. 数据结构使用 Interface 定义
**决策**: 在 `<script setup>` 中定义 `Project` interface，项目数组使用 `ref<Project[]>()`

**理由**:
- 类型安全，便于 IDE 提示和错误检查
- 为后续可能的动态数据加载（如从 API 获取）预留扩展空间

### 2. 布局使用 Flex + Baseline 对齐
**决策**: `.project-header` 使用 `display: flex; align-items: baseline`

**理由**:
- `baseline` 对齐确保 48px 的编号和 22px 的标题在文字基线对齐，视觉上更自然
- 预留 `gap: 12px` 保证间距一致

### 3. 透明度调整为 0.4
**决策**: 将 `project-num` 的 `opacity` 从 `0.08` 提升到 `0.4`

**理由**:
- `0.08` 在原独立行布局中作为超大水印效果合适
- 同行显示后需要更高的可辨识度
- `0.4` 仍保持辅助/装饰性视觉效果，但不会过于突兀

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| 编号透明度提升可能影响原有设计风格 | 保持其他样式（字号 48px、字重 800）不变，仅调整透明度，视觉变化可控 |
| v-for 循环后 nth-child(even) 样式可能异常 | 循环渲染保持相同 DOM 结构，nth-child 选择器继续生效 |

## Migration Plan

1. 创建数据数组和 interface
2. 重构模板为 v-for 循环
3. 添加 .project-header 包裹层
4. 更新 CSS：新增 .project-header 样式，调整 .project-num 透明度
5. 本地验证：检查 4 张卡片的视觉一致性和响应式行为

## Open Questions

（无）
