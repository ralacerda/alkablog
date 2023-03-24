<script setup lang="ts">
import type { Post } from "~/types";

defineProps<{
  postInfo: Post | null;
}>();
</script>

<template>
  <div v-if="postInfo" class="postinfo">
    <p class="postinfo__title">
      <strong>{{ postInfo.title }}</strong>
    </p>
    <p class="postinfo__body">{{ postInfo.body }}</p>
    <p>ID do Post: {{ postInfo.id }}</p>
    <p>ID do Author: {{ postInfo.userId }}</p>
  </div>
  <p v-else>Erro ao carregar post</p>
</template>

<style lang="scss" scoped>
:is(.postinfo__title, .postinfo__body)::first-letter {
  text-transform: uppercase;
}
</style>
