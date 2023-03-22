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
      <li v-for="comment in commentList">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>
