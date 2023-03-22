<script setup lang="ts">
const props = defineProps<{
  postId: number;
}>();

const { error, pending, commentList } = getComments(props.postId);
</script>

<template>
  <h2>Comentários</h2>
  <div v-if="pending">Carregando comentários...</div>
  <div v-else-if="error">Algo de errado aconteceu :(</div>
  <div v-else-if="commentList?.length == 0">Nada aqui</div>
  <div v-else>
    <ul>
      <li class="comment" v-for="comment in commentList">
        <h3 class="comment__title">{{ comment.name }}</h3>
        <p class="comment__email">{{ comment.email }}</p>
        <p class="comment__body">{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.comment {
  margin-top: 1.5rem;
}

.comment__title {
  line-height: 1.1;
  font-size: var(--step-0);
}

.comment__body::first-letter,
.comment__title::first-letter {
  text-transform: uppercase;
}

.comment__email {
  text-transform: lowercase;
}

.comment__body {
  margin-top: 0.2rem;
}
</style>
