import { ref } from 'vue'

interface ConfettiPiece {
  id: number
  left: string
  top: string
  color: string
  width: string
  height: string
  delay: string
  duration: string
}

let nextId = 0
const pieces = ref<ConfettiPiece[]>([])

export function useConfetti() {
  const COLORS = ['#10b981','#8b5cf6','#3b82f6','#f59e0b','#ec4899','#ef4444','#06b6d4','#f97316']

  function spawnConfetti(count = 60) {
    const newPieces: ConfettiPiece[] = []
    for (let i = 0; i < count; i++) {
      newPieces.push({
        id: nextId++,
        left: Math.random() * 100 + '%',
        top: -(Math.random() * 40 + 10) + 'px',
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        width: (Math.random() * 8 + 6) + 'px',
        height: (Math.random() * 8 + 6) + 'px',
        delay: Math.random() * 0.8 + 's',
        duration: (Math.random() * 1 + 1.5) + 's'
      })
    }
    pieces.value = pieces.value.concat(newPieces)
    setTimeout(() => {
      pieces.value = []
    }, 2500)
  }

  return { pieces, spawnConfetti }
}
