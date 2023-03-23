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
  <h2>Comentários</h2>
  <Transition name="transition-fade" mode="out-in">
    <p v-if="pending"><LoadingSpinner /></p>
    <p v-else-if="error" class="error">
      Erro ao carregar os comentários: {{ error }}
    </p>
    <ul v-else>
      <li class="comment" v-for="comment in commentList">
        <p class="comment__email">{{ comment.email }}</p>
        <p class="comment__name">
          <strong>{{ comment.name }}</strong>
        </p>
        <p class="comment__body">{{ comment.body }}</p>
      </li>
    </ul>
  </Transition>
</template>

<style lang="scss" scoped>
:is(.comment__name, .comment__body)::first-letter {
  text-transform: uppercase;
}

.comment__email {
  text-transform: lowercase;
}

.comment {
  margin-block: 1rem;
  border: 1px solid #00000015;
  padding: 1rem;
  border-radius: var(--border-radius);
}
</style>
