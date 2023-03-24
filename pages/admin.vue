<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import type { Post } from "~/types";
import CloseIcon from "~icons/mdi/close-circle-outline";

const isDesktop = useMediaQuery("(min-width: 720px)");

const showCommentsModal = ref(false);

const selectedPostId = useState<null | number>(() => null);

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
  <Head>
    <Title>AlkaBlog | Área do Administrador</Title>
  </Head>
  <div class="admin">
    <div class="admin__posts">
      <AdminPostList
        :postList="postList"
        :selectedPostId="selectedPostId"
        @selectPost="selectPost"
      />
    </div>
    <!-- Aqui é necessário utilizar ClientOnly pois o SSR não consegue lidar com o Teleport-->
    <ClientOnly>
      <Teleport to="main" :disabled="isDesktop">
        <Transition name="transition-slidein">
          <div class="admin__details" v-if="showDetailsModal || isDesktop">
            <p v-if="selectedPostId === null">
              Selecione um post ao lado para ver suas informações e os seus
              comentários.
            </p>
            <!-- O <template> é uma forma de usar um directive sem criar um elemento -->
            <template v-else>
              <div class="details__post">
                <p v-if="selectedPost">
                  <AdminPostInfo :postInfo="selectedPost" />
                </p>
                <p v-else>Erro ao carregar post</p>
              </div>
              <hr />
              <AdminCommentList :selectedPostId="selectedPostId" />
              <button v-show="!isDesktop" @click="showDetailsModal = false">
                <CloseIcon />
              </button>
            </template>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  display: grid;
  height: 90vh;
  grid-template-columns: 1fr;
  grid-template-rows: 100%;
  position: relative;
}

.admin__posts {
  overflow-x: scroll;
  padding-inline: var(--content-padding);
}

.admin__details {
  position: relative;
  display: grid;
  gap: 1rem;
  background-color: white;
  grid-template-rows: auto auto 1fr;
  position: absolute;
  inset: 2rem 0 0 0;
  padding: var(--space-m-l);

  & button {
    position: absolute;
    right: var(--space-m-l);
    top: var(--space-m-l);
    background: none;
    border: none;
    font-size: var(--step-2);
    cursor: pointer;
    opacity: 0.3;
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
