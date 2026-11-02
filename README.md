# Yezhulaoshi.github.io

黄政铭（Zhengming Huang）的个人主页。

## 风格

全屏壁纸 + 毛玻璃卡片：站点名用 Pacifico 手写体，正文用霞鹜文楷，卡片是半透明深色玻璃（`backdrop-filter: blur`），右上角有一块实时时钟。

- 纯静态：`index.html` + `style.css`，无构建步骤、无前端框架
- 自适应手机 / 平板 / 桌面
- 作品区：蒯曼 Kuai Man 专题站 → <https://kuaiman0207.top>

## 本地预览

直接双击 `index.html`，或：

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署

推送到 `main` 分支，GitHub Pages 会自动发布到 <https://yezhulaoshi.github.io>。

## 修改内容

- 名字、简介、邮箱、图标链接：`index.html` 里的 `.hero`
- 作品列表：`index.html` 里的 `.works`，复制一个 `<a class="work">` 块即可增加作品
- 背景图：替换 `assets/bg.jpg`（建议 1920×1200 左右、200KB 以内），配色和压暗渐变在 `style.css` 的 `--scrim`
- 玻璃卡片颜色 / 圆角 / 阴影：`style.css` 顶部的 `:root` 变量

## 素材与字体

- 背景图：Wikimedia Commons 的 *Dusk Sunset Sky*（CC0，公有领域），已压缩到 1920×1280。
- 标题字体：Google Fonts 的 [Pacifico](https://fonts.google.com/specimen/Pacifico)
- 正文字体：霞鹜文楷屏幕版（[LXGW WenKai](https://github.com/lxgw/LxgwWenKai)），经 zstatic CDN 引入
- 字体均带系统回退，断网或 CDN 不可用时版式不会塌。
