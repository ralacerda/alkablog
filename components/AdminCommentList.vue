<script setup lang="ts">
import type { Comment } from "~/types";
const props = defineProps<{
  selectedPostId: number;
}>();

const commentContainer = useState<null | HTMLElement>(() => null);

// Scroll to top if select post changed
watch(props, () => {
  commentContainer.value?.scroll(0, 0);
});

// We need to use a function to keep reactivity, otherwise it won't fetch again
// when `selectedPostId` changes.
const {
  error,
  pending,
  data: commentList,
} = useLazyFetch<Comment[]>(
  () =>
    `https://jsonplaceholder.typicode.com/posts/${props.selectedPostId}/comments`
);
</script>

<template>
  <div class="comment-container" ref="commentContainer">
    <h2>Comments</h2>
    <Transition name="transition-fade" mode="out-in">
      <p v-if="pending"><LoadingSpinner /></p>
      <p v-else-if="error" class="error">
        Error while loading comments: {{ error }}
      </p>
      <ul v-else>
        <li class="comment" v-for="comment in commentList">
          <p class="comment__email">{{ comment.email }}</p>
          <p class="comment__name">
            <strong>{{ comment.name }}</strong>
          </p>
          <p class="comment__body">{{ comment.body }}</p>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
:is(.comment__name, .comment__body)::first-letter {
  text-transform: uppercase;
}

.comment__email {
  text-transform: lowercase;
}

.comment {
  margin-top: var(--space-xs-s);
  border: 1px solid #00000015;
  padding: var(--content-padding);
  border-radius: var(--border-radius);
}

.comment-container {
  overflow-y: scroll;
  padding-right: 1rem;
}
</style>
