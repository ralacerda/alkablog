<script setup lang="ts">
const route = useRoute();
const paramId = parseInt(route.params.id as string);

if (isNaN(paramId)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Página não encontrada",
  });
}

const post = await getPost(paramId);

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Página não encontrada",
  });
}

// Buscamos os comentários e autor só depois de verificar que o post é valido
const commentList = await getComments(paramId);
</script>

<template>
  <h2>{{ post }}</h2>
  <ul>
    <li v-for="comment in commentList">
      {{ comment.email }}
    </li>
  </ul>
</template>
