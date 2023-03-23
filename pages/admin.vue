<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import type { Post } from "~/types";

const isDesktop = useMediaQuery("(min-width: 720px)");

const showCommentsModal = ref(false);

// Começando com 1 para não ter que lidar com o cenário
// em que nenhum post está selecionado
const selectedPostId = ref(1);

const { data: postList } = await getAllPosts();

// Usamos um filter para evitar usar `postList[selectedPostId.value - 1]`
// já que não temos certeza que a API vai sempre responder com os ID em ordem
const selectedPost = computed(() => {
  if (postList.value) {
    return postList.value.filter(
      (post: Post) => post.id == selectedPostId.value
    )[0];
  }
});

function selectPost(id: number) {
  selectedPostId.value = id;
  showCommentsModal.value = true;
}
</script>

<template>
  <div class="admin">
    <div class="admin__posts">
      <AdminPostList
        v-if="postList"
        :postList="postList"
        :selectedPostId="selectedPostId"
        @selectPost="selectPost"
      />
      <p v-else class="error">Erro ao carregar list de posts</p>
    </div>
    <!-- Aqui é necessário utilizar ClientOnly pois o SSR não consegue lidar com o Teleport-->
    <ClientOnly>
      <Teleport to="main" :disabled="isDesktop">
        <div class="admin__details" v-show="showCommentsModal || isDesktop">
          <div class="details__post">
            <p v-if="selectedPost">
              <AdminPostInfo :postInfo="selectedPost" />
            </p>
            <p v-else>Erro ao carregar post</p>
          </div>
          <hr />
          <AdminCommentList :selectedPostId="selectedPostId" />
          <button v-show="!isDesktop" @click="showCommentsModal = false">
            Close me
          </button>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  display: grid;
  height: 90vh;
  grid-template-columns: 1fr;
  position: relative;
}

.admin__posts {
  overflow: scroll;
  padding-inline: 1rem;
}

.admin__details {
  overflow: scroll;
  display: grid;
  gap: 1rem;
  background-color: white;
  grid-template-rows: auto auto 1fr;
  position: absolute;
  inset: 0;
  padding: 4rem;
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
