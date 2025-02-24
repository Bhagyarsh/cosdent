<script setup lang="ts">
// You might choose this based on an API call or logged-in status
const layout = "custom";
</script>

<template>
  <NuxtLayout :name="layouts">
    <NuxtPage />
  </NuxtLayout>
</template>



<style >
html {
  scroll-behavior: smooth;
}
</style>
