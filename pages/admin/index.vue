<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import type { Comment } from "~/types";

const isDesktop = useMediaQuery("(min-width: 720px)");
const showCommentsModal = useState(() => false);

const { data: postList } = await getAllPosts();

const commentIndex = useState(() => 1);

// Aqui a gente precisa retornar uma função para que o Javascript recrie o string
// E substitua o valor do commentIndex
const {
  error,
  pending,
  data: commentList,
} = useLazyFetch<Comment[]>(
  () =>
    `https://jsonplaceholder.typicode.com/posts/${commentIndex.value}/comments`
);

function showComment(id: number) {
  commentIndex.value = id;
  showCommentsModal.value = true;
}
</script>

<template>
  <div class="admin">
    <div class="admin__posts">
      <ul>
        <li
          class="posts__card"
          v-for="post in postList"
          :data-selected="commentIndex == post.id"
          :key="post.id"
        >
          <button @click="showComment(post.id)">{{ post.title }}</button>
        </li>
      </ul>
    </div>
    <!-- Aqui é necessário utilizar ClientOnly pois o SSR não consegue lidar com o Teleport-->
    <ClientOnly>
      <Teleport to="body" :disabled="isDesktop">
        <div class="admin__details" v-show="showCommentsModal || isDesktop">
          <div class="details__post">
          <p v-if="postList">{{ postList[commentIndex] }}</p>
          <p v-else>Erro ao carregar post</p>
          </div>
          <p v-if="pending"><LoadingSpinner /></p>
          <p v-else-if="error">Erro ao carregar comentários: {{ error }}</p>
          <p v-else>
            {{ commentList }}
            {{ showCommentsModal }}
            <button v-show="!isDesktop" @click="showCommentsModal = false">
              Close me
            </button>
          </p>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.admin {
  display: grid;
  height: 90vh;
  grid-template-columns: 1fr;
  position: relative;
}

.admin__details {
  display: grid;
  flex-grow: 1;
  place-items: center;
  background-color: white;
  position: absolute;
  inset: 0;
}

.admin__posts {
  overflow: scroll;
  padding-inline: 1rem;
  flex-grow: 1;
}

@media (min-width: 720px) {
  .admin__details {
    position: static;
  }

  .admin {
    grid-template-columns: 2fr 3fr;
  }
}

.admin__posts button {
  text-align: left;
  display: block;
  width: 100%;
  border: none;
  margin-top: 1rem;
  background-color: var(--background-secondary);
  padding: var(--content-padding);
  cursor: pointer;

  &::first-letter {
    text-transform: uppercase;
  }
}
</style>
