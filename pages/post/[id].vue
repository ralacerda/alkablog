<script setup lang="ts">
const route = useRoute();
const paramId = parseInt(route.params.id as string);

if (isNaN(paramId)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Página não encontrada",
  });
}

const postList = await getPosts();

if (!postList.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Página não encontrada",
  });
}

/* Aqui é importante usar `filter` em vez de postList.value[postId - 1]
  por que não temos certeza que a ordem dos posts vai ser sempre a mesma
*/
const post = postList.value.filter((post) => post.id == paramId)[0];

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: "Página não encontrada",
  });
}

// Buscamos os comentários só depois de verificar que o post é valido
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
