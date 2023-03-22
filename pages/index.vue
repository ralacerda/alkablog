<script setup lang="ts">
const postList = await getAllPosts();
</script>

<template>
  <ul>
    <li v-for="post in postList">
      <h2>
        <NuxtLink :to="`/post/${post.id}`">{{ post.title }}</NuxtLink>
      </h2>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>
