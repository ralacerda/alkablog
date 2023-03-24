<script setup lang="ts">
import "~/assets/styles/index.scss";

const route = useRoute();
const isAdmin = computed(() => route.name == "admin");
</script>

<template>
  <Head>
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <!-- Criado por Renato Lacerda.
      https://github.com/ralacerda
      https://www.linkedin.com/in/renato-ac-lacerda/
    -->
  </Head>
  <NuxtLayout :name="isAdmin ? 'admin' : 'default'">
    <NuxtPage />
  </NuxtLayout>
</template>
