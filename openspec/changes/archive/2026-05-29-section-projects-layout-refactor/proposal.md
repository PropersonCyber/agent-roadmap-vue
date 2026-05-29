## Why

SectionProjects.vue 组件当前将 4 个项目卡片硬编码在模板中，且 project-num 和 project-title 分别占据独立行。这种布局导致编号与标题之间的视觉关联较弱，同时硬编码结构不利于后续维护和扩展。

## What Changes

- 将 project-num 和 project-title 包裹在同一容器中，使用 flex 布局实现同行显示
- 提高 project-num 的透明度（从 0.08 到 0.4），使编号更清晰可辨
- 抽离项目数据为独立数组，使用 `v-for` 渲染项目卡片
- 添加 `.project-header` CSS 类用于控制标题行布局
- 保持现有卡片样式、hover 效果和响应式行为不变

## Capabilities

### New Capabilities
- `section-projects-refactor`: SectionProjects 组件布局重构，包含项目数据结构化和模板循环渲染

### Modified Capabilities
- （无）

## Impact

- **受影响文件**: `src/components/SectionProjects.vue`
- **API 变更**: 无
- **样式变更**: 新增 `.project-header` 类，调整 `.project-num` 透明度
- **向后兼容**: 100% 兼容，仅内部实现重构
