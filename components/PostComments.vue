<script setup lang="ts">
const props = defineProps<{
  postId: number;
}>();

const { error, pending, data: commentList } = getComments(props.postId);
</script>

<template>
  <h2>Comments</h2>
  <Transition name="transition-fade" mode="out-in">
    <div v-if="pending"><LoadingSpinner /></div>
    <div v-else-if="error" class="error">
      Error while loading comments: {{ error }}
    </div>
    <div v-else-if="commentList?.length == 0">No comments found</div>
    <ul v-else>
      <li class="comment" v-for="comment in commentList" :key="comment.id">
        <h3 class="comment__title">{{ comment.name }}</h3>
        <p class="comment__email">{{ comment.email }}</p>
        <p class="comment__body">{{ comment.body }}</p>
      </li>
    </ul>
  </Transition>
</template>

<style lang="scss" scoped>
.comment {
  margin-top: var(--space-s-m);
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
