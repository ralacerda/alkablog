<script setup lang="ts">
const postList = await getAllPosts();
</script>

<template>
  <ul>
    <li v-for="post in postList">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <NuxtLink :to="`/post/${post.id}`">Leia Mais </NuxtLink>
    </li>
  </ul>
</template>
