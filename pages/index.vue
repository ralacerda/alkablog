<script setup lang="ts">
const postList = await getAllPosts();
</script>

<template>
  <ul class="card-container">
    <li class="card" v-for="post in postList">
      <div>
        <h2>
          {{ post.title }}
        </h2>
        <p class="card__body">{{ post.body }}</p>
      </div>
      <div class="card__link">
        <NuxtLink :to="`/post/${post.id}`">Leia mais</NuxtLink>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.card {
  background-color: var(--background-secondary);
  border-radius: var(--border-radius);
  padding: 1.2rem 1rem;
  box-shadow: 100px 100px 80px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-container {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
}

.card a::after {
  position: absolute;
  inset: 0;
  content: " ";
}

.card__body {
  margin-top: 0.4rem;
}

.card__link {
  margin-top: 1.2rem;
}
</style>
