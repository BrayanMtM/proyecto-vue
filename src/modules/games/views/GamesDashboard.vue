<template>
  <div class="flex justify-center items-center p-4 w-full">
    <GamesCard RouterLinkCard="/juegos" title="juegos" description="Gestionar juegos" />

  </div>
</template>
<script setup lang="ts">
import GamesCard from '../components/GamesCard.vue';
</script>
