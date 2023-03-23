<script setup lang="ts">
import type { Post } from "~/types";

defineProps<{
  postInfo: Post;
}>();
</script>

<template>
  <div class="postinfo">
    <p class="postinfo__title">
      <strong>{{ postInfo.title }}</strong>
    </p>
    <p class="postinfo__body">{{ postInfo.body }}</p>
    <p>ID do Post: {{ postInfo.id }}</p>
    <p>ID do Author: {{ postInfo.userId }}</p>
  </div>
</template>

<style lang="scss" scoped>
:is(.postinfo__title, .postinfo__body)::first-letter {
  text-transform: uppercase;
}

.postinfo p + p {
  margin-top: var(--space-3xs-2xs);
}

.postinfo__title {
  padding-right: 4rem;
}
</style>
