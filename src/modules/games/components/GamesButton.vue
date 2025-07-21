<template>
  <button
    class="cursor-pointer group relative py-4 px-6 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md mx-auto"
    @click="handleClick"
  >
    {{ props.buttonLabel }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonLabel: {
    type: String,
    default: 'Button',
  },
})

const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>
