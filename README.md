# 黄政铭 · Personal Space

黄政铭（Zhengming Huang）的个人主页，以晚霞为背景的小小个人空间。

## 设计

- 深蓝晚霞背景、暖白文字、细腻的玻璃作品卡片
- 英文姓名使用 Cormorant Garamond 衬线体，中文使用霞鹜文楷
- 桌面左右布局，手机上下排列，支持 320px 起的窄屏
- 保留邮件、GitHub、蒯曼专题站入口，以及访客本地实时时钟
- 在 HTTPS 或 localhost 下支持复制邮箱；复制失败时显示手动复制提示
- 提供键盘焦点、跳转主内容链接与减少动态效果支持

纯静态 HTML + CSS + JavaScript，无前端框架、无需安装依赖或构建。

## 本地预览

```bash
python3 -m http.server 8000
```

在浏览器中打开 <http://localhost:8000>。也可以直接打开 `index.html`；邮箱复制按钮只在浏览器支持安全剪贴板时显示。

## 修改内容

- 姓名、简介、联系方式：`index.html` 中的 `.hero`
- 导航：`index.html` 中的 `.site-nav`
- 作品：`index.html` 中的 `.works`，复制 `.project` 链接可添加作品，并为标题及描述设置唯一 ID
- 背景：替换 `assets/bg.jpg`；遮罩深浅与位置在 `style.css` 的 `.background`
- 配色与字体：`style.css` 顶部的 `:root` 变量
- 时钟与邮箱复制：`script.js`，修改邮箱时同时更新 HTML 链接和复制文本

## 部署

推送到 `main` 分支后由原有 GitHub Pages 配置发布到 <https://yezhulaoshi.github.io>。

## 素材与字体

- 背景：Wikimedia Commons 的 *Dusk Sunset Sky*（CC0），保留原项目素材
- 作品封面：保留原项目的 `assets/kuaiman-cover.jpg`
- 英文字体：[Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)，通过 Google Fonts 引入
- 中文字体：[霞鹜文楷屏幕版](https://github.com/lxgw/LxgwWenKai)，通过 zstatic CDN 引入
- 字体均有本地回退，外部字体无法加载时仍可正常浏览
