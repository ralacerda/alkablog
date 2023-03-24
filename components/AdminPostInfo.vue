<script setup lang="ts">
import type { Post } from "~/types";

defineProps<{
  postInfo: Post | null;
}>();
</script>

<template>
  <p v-if="!postInfo">Erro ao carregar post</p>
  <div v-else class="postinfo">
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
</style>
