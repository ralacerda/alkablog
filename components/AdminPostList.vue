<script setup lang="ts">
import type { Post } from "~/types";

defineProps<{
  postList: Post[] | null;
  selectedPostId: number | null;
}>();

defineEmits<{
  (e: "selectPost", postId: number): void;
}>();
</script>

<template>
  <h2>Posts</h2>
  <ul v-if="postList">
    <li class="post" v-for="post in postList" :key="post.id">
      <button
        :data-selected="selectedPostId == post.id"
        @click="$emit('selectPost', post.id)"
      >
        {{ post.title }}
      </button>
    </li>
  </ul>
  <p v-else class="error">Erro ao carregar list de posts</p>
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
