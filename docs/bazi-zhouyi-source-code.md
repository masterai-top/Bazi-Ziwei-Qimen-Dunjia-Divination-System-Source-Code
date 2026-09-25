# 八字排盘与周易易经源码说明

本页集中说明仓库中可核查的八字排盘、四柱、五行、流年和周易易经排盘软件范围。

## 公开内容

- `index.html`、`index.js`：静态网页与主要交互入口
- `astro.js`、`door.js`：浏览器端逻辑示例
- `PanRecordService.java`：排盘记录服务接口
- `WuXingConfigService.java`：五行配置服务接口
- `MoiraTaskService.java`、`MoiraTaskResultService.java`：任务与结果接口

## 真实截图

| 八字排盘 | 五行分析 | 流年运势 |
| --- | --- | --- |
| ![八字排盘源码界面](../Screenshots/baizhipaipan.png) | ![八字五行分析界面](../Screenshots/wuxing.png) | ![八字流年排盘界面](../Screenshots/liunian.png) |

当前公开仓库不是经过完整算法测试的八字后端，也不包含可直接部署的数据库和 Spring Boot 实现。适合用于传统文化软件界面、交互和服务接口研究。

[返回 README](../README.md) · [GitHub Pages](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-cn/)
