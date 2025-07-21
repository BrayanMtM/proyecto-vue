<template>
  <div class="max-w-4xl mx-auto p-6 mt-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="mt-6 flex items-center justify-center h-48">
        <GamesDashboard />
      </div>
      <div class="mt-6 flex items-center justify-center h-48">
        <VotesDashboard />
      </div>
      <div class="mt-6 flex items-center justify-center h-48">
        <UsersDashboard />
      </div>
      <div class="mt-6 flex items-center justify-center h-48">
        <RankingDashboard />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import GamesDashboard from '@/modules/games/views/GamesDashboard.vue'
import VotesDashboard from '@/modules/votes/views/VotesDashboard.vue'
import UsersDashboard from '@/modules/users/views/UsersDashboard.vue'
import RankingDashboard from '@/modules/ranking/views/RankingDashboard.vue'
</script>
