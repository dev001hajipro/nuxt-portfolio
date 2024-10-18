# 「はじめてつくるNuxtサイト」を実装

三好アキさんの「はじめてつくるNuxtサイト」をプログラミングしてみた。

## @nuxt/imageのインストール方法

本では、npmでインストール後、nuxt.config.tsを手で修正してますが、以下コマンドで
インストールとnuxt.config.tsの修正が可能。

```bash
npx nuxi@latest module add image
npx nuxi@latest module add content
```

## nuxt-imgからNuxtImgへの変更

最新の@nuxt/imageは、nuxt-imgタグではなく、キャメルケースのNuxtImgになっていました。
現在の各Nuxt Modulesはキャメルケースになっているようです。
