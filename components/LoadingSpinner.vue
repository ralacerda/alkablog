<script setup lang="ts">
import SpinnerLogo from "~icons/mdi/loading";
</script>

<template>
  <SpinnerLogo class="spinner" />
</template>

<style>
.spinner {
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
