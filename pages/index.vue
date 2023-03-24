<script setup lang="ts">
const { data: postList } = await getAllPosts();
</script>

<template>
  <Head>
    <Title>AlkaBlog</Title>
  </Head>
  <ul class="card-container">
    <li class="card" v-for="post in postList">
      <div>
        <h2>
          {{ post.title }}
        </h2>
        <p class="card__body">{{ post.body }}</p>
      </div>
      <NuxtLink :to="`/post/${post.id}`">Leia mais</NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--background-secondary);
  border-radius: var(--border-radius);
  padding: var(--content-padding);
  box-shadow: var(--box-shadow);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-container {
  display: grid;
  gap: var(--space-l-xl);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
}

.card a::after {
  position: absolute;
  inset: 0;
  content: " ";
}

.card__body {
  margin-block: var(--space-2xs-xs);
  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
