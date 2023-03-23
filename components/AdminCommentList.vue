<script setup lang="ts">
import type { Comment } from "~/types";
const props = defineProps<{
  selectedPostId: number;
}>();

// Aqui a gente precisa passar uma função para que o Javascript recrie o string
// e substitua o valor do selectedPostId sempre que ref mudar
const {
  error,
  pending,
  data: commentList,
} = useLazyFetch<Comment[]>(
  () =>
    `https://jsonplaceholder.typicode.com/posts/${props.selectedPostId}/comments`
);
</script>

<template>
  <Transition name="transition-fade" mode="out-in">
    <p v-if="pending"><LoadingSpinner /></p>
    <p v-else-if="error" class="error">
      Erro ao carregar os comentários: {{ error }}
    </p>
    <ul v-else>
      <li v-for="comment in commentList">
        {{ comment }}
      </li>
    </ul>
  </Transition>
</template>
