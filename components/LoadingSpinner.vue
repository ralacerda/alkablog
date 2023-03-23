<script setup lang="ts">
import SpinnerLogo from "~icons/mdi/loading";
</script>

<template>
  <div class="spinner-wrapper">
    <SpinnerLogo class="spinner" />
  </div>
</template>

<style>
.spinner-wrapper {
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
}

.spinner {
  display: grid;
  place-items: center;
  color: var(--foreground-secondary);
  opacity: 0.2;
  font-size: 3em;
  animation: spin 0.5s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
}
</style>
