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
const autor = await getUser(post.value.userId);
</script>

<template>
  <article>
    <h2>{{ post?.title }}</h2>
    <p>por {{ autor?.name }}</p>
    <p>{{ autor?.email }}</p>
    <p>{{ post?.body }}</p>
  </article>
  <section>
    <h2>Comments</h2>
    <ul>
      <li v-for="comment in commentList">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </section>

  <NuxtLink to="/">Voltar a página inicial</NuxtLink>
</template>
