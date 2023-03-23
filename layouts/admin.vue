<template>
  <header>
    <nav>
      <h1><NuxtLink to="/" class="header-link">AlkaBlog</NuxtLink></h1>
      <NuxtLink to="/"> Voltar ao Blog</NuxtLink>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>
