<script setup lang="ts">
const postList = await getPosts();

const route = useRoute();
const paramId = route.params.id;

/* Aqui é importante usar `filter` em vez de postList.value[postId - 1]
  por que não temos certeza que a ordem dos posts vai ser sempre a mesma
*/
// TODO: Certificar que paramId é um número
const post = postList.value.filter((post) => post.id == paramId);

// TODO: Mandar usuário para página 404 se não focar encontrado o post
</script>

<template>
  <h2>{{ post }}</h2>
</template>
