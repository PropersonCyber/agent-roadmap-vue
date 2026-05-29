<script setup lang="ts">
import { useConfetti } from '@/composables/useConfetti'

const { pieces } = useConfetti()
</script>

<template>
  <div v-if="pieces.length" class="confetti-container">
    <div
      v-for="p in pieces"
      :key="p.id"
      class="confetti-piece"
      :style="{
        left: p.left,
        top: p.top,
        background: p.color,
        width: p.width,
        height: p.height,
        animationDelay: p.delay,
        animationDuration: p.duration
      }"
    ></div>
  </div>
</template>

<style scoped>
.confetti-container{position:fixed;inset:0;pointer-events:none;z-index:9998}
.confetti-piece{position:absolute;border-radius:2px;animation:confettiFall 1.5s ease-out forwards}
@keyframes confettiFall{0%{transform:translateY(-100px) rotate(0deg) scale(1);opacity:1}100%{transform:translateY(100vh) rotate(720deg) scale(0);opacity:0}}
</style>
