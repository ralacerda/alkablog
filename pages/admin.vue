<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import type { Comment } from "~/types";

const isDesktop = useMediaQuery("(min-width: 720px)");

const showCommentsModal = ref(false);

// Começando com 1 para não ter que lidar com o cenário
// em que nenhum post está selecionado
const selectedPostId = ref(1);

const { data: postList } = await getAllPosts();

// Aqui a gente precisa passar uma função para que o Javascript recrie o string
// e substitua o valor do selectedPostId sempre que ref mudar
const {
  error,
  pending,
  data: commentList,
} = useLazyFetch<Comment[]>(
  () =>
    `https://jsonplaceholder.typicode.com/posts/${selectedPostId.value}/comments`
);

function showComment(id: number) {
  selectedPostId.value = id;
  showCommentsModal.value = true;
}
</script>

<template>
  <div class="admin">
    <div class="admin__posts">
      <h2>Posts</h2>
      <ul>
        <li class="posts__card" v-for="post in postList" :key="post.id">
          <button
            @click="showComment(post.id)"
            :data-selected="selectedPostId == post.id"
          >
            {{ post.title }}
          </button>
        </li>
      </ul>
    </div>
    <!-- Aqui é necessário utilizar ClientOnly pois o SSR não consegue lidar com o Teleport-->
    <ClientOnly>
      <Teleport to="body" :disabled="isDesktop">
        <div class="admin__details" v-show="showCommentsModal || isDesktop">
          <div class="details__post">
            <p v-if="postList">{{ postList[selectedPostId] }}</p>
            <p v-else>Erro ao carregar post</p>
          </div>
          <p v-if="pending"><LoadingSpinner /></p>
          <p v-else-if="error" class="error">
            Erro ao carregar os comentários: {{ error }}
          </p>
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

.admin__posts button {
  text-align: left;
  display: block;
  width: 100%;
  border: none;
  margin-top: 1rem;
  background-color: var(--background-secondary);
  padding: 1rem;
  cursor: pointer;

  &[data-selected="true"] {
    background-color: green;
  }

  &::first-letter {
    text-transform: uppercase;
  }
}

@media (min-width: 720px) {
  .admin__details {
    position: static;
  }

  .admin {
    grid-template-columns: 2fr 3fr;
  }
}
</style>
