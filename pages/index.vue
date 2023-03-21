<script setup lang="ts">
const postList = await getPosts();
</script>

<template>
  <ul>
    <li v-for="post in postList">
      {{ post.title }}
      <NuxtLink :to="`/post/${post.id}`">Leia Mais </NuxtLink>
    </li>
  </ul>
</template>
