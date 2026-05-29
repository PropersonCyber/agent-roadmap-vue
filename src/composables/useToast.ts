import { ref } from 'vue'

interface ToastState {
  visible: boolean
  message: string
  celebrate: boolean
}

const toast = ref<ToastState>({ visible: false, message: '', celebrate: false })
let timer: ReturnType<typeof setTimeout> | null = null

export function useToast() {
  function showToast(message: string, celebrate = false) {
    if (timer) clearTimeout(timer)
    toast.value = { visible: true, message, celebrate }
    timer = setTimeout(() => {
      toast.value = { ...toast.value, visible: false }
    }, 3000)
  }

  return { toast, showToast }
}
