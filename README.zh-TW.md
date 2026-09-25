[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

# 八字排盤原始碼與周易易經排盤系統 - 大六壬、七政四餘、紫微斗數、奇門遁甲

本專案是面向傳統文化數位化研究的**八字排盤原始碼與周易易經排盤系統**。公開內容包含 HTML/JavaScript 網頁與互動邏輯、Java 服務介面，以及八字、五行、流年、大六壬、七政四餘和綜合排盤的真實產品畫面。

> 目前不是完整 Spring Boot、Docker 或商業 SaaS 發行包。八字、五行、流年、大六壬與七政四餘有公開畫面；紫微斗數及奇門遁甲屬規劃與整合方向，完整演算法必須依實際原始碼與可重現測試判斷。

## 公開功能與證據

| 模組 | 公開內容 | 主要檔案 |
| --- | --- | --- |
| 八字排盤 | 四柱、干支、五行、流年與綜合命盤介面 | `index.html`、`index.js`、`astro.js` |
| 五行分析 | 五行設定介面與產品畫面 | `WuXingConfigService.java`、`Screenshots/wuxing.png` |
| 排盤服務 | 排盤記錄、任務與結果介面 | `PanRecordService.java`、`MoiraTask*Service.java` |
| 大六壬 | 大六壬排盤產品畫面 | `Screenshots/daliuren.png` |
| 七政四餘 | 七政四餘與詳細排盤畫面 | `qizhengsiyu.png`、`qizheng2.png` |
| 使用者與訂單 | 使用者、會員與訂單介面 | `UserService.java`、`UserOrderService.java` |
| 紫微/奇門 | 產品規劃與整合方向 | 完整演算法需另行核查 |

## 術數與技術範圍

- **八字與四柱**：出生資訊、天干地支、五行、流年及綜合命盤介面。
- **周易與易經排盤**：多術數軟體介面、互動和服務介面參考，不代表全部易學演算法。
- **大六壬與七政四餘**：公開真實產品畫面，完整算法與測試需依實際程式碼驗證。
- **紫微斗數與奇門遁甲**：保留為產品整合方向，不宣稱目前已公開完整排盤算法。
- **技術**：HTML、JavaScript、Vue/Element Plus 資源與 Java 服務介面示例。

## 真實產品畫面

| 八字排盤 | 五行分析 | 流年運勢 |
| --- | --- | --- |
| ![四柱八字排盤原始碼產品畫面](Screenshots/baizhipaipan.png) | ![八字五行分析系統畫面](Screenshots/wuxing.png) | ![八字流年運勢排盤畫面](Screenshots/liunian.png) |

| 大六壬 | 七政四餘 | 周易綜合排盤 |
| --- | --- | --- |
| ![大六壬排盤原始碼產品畫面](Screenshots/daliuren.png) | ![七政四餘排盤系統畫面](Screenshots/qizhengsiyu.png) | ![周易易經綜合排盤系統畫面](Screenshots/paipan.png) |

## 文件與使用邊界

- [八字排盤與周易易經原始碼說明](docs/bazi-zhouyi-source-code.md)
- [大六壬與七政四餘排盤說明](docs/daliuren-qizhengsiyu.md)
- [紫微斗數與奇門遁甲整合範圍](docs/ziwei-qimen-integration.md)
- [繁體中文圖文頁](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/zh-tw/)
- [負責任使用](RESPONSIBLE-USE.md)

Java 檔案是服務介面示例，需要補充實作、依賴、設定和資料儲存後才能作為後端。傳統術數內容面向文化研究與軟體開發，不構成醫療、法律、投資或其他專業建議。

## 聯絡

- Telegram：`@xuzongbin001`
- Email：`masterai918@gmail.com`
