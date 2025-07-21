<template>
  <div class="flex justify-center items-center p-4 w-full">
    <GamesCard RouterLinkCard="/votacion" title="Votar" description="Votar a tu juego preferido" />
  </div>
</template>
<script setup lang="ts">
import GamesCard from '../../games/components/GamesCard.vue';
</script>
