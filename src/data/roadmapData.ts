import type { Month } from '@/types/roadmap'

export const roadmapData: Month[] = [
  {
    id: 'month1', num: 'Month 1', title: 'Python + FastAPI',
    goal: '掌握 Python 异步编程，能独立开发 RESTful API 服务', hours: '160 小时',
    weeks: [
      { id: 'm1w1', num: 'Week 1', title: 'Python 基础强化', goal: '掌握 Python 类型系统、核心语法与数据结构', deliverable: 'Python 基础练习题集 + 10 道 LeetCode Easy', tasks: [
        { id: 'm1w1t1', text: '配置 Python 开发环境（pyenv + poetry + VSCode）' },
        { id: 'm1w1t2', text: '掌握类型系统：Type Hints、Generic、Protocol、Union' },
        { id: 'm1w1t3', text: '理解装饰器原理，手写 @timer、@retry、@cache 装饰器' },
        { id: 'm1w1t4', text: '掌握上下文管理器（with、__enter__/__exit__、contextlib）' },
        { id: 'm1w1t5', text: '完成 10 道 LeetCode Easy 题目（Python 实现）' }
      ]},
      { id: 'm1w2', num: 'Week 2', title: '异步编程', goal: '理解 Python 协程模型，能写出高效的异步代码', deliverable: '异步 HTTP 客户端 + 同步/异步性能对比报告', tasks: [
        { id: 'm1w2t1', text: '理解协程概念：coroutine、event loop、Future/Task' },
        { id: 'm1w2t2', text: '掌握 asyncio.run、gather、create_task、wait_for 用法' },
        { id: 'm1w2t3', text: '实现一个异步 HTTP 客户端（使用 aiohttp）' },
        { id: 'm1w2t4', text: '编写同步 vs 异步性能对比脚本，输出 Benchmark 报告' }
      ]},
      { id: 'm1w3', num: 'Week 3', title: 'FastAPI 实战', goal: '搭建 FastAPI 项目，实现 CRUD、认证、测试全套流程', deliverable: '一个完整的 FastAPI CRUD 服务 + 测试用例', tasks: [
        { id: 'm1w3t1', text: '搭建 FastAPI 项目结构（router、service、model 分层）' },
        { id: 'm1w3t2', text: '实现 RESTful CRUD API + Pydantic Schema 验证' },
        { id: 'm1w3t3', text: '添加 JWT 认证中间件（access_token + refresh_token）' },
        { id: 'm1w3t4', text: '编写 API 单元测试（pytest + httpx，覆盖率 80%+）' },
        { id: 'm1w3t5', text: '配置 OpenAPI 文档 + 异常处理中间件' }
      ]},
      { id: 'm1w4', num: 'Week 4', title: '月度项目 + 复盘', goal: '用 FastAPI 重写已有后端服务，巩固本月技能', deliverable: '重写后的后端服务 + 项目 README', tasks: [
        { id: 'm1w4t1', text: '选一个已有的 Node.js 后端项目，用 FastAPI 重写' },
        { id: 'm1w4t2', text: '集成 PostgreSQL + SQLAlchemy 2.0（async session）' },
        { id: 'm1w4t3', text: '编写项目 README + API 文档（含 curl 示例）' },
        { id: 'm1w4t4', text: '代码自查：mypy 类型覆盖率 100%，pytest 覆盖率 80%+' }
      ]}
    ]
  },
  {
    id: 'month2', num: 'Month 2', title: 'LLM 基础 + Prompt Engineering',
    goal: '理解 LLM 工作原理，掌握 Prompt 设计与 API 调用', hours: '140 小时',
    weeks: [
      { id: 'm2w1', num: 'Week 5', title: 'Transformer 架构原理', goal: '深入理解 Transformer，为后续 Agent 开发打基础', deliverable: 'Transformer 核心组件笔记 + 可视化 Attention 图', tasks: [
        { id: 'm2w1t1', text: '学习 Self-Attention 机制（Q/K/V 矩阵运算推导）' },
        { id: 'm2w1t2', text: '理解 Multi-Head Attention、Layer Norm、Positional Encoding' },
        { id: 'm2w1t3', text: '阅读 "Attention Is All You Need" 论文核心章节' },
        { id: 'm2w1t4', text: '使用 bertviz 等工具可视化 Attention 权重分布' }
      ]},
      { id: 'm2w2', num: 'Week 6', title: 'Prompt Engineering', goal: '掌握 Prompt 设计模式，能针对不同场景写出高质量 Prompt', deliverable: 'Prompt 设计手册（含 10+ 场景模板）', tasks: [
        { id: 'm2w2t1', text: '掌握基础技巧：Zero-shot、Few-shot、Chain-of-Thought' },
        { id: 'm2w2t2', text: '学习进阶模式：Self-Consistency、Tree-of-Thought、ReAct' },
        { id: 'm2w2t3', text: '实践 System Prompt 设计（角色设定、约束、输出格式）' },
        { id: 'm2w2t4', text: '整理个人 Prompt 模板库（分类、翻译、代码生成、分析）' }
      ]},
      { id: 'm2w3', num: 'Week 7', title: 'LLM API 集成', goal: '熟练调用 OpenAI 和 Claude API，处理 Token 与流式响应', deliverable: '多模型 API 调用封装库', tasks: [
        { id: 'm2w3t1', text: '对接 OpenAI Chat Completion API（同步 + Streaming）' },
        { id: 'm2w3t2', text: '对接 Anthropic Claude Messages API（含 extended thinking）' },
        { id: 'm2w3t3', text: '实现 Token 计数、预算管理与自动截断' },
        { id: 'm2w3t4', text: '封装统一的 LLM Client（支持 OpenAI / Claude / Gemini）' }
      ]},
      { id: 'm2w4', num: 'Week 8', title: '月度项目 + 复盘', goal: '开发一个 Prompt 测试平台，综合运用本月技能', deliverable: 'Prompt Playground 应用（可部署演示）', tasks: [
        { id: 'm2w4t1', text: '用 FastAPI + Vue3 搭建 Prompt 测试平台' },
        { id: 'm2w4t2', text: '支持多模型对比（同时调用 2 个模型，并排展示结果）' },
        { id: 'm2w4t3', text: '添加 Token 用量统计与成本计算' },
        { id: 'm2w4t4', text: '实现 Prompt 模板保存/编辑/导出功能' }
      ]}
    ]
  },
  {
    id: 'month3', num: 'Month 3', title: 'LangChain + Tool Calling',
    goal: '使用 LangChain 构建 Agent，实现 Tool Calling 与 Function Calling', hours: '180 小时',
    weeks: [
      { id: 'm3w1', num: 'Week 9', title: 'LangChain 核心概念', goal: '掌握 Chain、Agent、Memory 三大核心抽象', deliverable: 'LangChain 基础 Demo 集合', tasks: [
        { id: 'm3w1t1', text: '理解 Chain 抽象：LLMChain、SequentialChain、RouterChain' },
        { id: 'm3w1t2', text: '掌握 PromptTemplate 与 ChatPromptTemplate 最佳实践' },
        { id: 'm3w1t3', text: '实现 ConversationBufferMemory 与 SummaryMemory' },
        { id: 'm3w1t4', text: '对比 LCEL（LangChain Expression Language）与传统写法' }
      ]},
      { id: 'm3w2', num: 'Week 10', title: 'Tool Calling 机制', goal: '理解 Tool Calling 原理，能定义和注册自定义 Tool', deliverable: '多 Tool Agent Demo（天气 + 计算器 + 搜索）', tasks: [
        { id: 'm3w2t1', text: '理解 Function Calling 原理：Schema 定义、参数解析、结果回传' },
        { id: 'm3w2t2', text: '使用 @tool 装饰器定义自定义 Tool（Pydantic 描述 schema）' },
        { id: 'm3w2t3', text: '集成外部 API Tool（天气查询、汇率转换、网页搜索）' },
        { id: 'm3w2t4', text: '实现 Tool 调用错误处理与重试机制' }
      ]},
      { id: 'm3w3', num: 'Week 11', title: 'Agent 推理模式', goal: '掌握 ReAct 和 Plan-Execute 两种核心推理模式', deliverable: 'ReAct Agent + Plan-Execute Agent 对比 Demo', tasks: [
        { id: 'm3w3t1', text: '实现 ReAct Agent（Thought → Action → Observation 循环）' },
        { id: 'm3w3t2', text: '实现 Plan-and-Execute Agent（先规划再执行）' },
        { id: 'm3w3t3', text: '理解 Structured Output：用 Pydantic 约束 LLM 输出格式' },
        { id: 'm3w3t4', text: '对比两种模式在不同场景下的效果，记录优缺点' }
      ]},
      { id: 'm3w4', num: 'Week 12', title: '月度项目 + 复盘', goal: '开发一个实用的多 Tool Agent 应用', deliverable: 'AI 个人助理 Agent（可演示）', tasks: [
        { id: 'm3w4t1', text: '设计 Agent 架构：Router → 专业 Agent → Tools' },
        { id: 'm3w4t2', text: '集成至少 5 个 Tool（日历、邮件、搜索、文件、天气）' },
        { id: 'm3w4t3', text: '添加 Agent 对话历史持久化（SQLite）' },
        { id: 'm3w4t4', text: '编写 Agent E2E 测试用例（模拟多轮对话场景）' }
      ]}
    ]
  },
  {
    id: 'month4', num: 'Month 4', title: 'LangGraph + Agent 开发',
    goal: '掌握状态图编排，构建复杂 Agent Workflow', hours: '200 小时',
    weeks: [
      { id: 'm4w1', num: 'Week 13', title: 'StateGraph 基础', goal: '理解 LangGraph 的状态图模型，能构建基本 Workflow', deliverable: 'LangGraph 基础 Workflow 示例集', tasks: [
        { id: 'm4w1t1', text: '理解 StateGraph 核心概念：State、Node、Edge、Compile' },
        { id: 'm4w1t2', text: '实现线性 Workflow：多步骤数据管道（每个 Node 是纯函数）' },
        { id: 'm4w1t3', text: '掌握 TypedDict / Pydantic State Schema 定义' },
        { id: 'm4w1t4', text: '学习 Checkpoint 机制：实现 Workflow 暂停与恢复' }
      ]},
      { id: 'm4w2', num: 'Week 14', title: '条件分支与循环', goal: '在 Workflow 中加入条件路由和循环逻辑', deliverable: '条件路由 + 循环 Workflow Demo', tasks: [
        { id: 'm4w2t1', text: '实现 conditional_edges：根据 State 动态选择下一个 Node' },
        { id: 'm4w2t2', text: '实现循环模式：Agent 自我反思 → 修正 → 重新执行' },
        { id: 'm4w2t3', text: '实现并行分支：多个 Node 同时执行后汇聚（Send API）' },
        { id: 'm4w2t4', text: '构建 AI Code Review Workflow（分析 → 反馈 → 修正 → 验证）' }
      ]},
      { id: 'm4w3', num: 'Week 15', title: 'Human-in-the-Loop', goal: '在 Agent Workflow 中集成人工审批节点', deliverable: '带人工审批的 AI Workflow Demo', tasks: [
        { id: 'm4w3t1', text: '实现 interrupt() 暂停 Workflow 等待人工输入' },
        { id: 'm4w3t2', text: '实现 Command() 恢复暂停的 Workflow' },
        { id: 'm4w3t3', text: '设计审批界面（Vue3 前端 + WebSocket 通知）' },
        { id: 'm4w3t4', text: '实现超时自动拒绝 + 审批日志记录' }
      ]},
      { id: 'm4w4', num: 'Week 16', title: '月度项目 + 复盘', goal: '开发 AI Code Review Agent', deliverable: 'AI Code Review Agent（可实际使用）', tasks: [
        { id: 'm4w4t1', text: '设计 Agent 架构：PR 分析 → Diff 解析 → 逐文件 Review → 汇总报告' },
        { id: 'm4w4t2', text: '集成 GitHub API Tool（获取 PR、Diff、文件内容）' },
        { id: 'm4w4t3', text: '实现 Review 质量评估：对比人工 Review 与 Agent Review 一致性' },
        { id: 'm4w4t4', text: '部署为 GitHub App / Webhook，真实场景试用' }
      ]}
    ]
  },
  {
    id: 'month5', num: 'Month 5', title: 'RAG + 向量数据库',
    goal: '构建完整的 RAG pipeline，实现企业级知识问答', hours: '180 小时',
    weeks: [
      { id: 'm5w1', num: 'Week 17', title: '文档处理与 Chunk 策略', goal: '掌握文档解析与分块技术，打好数据基础', deliverable: '文档处理 Pipeline（支持 PDF/Markdown/HTML）', tasks: [
        { id: 'm5w1t1', text: '实现多格式文档解析（PDF→Markdown、HTML→Text、CSV→Table）' },
        { id: 'm5w1t2', text: '理解 Chunk 策略：Fixed-size、Semantic、Recursive、Sentence-based' },
        { id: 'm5w1t3', text: '实现 Chunk 重叠（Overlap）与元数据保留（页码、标题、来源）' },
        { id: 'm5w1t4', text: '对比不同 Chunk 策略的检索效果，输出评估报告' }
      ]},
      { id: 'm5w2', num: 'Week 18', title: 'Embedding 与向量检索', goal: '掌握 Embedding 模型选择与向量数据库使用', deliverable: '向量检索服务（支持多种 Embedding 模型切换）', tasks: [
        { id: 'm5w2t1', text: '对比主流 Embedding 模型（OpenAI text-embedding-3、BGE、Cohere）' },
        { id: 'm5w2t2', text: '部署 Qdrant 向量数据库（Docker + 索引优化）' },
        { id: 'm5w2t3', text: '实现 Hybrid Search：向量相似度 + BM25 关键词混合检索' },
        { id: 'm5w2t4', text: '实现检索缓存机制（LRU + Redis）提升高频查询性能' }
      ]},
      { id: 'm5w3', num: 'Week 19', title: 'Rerank 与 RAG 优化', goal: '掌握 Rerank 技术和 RAG 质量优化方法', deliverable: 'RAG 系统优化前后效果对比报告', tasks: [
        { id: 'm5w3t1', text: '集成 Rerank 模型（Cohere Rerank / BGE-Reranker）' },
        { id: 'm5w3t2', text: '实现 Query Rewriting：用 LLM 优化用户查询再检索' },
        { id: 'm5w3t3', text: '构建 RAG 评估体系：Retrieval Recall、Answer Faithfulness、Relevance' },
        { id: 'm5w3t4', text: '优化 RAG 幻觉：引用溯源 + 置信度标注 + "我不知道"策略' }
      ]},
      { id: 'm5w4', num: 'Week 20', title: '月度项目 + 复盘', goal: '构建企业级知识问答系统', deliverable: '企业知识库 Agent（完整 RAG 系统）', tasks: [
        { id: 'm5w4t1', text: '实现完整的 RAG Pipeline（摄入→分块→向量化→检索→生成）' },
        { id: 'm5w4t2', text: '添加多轮对话支持（Conversational RAG + 上下文管理）' },
        { id: 'm5w4t3', text: '构建前端管理界面（文档上传、问答测试、检索高亮）' },
        { id: 'm5w4t4', text: '部署到生产环境（Docker Compose + Nginx + SSL）' }
      ]}
    ]
  },
  {
    id: 'month6', num: 'Month 6', title: 'MCP + 多 Agent 系统',
    goal: '开发 MCP Server，设计多 Agent 协作系统', hours: '200 小时',
    weeks: [
      { id: 'm6w1', num: 'Week 21', title: 'MCP 协议与 SDK', goal: '理解 MCP 协议规范，能开发标准 MCP Server', deliverable: '3 个可用的 MCP Server（File / DB / API）', tasks: [
        { id: 'm6w1t1', text: '阅读 MCP 协议规范（Resources、Tools、Prompts、Sampling）' },
        { id: 'm6w1t2', text: '用 Python MCP SDK 开发 File System MCP Server' },
        { id: 'm6w1t3', text: '开发 Database MCP Server（支持 PostgreSQL 查询与 Schema 发现）' },
        { id: 'm6w1t4', text: '开发 REST API MCP Server（将任意 OpenAPI 接口封装为 MCP Tool）' }
      ]},
      { id: 'm6w2', num: 'Week 22', title: '多 Agent 框架', goal: '掌握 CrewAI 和 AutoGen 两种多 Agent 框架', deliverable: 'CrewAI vs AutoGen 对比 Demo', tasks: [
        { id: 'm6w2t1', text: '用 CrewAI 实现角色化 Agent 协作（定义 Agent Role、Goal、Task）' },
        { id: 'm6w2t2', text: '用 AutoGen 实现对话式 Agent 协作（GroupChat、RoundRobin）' },
        { id: 'm6w2t3', text: '对比两种框架的适用场景，输出选型指南' },
        { id: 'm6w2t4', text: '实现 Agent 间通信协议（A2A - Agent-to-Agent Protocol 概念验证）' }
      ]},
      { id: 'm6w3', num: 'Week 23', title: 'Agent 评估与记忆', goal: '建立 Agent 系统的评估框架与长期记忆机制', deliverable: 'Agent Eval 框架 + Memory 服务', tasks: [
        { id: 'm6w3t1', text: '设计 Agent 评估指标：任务成功率、Tool 选择准确率、响应延迟' },
        { id: 'm6w3t2', text: '实现 Agent Trace 系统（记录每一步的 Thought/Action/Observation）' },
        { id: 'm6w3t3', text: '实现 Agent Memory：短期记忆（Redis）+ 长期记忆（向量数据库）' },
        { id: 'm6w3t4', text: '构建 Eval 数据集 + 自动化回归测试 Pipeline' }
      ]},
      { id: 'm6w4', num: 'Week 24', title: '最终项目 + 作品集', goal: '完成标志性作品——多 Agent 研发助手', deliverable: '多 Agent 研发助手系统 + 完整作品集', tasks: [
        { id: 'm6w4t1', text: '设计系统架构：PM Agent + Dev Agent + QA Agent + Orchestrator' },
        { id: 'm6w4t2', text: '为每个 Agent 开发专属 MCP Server（需求管理/代码生成/测试）' },
        { id: 'm6w4t3', text: '实现完整研发流程：需求 → 开发 → 测试 → Code Review → 部署' },
        { id: 'm6w4t4', text: '整理作品集：README、架构图、Demo 视频、技术博客' },
        { id: 'm6w4t5', text: '部署在线 Demo + 准备面试话术（项目亮点 + 技术难点）' }
      ]}
    ]
  }
]
