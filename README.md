# AlkaBlog

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) [![Netlify Status](https://api.netlify.com/api/v1/badges/b2d01367-79f8-491e-9377-ec0fc914f0a5/deploy-status)](https://app.netlify.com/sites/alkablog/deploys)

AlkaBlog showcases how to use Nuxt, Vue and Typescript to create a nice looking blog with a Admin Panel. Originally created for a Technical Assessment Test, this project now aims to provide a good example on how to implement features from Vue and Nuxt, data fetching, layout, routes, async components and virtual lists.

- 🔗 [Blog](https://alkablog.netlify.app/)
- 🔗 [Admin Panel](https://alkablog.netlify.app/admin)

## Installing locally

First, clone the repo with:

```sh
git clone https://github.com/ralacerda/alkablog.git
cd alkablog
```

Make sure you have `node` installed (Version 16.x or higher).

Install the dependencies. If you don't have `pnpm` installed, you can enable [corepack](https://github.com/nodejs/corepack) with `corepack enable`.

```sh
pnpm i
```

You can preview it with

```sh
pnpm dev
```

Or you can build it and preview it with:

```sh
pnpm build && pnpm preview
```

You can then acess the website at http://localhost:3000

## Features

### Scoped CSS

We use [Scoped CSS](https://vuejs.org/api/sfc-css-features.html#scoped-css) with the following class convention:

```html
<div class="block-container">
  <div class="block">
    <p class="block__element1"></p>
    <p class="block__element2"></p>
    <div class="block__subblock">
      <div class="subblock__element"></div>
    </div>
  </div>
</div>
```

### Error handling

O site foi desenvolvido de forma a lidar com eventuais instabilidades do API. Isso inclui redirecionamento para páginas de 404 e mensagens de aviso ao encontrar erros no carregamento de Posts ou Comentários.

### Async Components

As informações de comentários são carregadas de forma assíncrona, assim, não há a necessidade de esperar o carregamento dos comentários para exibir informações de um post. Isso aumenta a usabilidade do aplicativo e da melhor sensação de performance.

### Server Side Rendering

Utilizando a estratégia de Server Side Rendering, o navegador recebe uma renderização inicial feita no servidor,
e carrega (hidata) os elementos em segundo plano. Dessa forma, é possível reduzir o tempo necessário para o carregamento inicial da página.

### Responsive Design

Foi utilizada a estratégia de espaçamento e tamanho de fonte fluidas. Dessa forma, não há necessidade de breakpoints. O resultado é um site adaptado a qualquer tamanho de tela.

Na página inicial, foi utilizado uma `grid` de CSS para automaticamente controlar a quantidade de colunas baseado no espaço disponível.

Na área do administrador, foi utilizado "media queries" para ativar ou desativar a disposição do site em duas colunas. Para telas pequenas, foi utilizado um modal para o painel de informações.

## TODO List

- [ ] **[Zod](https://zod.dev/)** to showcase how to safely type API responses
- [ ] **Infinity Scrolling** from vueuse for the Home Page
- [ ] Delete button for comments in the Admin Panel, with confirmation Dialog
- [ ] Custom 404 Page
- [ ] About Page
- [ ] Improve README and comments
- [ ] UnoCSS
