[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

# 八字排盘源码与周易术数系统 - 紫微斗数、奇门遁甲、大六壬、七政四余、周易排盘

[![Frontend](https://img.shields.io/badge/frontend-HTML%20%2F%20JavaScript-e34f26)](index.html)
[![Java](https://img.shields.io/badge/integration-Java-007396)](UserService.java)
[![Pages](https://img.shields.io/badge/demo-GitHub%20Pages-1f883d)](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-cn/)
[![License](https://img.shields.io/badge/license-see%20LICENSE-blue)](LICENSE)

这是一个面向传统文化数字化研究的**八字排盘与周易术数系统源码仓库**。公开内容包括静态网页界面、JavaScript 逻辑、Java 服务接口示例，以及八字、五行、流年、大六壬、七政四余和综合排盘的产品截图。

> 当前公开仓库不是完整的 Spring Boot、Docker 或商业 SaaS 发行包。紫微斗数和奇门遁甲属于项目规划与集成方向；是否包含完整算法必须以实际源码和可复现测试为准。

## 目录

- [公开内容](#公开内容)
- [术数与排盘方向](#术数与排盘方向)
- [排盘截图](#排盘截图)
- [快速预览](#快速预览)
- [项目结构](#项目结构)
- [常见问题](#常见问题)
- [使用边界](#使用边界)

## 公开内容

| 内容 | 对应文件 | 说明 |
| --- | --- | --- |
| 网页演示 | `index.html`、`index.js`、`astro.js`、`door.js` | 可检查前端界面和部分交互逻辑 |
| Java 接口 | `*Service.java` | 用户、订单、排盘记录、任务和五行配置等接口示例 |
| 八字与五行画面 | `Screenshots/` | 八字排盘、五行分析与流年展示 |
| 其他术数画面 | `Screenshots/` | 大六壬、七政四余和综合排盘展示 |
| 页面文档 | `docs/` | 功能、架构、部署和合规说明 |

## 术数与排盘方向

- 四柱八字排盘、干支与五行关系展示
- 流年运势和综合命盘界面
- 大六壬与七政四余排盘产品展示
- 紫微斗数、奇门遁甲等模块的扩展与集成方向
- 用户、排盘记录、任务 服务接口参考

## 排盘截图

| 八字排盘 | 五行分析 | 流年运势 |
| --- | --- | --- |
| ![四柱八字排盘系统界面](Screenshots/baizhipaipan.png) | ![八字五行分析界面](Screenshots/wuxing.png) | ![八字流年运势排盘界面](Screenshots/liunian.png) |

| 大六壬 | 七政四余 | 综合排盘 |
| --- | --- | --- |
| ![大六壬排盘界面](Screenshots/daliuren.png) | ![七政四余排盘界面](Screenshots/qizhengsiyu.png) | ![周易术数综合排盘界面](Screenshots/paipan.png) |

图文介绍：[简体中文](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-cn/) · [繁體中文](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-tw/) · [English](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/en/)

## 快速预览

1. 克隆本仓库。
2. 使用静态文件服务器打开根目录。
3. 在浏览器访问 `index.html`，或查看[简体中文项目介绍](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-cn/)。

根目录网页主要用于界面和交互预览。Java 文件是服务接口示例，需要补充实现类、依赖、配置和数据存储后才能作为后端运行。

## 项目结构

```text
.
|-- index.html / index.js       # 静态网页与交互入口
|-- astro.js / door.js          # 页面逻辑示例
|-- *Service.java               # Java 服务接口示例
|-- Screenshots/                # 排盘与五行分析截图
|-- docs/                       # GitHub Pages 多语言项目文档
|-- README.en.md                # English README
`-- README.zh-TW.md             # 繁體中文 README
```

## 常见问题

### 这是完整的八字排盘后端源码吗？

不是。当前公开内容以静态网页、JavaScript 逻辑、Java 服务接口和产品截图为主，不包含可直接部署的完整 Spring Boot 后端、数据库迁移或自动化测试。

### 仓库是否包含紫微斗数和奇门遁甲完整算法？

仓库名称和文档覆盖这些扩展方向，但公开能力应以实际文件和可复现结果为准。使用或二次开发前，请先审查相关源码，不要只根据截图或说明判断。

### 如何用于周易、八字或四柱排盘项目？

可以把网页结构、交互方式、服务接口和截图作为传统文化软件的研究与界面参考。生产使用前仍需自行完成算法校验、后端实现、隐私保护、安全测试和合规审查。

### 可以直接用于健康、法律或投资判断吗？

不可以。项目内容面向传统文化研究和软件开发，不构成医疗、法律、投资或其他专业建议。

## 使用边界

传统术数内容适合文化研究、教学和软件界面开发，不应被描述为科学诊断或确定性预测。健康、法律、投资等重要决定应咨询相应专业人士。请勿提交真实用户隐私、密钥或生产数据。

## 联系

- Telegram：`@xuzongbin001`
- Email：`masterai918@gmail.com`
