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

const autor = await getUser(post.value.userId);
</script>

<template>
  <Head>
    <Title>AlkaBlog | {{ post?.title }}</Title>
  </Head>
  <div class="post">
    <article>
      <h2 class="post__title">{{ post?.title }}</h2>
      <div class="post__author">
        <p class="author__name">{{ autor?.name }}</p>
        <p class="author__email">{{ autor?.email }}</p>
      </div>
      <p class="post__body">{{ post?.body }}</p>
    </article>
    <hr />
    <section class="post__comments">
      <PostComments :postId="paramId" />
    </section>

    <NuxtLink to="/">Voltar a página inicial</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.post {
  background-color: var(--background-secondary);
  border-radius: var(--border-radius);
  padding: var(--content-padding);
  box-shadow: var(--box-shadow);
}

.post__author {
  margin-top: var(--space-3xs-2xs);

  & .author__name {
    font-variant-caps: all-small-caps;
  }

  & .author__email {
    font-size: var(--step--1);
    text-transform: lowercase;
  }
}

.post__body {
  margin-block: var(--space-s-m);
  font-size: var(--step-1);

  &::first-letter {
    text-transform: uppercase;
  }
}

.post__comments {
  margin-block: var(--space-s-m);
}
</style>
