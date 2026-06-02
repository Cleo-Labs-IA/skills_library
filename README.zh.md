# Compliance Product Guidance

[![npm](https://img.shields.io/npm/v/@cleo-labs/skills-mcp?label=%40cleo-labs%2Fskills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![npm downloads](https://img.shields.io/npm/dm/@cleo-labs/skills-mcp)](https://www.npmjs.com/package/@cleo-labs/skills-mcp)
[![MCP server](https://img.shields.io/badge/MCP-server-blue)](./mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/skills-45-blue)](./skills)
![GitHub stars](https://img.shields.io/github/stars/Cleo-Labs-IA/skills_library?style=social)
[![Cleo Labs](https://img.shields.io/badge/built%20by-Cleo%20Labs-0008CF)](https://cleolabs.co)

面向实物产品的 AI 合规副驾驶 —— 把 REACH、FDA、CE、海关，以及另外 24 项法规，直接放进你的 Claude Code / Cursor / Codex。

## 这是什么？

把实物产品卖到国外，意味着要穿越分布在 49 个国家、超过 25,000 项法规：你从没听说过的物质禁令、每季度都在变的标签要求、能让关税上下浮动 12% 的海关编码、一夜之间就能把你下架的电商平台规则。大多数小品牌都是用昂贵的方式学会这些 —— 在边境，或者在亚马逊把链接下架之后。

Compliance Product Guidance 是 **40 个生产级 Skill + 2 个 MCP 服务器**，教 AI 智能体回答一个问题：*"我到底要做些什么，才能把这个产品卖到这个市场？"*

旗舰 Skill 是 `product-compliance`。你贴上配料表（或者 BOM，或者配方），选好目标市场，它会执行：

```
配料  →  CAS 号解析  →  13 个法规数据库  →
按物质按市场出结论  →  营收风险测算
```

输出示例：

```
Retinol 0.4%   欧盟: 不通过 (附录 III 面部产品 0.3% 上限，2025 年 11 月生效)   年度风险营收: 约 €180k
Retinol 0.4%   美国: 通过 (无联邦上限；此剂量下 CA Prop 65 警示不强制)
Retinol 0.4%   英国: 不通过 (UK Cosmetics Reg 沿用欧盟附录 III)
Retinol 0.4%   日本: 待复核 (准药物阈值 —— 需要 MHLW 审查)
```

同一套逻辑适用于电子 BOM（RoHS、REACH SVHC、CE/FCC、电池法规）、食品配方（过敏原、新型食品、FDA FSMA）、纺织品（PFAS、纤维标识、OEKO-TEX），或下方 18 个产品类别中的任意一个。

## 安装

```bash
# 作为 MCP 服务器（最快）
npx -y @cleo-labs/skills-mcp@latest

# 作为 Claude Code Skill（基于文件）
git clone https://github.com/Cleo-Labs-IA/skills_library.git ~/.claude/skills/comply
```

npm 包是面向 **Claude Desktop、Cursor、Continue、Zed 以及任何兼容 MCP 客户端** 的一行安装。这些 Skill 会以原生 MCP 资源（`skill://<名称>`）、参数化 prompt 以及三个结构化工具（`list_skills`、`find_skill`、`read_skill`）的形式出现。

把下面的配置加进你的客户端：

```json
{
  "mcpServers": {
    "cleo-skills": {
      "command": "npx",
      "args": ["-y", "@cleo-labs/skills-mcp@latest"]
    }
  }
}
```

对于 **Claude Code**，`git clone` 这一路会把 Skill 放到 `~/.claude/skills/comply`，当你问到物质、标签、海关、市场或召回的话题时会自动触发 —— 无需手动调用。

## 40 个 Skill

### 产品合规核心引擎 (6)

直接接触你实际产品的 Skill。

| Skill | 作用 |
|-------|------|
| `product-compliance` | **旗舰 Skill。** 13 个数据库的完整物质排查，按市场出结论，营收风险测算。 |
| `substance-screening` | 深度成分/原料筛查：INCI→CAS、浓度余量、按司法辖区出结论。 |
| `labeling-compliance` | 按国家的标签：INCI、过敏原、警示、CE/UKCA 标志、多语言规则。 |
| `testing-certification` | 按产品按市场所需的测试/认证（CPSR、CE、FCC、UL、EN 71、HACCP）。实验室选择、成本、周期。 |
| `claims-substantiation` | 营销宣称的合规验证：欧盟 655/2013、FDA 药品-化妆品边界、FTC、绿色宣称。 |
| `market-entry-checklist` | 一步一步：归类 → 法规 → 物质 → 标签 → 认证 → 海关 → 备案。 |

### 跨市场情报与行动 (13)

让你从"有问题"走到"已出货"的 Skill。

| Skill | 作用 |
|-------|------|
| `regulatory-intelligence` | 监听信号：物质禁令、标签变更、召回、生效日。 |
| `multi-jurisdiction-scan` | 在所有目标市场并行扫描。每个市场出 红/橙/黄/绿 结论。一个司法辖区一个智能体。 |
| `customs-and-trade` | HS 编码、关税、到岸成本、军民两用、制裁。 |
| `compliance-audit-sprint` | 上市前冲刺：识别 → 映射 → 检查 → 核实 → 成本估算。派发并行智能体。 |
| `compliance-remediation` | 修复合规问题以打通市场准入：重配方、重标签、测试、认证。 |
| `evidence-blitz` | 并行收集合规证据，用于审计、认证或电商平台上架。 |
| `responsible-person` | 设置欧盟 RP、英国 RP、美国 Agent、欧亚 AR、中国 NMPA 持证方。委托函、费用、义务。 |
| `packaging-compliance` | 欧盟成员国 EPR、PPWR 过渡、SUP、塑料税、美国各州 EPR。 |
| `recall-response` | 严重程度评估、当局通报（欧盟 10 天、美国 24 小时、英国 3 天）、收尾。 |
| `product-safety-incident` | CPSC 24 小时、欧盟 Safety Gate 10 天、风险矩阵、根因分析、消费者沟通。 |
| `import-export-docs` | 商业发票、装箱单、EUR.1/REX/USMCA、危险品申报、Incoterms 2020。 |
| `marketplace-compliance` | 按平台按类目所需文件：亚马逊欧盟 GPSR+EPR、Walmart、Shopify、Etsy、TikTok Shop。 |
| `regulatory-calendar` | 备案续期、证书到期、即将生效的法规（GPSR、CRA、MoCRA GMP、EUDR、ESPR）。 |

### 18 个产品类目

按类目的深度合规剧本：

`cosmetics-compliance` · `food-compliance` · `electronics-compliance` · `textile-compliance` · `toy-compliance` · `alcohol-spirits-compliance` · `supplement-compliance` · `jewelry-compliance` · `medical-device-compliance` · `pet-product-compliance` · `automotive-aftermarket-compliance` · `agricultural-compliance` · `tobacco-vape-compliance` · `sporting-goods-compliance` · `baby-children-products-compliance` · `household-chemicals-compliance` · `candle-fragrance-compliance` · `sustainability-compliance`

每个类目覆盖欧盟、美国、英国、加拿大、日本、韩国、中国、东盟的完整法规栈 —— 不是摘要，是真实条款、费率结构、备案门户、过渡日期。

### 参考与集成 (3)

`compliance-frameworks-ref`（法规参考索引）· `compliance-mcp-tools`（Cleo Legal API + Cleo Insight 集成模式）· `compliance-reporting`（按产品按市场的可导出矩阵）。

## MCP 护城河

大多数 Skill 库是静态知识 —— 发布当天就开始过时。这一套通过两个 MCP 服务器接入了实时数据：

- **Cleo Legal API** —— 海关归类、物质查询、关税计算、到岸成本、制裁筛查。`product-compliance`、`customs-and-trade`、`substance-screening` 的数据骨干。
- **Cleo Insight** —— 覆盖 **49 个国家、25,000+ 法规** 的实时监管信号。`regulatory-intelligence`、`multi-jurisdiction-scan`、`regulatory-calendar` 的信号源。

**Skill 可以独立运行** —— 没有 MCP 时，会用同一套 prompt 结构回退到网络搜索和基于文件的证据。启用 MCP 后，同样的 prompt 返回的是当前数据，而不是尽力而为的查询结果。

## 默认多智能体

Tier 3 行动类 Skill 通过 `superpowers:dispatching-parallel-agents` 派发并行智能体：

- `compliance-audit-sprint` —— 每个目标市场一个智能体
- `multi-jurisdiction-scan` —— 每个司法辖区集群一个智能体
- `evidence-blitz` —— 每个文档类别一个智能体

一次跨市场上市审计，监管顾问需要 3 周，这里大约 12 分钟跑完。

## 适合谁

- 上线实物产品的独立创始人和小型产品团队（1–10 人）
- 从 1 个市场扩到 3、5、10 个的 D2C 品牌
- 与下架抗争的电商平台卖家（亚马逊 GPSR、EPR、MoCRA）
- 处理 REACH、CLP、FDA MoCRA、Prop 65、GPSR、CRA、EUDR、CE/UKCA/FCC、EN 71 等长尾合规的运营者
- 想用几分钟而不是几天完成第一轮筛查的监管顾问

## 不适合谁

我们不打算取代你的专家。**我们把你送到 80% 的位置，让你的专家专注在最难的那 20%。**

- 我们不取代 **CE 公告机构** 的审核（IIa 类及以上医疗器械、III 类 PPE 等）
- 我们不取代签署 CPSR 的 **化妆品安全评估师**
- 我们不取代实际清关的 **持牌报关行**
- 我们不取代处理诉讼、执法抗辩或产品责任的 **法律顾问**
- 我们不提供法律意见。在做出货决定前，请始终对照官方来源核实。

## 我们为什么做这个

我们是 Anaëlle（CEO）和 Naomie（CDO），[Cleo Labs](https://cleolabs.co) 的联合创始人。我们开始做合规，是因为一次又一次看到同一幕：一个小品牌花 14 个月打磨一个漂亮的产品，第一批集装箱发到鹿特丹或费力克斯托，因为缺一份 REACH 档案，或者上个季度刚被设上限的某个附录 III 物质，被海关扣下。一个 40 尺集装箱被卡在欧盟边境，在有人真正动产品之前，仓储、滞期、返工的成本就是 €15–40k。

避免这些的知识是存在的。只是它不在创始人所在的地方 —— 它被锁在 €800/小时的顾问报告和 4,000 页的法规 PDF 里。所以我们把它放到了创始人所在的地方：他们的 AI 智能体里。这就是这个仓库。

## 示例

完整演练请见 [EXAMPLES.md](./EXAMPLES.md)（欧盟+英国面霜、美国+欧盟蓝牙音箱、出口日本的巧克力、玩具安全、亚马逊欧盟证据包）。

## 贡献

欢迎 PR —— 尤其是新增类目剧本、司法辖区更新、物质限值修正。请从 [CONTRIBUTING.md](./CONTRIBUTING.md) 和 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) 开始。安全问题请见 [SECURITY.md](./SECURITY.md)。

## 许可

MIT。见 [LICENSE](./LICENSE)。

## 免责声明

> **这是合规指引，不是法律意见。**
>
> 这些 Skill 提供基于公开法规的起点。它们不取代合格的监管顾问、公告机构、安全评估师、报关行或法律顾问。
>
> 监管数据（物质限值、生效日期、收费金额、归类规则）持续在变。在做出业务决定前，请始终对照官方来源（EUR-Lex、FDA、gov.uk、MHLW 等）核实关键信息。Cleo Labs 不为基于这些 Skill 所做的决定承担责任。

---

**用其他语言阅读：** [English](./README.md) · [Français](./README.fr.md) · [Español](./README.es.md) · [Deutsch](./README.de.md) · [日本語](./README.ja.md) · [简体中文](./README.zh.md)

由 [Cleo Labs](https://cleolabs.co) 构建。由 MARIA 引擎驱动 —— 49 个国家、25,000 项法规，实时。
