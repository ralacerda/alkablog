<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error-wrapper">
    <div clas="error">
      <h2>ERROR</h2>
      <div class="error__code">
        {{ error?.statusCode }}
      </div>
      <div class="error__message">
        {{ error?.statusMessage }}
      </div>
      <div class="error__back">
        Looks like something went wrong.
        <div>
          <a @click="handleError">Go back to the Home Page.</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-wrapper {
  display: grid;
  height: 40vh;
  place-items: center;
  text-align: center;

  h2 {
    font-size: var(--step-3);
  }
}

.error__code {
  font-size: var(--step-3);
}

.error__back {
  margin-top: var(--space-m-l);

  a {
    color: var(--accent);
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
