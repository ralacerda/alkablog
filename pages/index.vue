<script setup lang="ts">
const posts = await getPosts();
</script>

<template>
  <ul>
    <li v-for="post in posts">
      {{ post.title }}
      <NuxtLink :to="`/post/${post.id}`">Leia Mais </NuxtLink>
    </li>
  </ul>
</template>
