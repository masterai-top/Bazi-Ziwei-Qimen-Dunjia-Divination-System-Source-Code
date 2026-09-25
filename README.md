[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

# 八字排盘源码与周易易经排盘系统 - 大六壬、七政四余、紫微斗数、奇门遁甲

[![Frontend](https://img.shields.io/badge/frontend-HTML%20%2F%20JavaScript-e34f26)](index.html)
[![Java](https://img.shields.io/badge/integration-Java-007396)](UserService.java)
[![Pages](https://img.shields.io/badge/demo-GitHub%20Pages-1f883d)](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-cn/)
[![License](https://img.shields.io/badge/license-see%20LICENSE-blue)](LICENSE)

这是一个面向传统文化数字化研究的**八字排盘源码与周易易经排盘系统**。公开仓库包含 HTML/JavaScript 网页和交互逻辑、Java 服务接口示例，以及八字、五行、流年、大六壬、七政四余和综合排盘的真实产品截图。

繁體關鍵詞：**八字排盤原始碼、周易原始碼、易經排盤、紫微斗數原始碼、奇門遁甲原始碼、七政四餘、大六壬**。

> 当前不是完整 Spring Boot、Docker 或商业 SaaS 发行包。八字、五行、流年、大六壬和七政四余有公开界面与截图；紫微斗数、奇门遁甲属于规划和集成方向，是否包含完整算法必须以实际源码和可复现测试为准。

## 目录

- [公开功能与证据](#公开功能与证据)
- [排盘与术数模块](#排盘与术数模块)
- [技术结构](#技术结构)
- [真实产品截图](#真实产品截图)
- [快速预览](#快速预览)
- [专题文档](#专题文档)
- [常见问题](#常见问题)

## 公开功能与证据

| 模块 | 公开内容 | 证据 |
| --- | --- | --- |
| 八字排盘 | 四柱八字、干支、五行、流年及综合命盘界面 | `index.html`、`index.js`、`astro.js`、`Screenshots/` |
| 五行分析 | 五行关系与分析页面 | `WuXingConfigService.java`、`Screenshots/wuxing.png` |
| 排盘记录 | 排盘记录、任务及结果服务接口 | `PanRecordService.java`、`MoiraTask*Service.java` |
| 大六壬 | 大六壬产品界面 | `Screenshots/daliuren.png` |
| 七政四余 | 七政四余及详细排盘界面 | `Screenshots/qizhengsiyu.png`、`qizheng2.png` |
| 用户与订单 | 用户、会员记录和订单接口示例 | `UserService.java`、`MemberRecordService.java`、`UserOrderService.java` |
| 紫微/奇门 | 产品规划与集成方向 | README 与 Pages 文档；完整算法需另行核查 |

## 排盘与术数模块

### 八字、四柱与五行

网页展示出生信息、四柱八字、天干地支、五行关系和流年等产品流程。当前公开内容适合作为八字排盘界面、前端交互与服务接口的研究参考，不应被描述为已经验证的完整命理算法库。

### 周易与易经排盘

仓库以“周易术数系统”组织多个排盘方向，包含综合排盘页面和多语言项目文档。“周易源码 / 易经源码”在本项目中指软件界面、交互和接口参考，不代表完整收录《周易》文本或所有易学算法。

### 大六壬与七政四余

仓库提供大六壬、七政四余和综合排盘的真实产品截图。与高排名的单一算法仓库不同，本项目没有公开可复现的完整六壬/七政算法测试，因此 README 只说明可核查的产品展示范围。

### 紫微斗数与奇门遁甲

紫微斗数和奇门遁甲是仓库名称及产品规划中的扩展方向。公开目录未显示可验证的完整算法实现、安装包或测试集，二次开发前应先审查实际代码覆盖范围。

## 技术结构

```text
.
|-- index.html / index.js       # 静态网页与交互入口
|-- astro.js / door.js          # 浏览器端逻辑示例
|-- *Service.java               # 用户、订单、排盘、任务与配置接口
|-- Screenshots/                # 线上 README 使用的真实产品截图
|-- docs/                       # GitHub Pages、多语言页面与专题文档
|-- README.en.md                # English README
`-- README.zh-TW.md             # 繁體中文 README
```

前端使用 HTML、JavaScript、Vue 及 Element Plus 相关资源；Java 文件是服务接口示例，需要补充实现类、依赖、配置和数据存储后才能作为后端运行。

## 真实产品截图

以下图片全部沿用线上 README 已有截图，不新增无法验证的功能画面。

| 八字排盘 | 五行分析 | 流年运势 |
| --- | --- | --- |
| ![四柱八字排盘源码产品界面](Screenshots/baizhipaipan.png) | ![八字五行分析系统界面](Screenshots/wuxing.png) | ![八字流年运势排盘界面](Screenshots/liunian.png) |

| 大六壬排盘 | 七政四余排盘 | 周易综合排盘 |
| --- | --- | --- |
| ![大六壬排盘源码产品界面](Screenshots/daliuren.png) | ![七政四余排盘系统界面](Screenshots/qizhengsiyu.png) | ![周易易经综合排盘系统界面](Screenshots/paipan.png) |

图文介绍：[简体中文](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-cn/) · [繁體中文](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-tw/) · [English](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/en/)

## 快速预览

```bash
git clone https://github.com/masterai-top/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code.git
cd Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code
```

使用静态文件服务器打开根目录并访问 `index.html`。不要直接双击后据此判断全部功能；浏览器模块加载、接口请求和跨域行为可能需要本地 HTTP 服务。

## 专题文档

- [八字排盘与周易易经源码说明](docs/bazi-zhouyi-source-code.md)
- [大六壬与七政四余排盘说明](docs/daliuren-qizhengsiyu.md)
- [紫微斗数与奇门遁甲集成范围](docs/ziwei-qimen-integration.md)
- [功能介绍](docs/features.html)
- [架构说明](docs/architecture.html)
- [部署指南](docs/deployment.html)
- [负责任使用](RESPONSIBLE-USE.md)

## 常见问题

### 这是完整的八字排盘后端源码吗？

不是。公开内容以静态网页、JavaScript 逻辑、Java 服务接口和产品截图为主，不包含可直接部署的完整 Spring Boot 后端、数据库迁移和自动化算法测试。

### 为什么仍保留紫微斗数和奇门遁甲？

它们是仓库名称和产品规划中的真实集成方向，但 README 明确区分“规划方向”和“已公开算法”，避免把关键词当成功能承诺。

### 可以直接用于预测或专业决策吗？

不可以。项目面向传统文化研究和软件开发，不构成医疗、法律、投资或其他专业建议。生产使用前还需完成算法校验、隐私保护、安全测试和合规审查。

## 联系

- Telegram：`@xuzongbin001`
- Email：`masterai918@gmail.com`
