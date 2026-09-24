[简体中文](README.md) | [繁體中文](README.zh-TW.md) | [English](README.en.md)

# Bazi Chart and I Ching Metaphysics System Source Code

[![Frontend](https://img.shields.io/badge/frontend-HTML%20%2F%20JavaScript-e34f26)](index.html)
[![Java](https://img.shields.io/badge/integration-Java-007396)](UserService.java)
[![Pages](https://img.shields.io/badge/demo-GitHub%20Pages-1f883d)](https://masterai-top.github.io/Bazi-Ziwei-Qimen-Dunjia-Divination-System-Source-Code/en/)
[![License](https://img.shields.io/badge/license-see%20LICENSE-blue)](LICENSE)

This repository is a source-code reference for Bazi (Four Pillars) charts and I Ching-related Chinese metaphysics software. Its public contents include static HTML pages, JavaScript logic, Java service interfaces, and product screenshots for Bazi, Five Elements, annual fortune, Da Liu Ren, Qizheng Siyu, and combined charts.

> This public repository is not a complete Spring Boot, Docker, or commercial SaaS distribution. Ziwei Doushu and Qimen Dunjia are documented as integration directions; verify algorithm coverage from the actual source and reproducible tests.

## Public Contents

| Area | Files | Scope |
| --- | --- | --- |
| Web preview | `index.html`, `index.js`, `astro.js`, `door.js` | Static UI and partial interaction logic |
| Java interfaces | `*Service.java` | Service contracts for users, orders, chart records, tasks, messaging, and configuration |
| Product images | `Screenshots/` | Bazi, Five Elements, annual fortune, Da Liu Ren, Qizheng Siyu, and combined chart screens |
| Documentation | `docs/` | Multilingual GitHub Pages content, architecture, deployment, and responsible-use notes |

## Covered Systems

- Bazi / Four Pillars chart presentation
- Heavenly Stems, Earthly Branches, and Five Elements views
- Annual fortune and combined chart interfaces
- Da Liu Ren and Qizheng Siyu product screens
- Ziwei Doushu and Qimen Dunjia extension directions

## Screenshots

| Bazi chart | Five Elements | Annual fortune |
| --- | --- | --- |
| ![Four Pillars Bazi chart interface](Screenshots/baizhipaipan.png) | ![Bazi Five Elements analysis interface](Screenshots/wuxing.png) | ![Bazi annual fortune interface](Screenshots/liunian.png) |

| Da Liu Ren | Qizheng Siyu | Combined chart |
| --- | --- | --- |
| ![Da Liu Ren chart interface](Screenshots/daliuren.png) | ![Qizheng Siyu chart interface](Screenshots/qizhengsiyu.png) | ![Chinese metaphysics combined chart](Screenshots/paipan.png) |

## Local Preview

Serve the repository root with any static file server and open `index.html`. The Java files are interface examples and require implementations, dependencies, configuration, and storage before they can operate as a backend.

## Repository Layout

```text
.
|-- index.html / index.js       # Static web entry and interactions
|-- astro.js / door.js          # Browser-side logic examples
|-- *Service.java               # Java service interface examples
|-- Screenshots/                # Chart and analysis screenshots
`-- docs/                       # Multilingual GitHub Pages documentation
```

## FAQ

### Is this a complete Bazi backend?

No. The public repository mainly contains static pages, JavaScript logic, Java interfaces, and screenshots. It does not contain a complete deployable backend, database migrations, or automated tests.

### Are complete Ziwei Doushu and Qimen Dunjia algorithms included?

The repository covers them as product and integration directions. Review the actual files and reproducible behavior before relying on any claimed algorithm coverage.

### Can the project provide medical, legal, or financial advice?

No. It is intended for cultural research and software development, not scientific diagnosis, deterministic prediction, or professional advice.

## Contact

- Telegram: `@xuzongbin001`
- Email: `masterai918@gmail.com`

## License

See [LICENSE](LICENSE) for the applicable terms.
