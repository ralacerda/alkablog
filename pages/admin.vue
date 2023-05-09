<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import CloseIcon from "~icons/mdi/close-circle-outline";

const isDesktop = useMediaQuery("(min-width: 720px)");

const showDetailsModal = useState(() => false);
const selectedPostId = useState<null | number>(() => null);

const { data: postList } = await getAllPosts();

// We use find instead of `postList[selectedPostId.value - 1]`
// because we're not sure the API will always returnd the array ordered by ID
const selectedPost = computed(() => {
  if (postList.value) {
    const post = postList.value.find((post) => post.id == selectedPostId.value);
    return post ? post : null;
  }
  return null;
});

function selectPost(id: number) {
  selectedPostId.value = id;
  showDetailsModal.value = isDesktop.value ? false : true;
}
</script>

<template>
  <Head>
    <Title>AlkaBlog | Admin Panel </Title>
  </Head>
  <div class="admin">
    <div class="admin__posts">
      <AdminPostList
        :postList="postList"
        :selectedPostId="selectedPostId"
        @selectPost="selectPost"
      />
    </div>
    <!-- We need to use ClientOnly since Teleport doesn't work with SSR-->
    <ClientOnly>
      <Teleport to="main" :disabled="isDesktop">
        <Transition name="transition-slidein">
          <div class="admin__details" v-if="showDetailsModal || isDesktop">
            <p v-if="selectedPostId === null">
              Select a post to view it's content and comments
            </p>
            <!-- <template> allow us to use a directive without creating a new element -->
            <template v-else>
              <div class="details__post">
                <AdminPostInfo :postInfo="selectedPost" />
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
  background-color: var(--background-secondary);
  grid-template-rows: auto auto 1fr;
  position: absolute;
  inset: 2rem 0 0 0;
  padding: var(--space-m-l);

  & button {
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
