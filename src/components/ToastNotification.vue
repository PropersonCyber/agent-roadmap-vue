<script setup lang="ts">
import { useToast } from '@/composables/useToast'

const { toast } = useToast()
</script>

<template>
  <div
    class="toast"
    :class="{ show: toast.visible, celebrate: toast.celebrate }"
  >{{ toast.message }}</div>
</template>

<style scoped>
.toast{position:fixed;bottom:32px;left:50%;transform:translateX(-50%) translateY(100px);padding:14px 24px;border-radius:12px;background:var(--accent);color:#fff;font-size:14px;font-weight:600;z-index:9999;box-shadow:0 8px 32px var(--accent-glow);transition:transform .4s cubic-bezier(.4,0,.2,1);pointer-events:none}
.toast.show{transform:translateX(-50%) translateY(0)}
.toast.celebrate{background:linear-gradient(135deg,var(--accent),var(--purple));font-size:16px;padding:18px 32px;box-shadow:0 12px 40px var(--accent-glow)}
</style>
