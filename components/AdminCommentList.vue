<script setup lang="ts">
import type { Comment } from "~/types";
const props = defineProps<{
  selectedPostId: number;
}>();

const commentContainer = useState<null | HTMLElement>(() => null);

// A gente verificar se o post mudou para voltar a posição ao topo
// caso contrário, o scroll se mantem quando o elemento muda
watch(props, () => {
  commentContainer.value?.scroll(0, 0);
});

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
  <div class="comment-container" ref="commentContainer">
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
  </div>
</template>

<style lang="scss" scoped>
:is(.comment__name, .comment__body)::first-letter {
  text-transform: uppercase;
}

.comment__email {
  text-transform: lowercase;
}

.comment {
  margin-top: var(--space-xs-s);
  border: 1px solid #00000015;
  padding: var(--content-padding);
  border-radius: var(--border-radius);
}

.comment-container {
  overflow-y: scroll;
  padding-right: 1rem;
}
</style>
