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

We try deal with eventual API instabilities. This includes showing placehold messages when data can't be fetched or redirecting users to a custom error page..

### Async Components

Using `useLazyFetch` we can use async components. In our case, we use async components to show comments, this way, we show the users the most important content first (the post), while loading the comments.

### Responsive Design

In this website, we are using both fluid typography and spacing. Those remove the need for breakpoints it's one of the many strategies to create responsive design.

In the Home Page, we also use a CSS `grid` to automactlly set the number of columns based on avaliable space.

On the Admin Panel, we use media queries to enable or disable the two column display. On small screens, we use a modal to show information about each post.

## TODO List

- [x] Custom 404 Page
- [x] Translate README to English
- [ ] **[Zod](https://zod.dev/)** to showcase how to safely type API responses
- [ ] **Infinity Scrolling** from vueuse for the Home Page
- [ ] Delete button for comments in the Admin Panel, with confirmation Dialog
- [ ] About Page
- [ ] Improve README and comments
