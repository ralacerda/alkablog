<script setup lang="ts">
import type { Post } from "~/types";

defineProps<{
  postInfo: Post | null;
}>();
</script>

<template>
  <p v-if="!postInfo">Error while loading posts</p>
  <div v-else class="postinfo">
    <p class="postinfo__title">
      <strong>{{ postInfo.title }}</strong>
    </p>
    <p class="postinfo__body">{{ postInfo.body }}</p>
    <p>Post ID: {{ postInfo.id }}</p>
    <p>Author ID: {{ postInfo.userId }}</p>
  </div>
</template>

<style lang="scss" scoped>
:is(.postinfo__title, .postinfo__body)::first-letter {
  text-transform: uppercase;
}
</style>
