<script setup lang="ts">
import type { Post } from "~/types";

defineProps<{
  postList: Post[];
  selectedPostId: number;
}>();

defineEmits<{
  (e: "selectPost", postId: number): void;
}>();
</script>

<template>
  <h2>Posts</h2>
  <ul>
    <li class="post" v-for="post in postList" :key="post.id">
      <button
        :data-selected="selectedPostId == post.id"
        @click="$emit('selectPost', post.id)"
      >
        {{ post.title }}
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.post button {
  text-align: left;
  display: block;
  width: 100%;
  border: none;
  margin-top: var(--space-xs-s);
  background-color: var(--background-secondary);
  padding: var(--space-xs-s);
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }
}

@media (min-width: 720px) {
  .post button[data-selected="true"] {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
}
</style>
