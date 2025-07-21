<template>
  <div class="flex justify-center items-center p-4 w-full">
    <GamesCard RouterLinkCard="/ranking" title="Ranking" description="Ranking de los juegos" />

  </div>
</template>
<script setup lang="ts">
import GamesCard from '../../games/components/GamesCard.vue';
</script>
