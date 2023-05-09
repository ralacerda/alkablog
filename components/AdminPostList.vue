<script setup lang="ts">
import type { Post } from "~/types";
import { useVirtualList } from "@vueuse/core";

const props = defineProps<{
  postList: Post[] | null;
  selectedPostId: number | null;
}>();

defineEmits<{
  (e: "selectPost", postId: number): void;
}>();

const {
  list: virtualList,
  containerProps,
  wrapperProps,
} = useVirtualList(props.postList as Post[], {
  // Keep `itemHeight` in sync with the item's row.
  itemHeight: 80,
});
</script>

<template>
  <p v-if="!postList" class="error">Error while loading posts</p>
  <ul v-else v-bind="containerProps" class="virtual-container">
    <div v-bind="wrapperProps">
      <li class="post" v-for="post in virtualList" :key="post.data.id">
        <button
          :data-selected="selectedPostId == post.data.id"
          @click="$emit('selectPost', post.data.id)"
        >
          {{ post.data.title }}
        </button>
      </li>
    </div>
  </ul>
</template>

<style lang="scss" scoped>
.post button {
  text-align: left;
  display: block;
  width: 100%;
  border: none;
  background-color: var(--background-secondary);
  padding: var(--space-xs-s);
  cursor: pointer;
  overflow: hidden;

  // We set a defined height so the virtual list
  // can calculate the right size for the wrapper
  height: 70px;

  &::first-letter {
    text-transform: uppercase;
  }
}
.post + .post {
  margin-top: var(--space-xs-s);
}

.virtual-container {
  height: 100%;
  overflow-x: scroll;
  padding-inline-end: var(--space-xs-s);
}

@media (min-width: 720px) {
  .post button[data-selected="true"] {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }
}
</style>
