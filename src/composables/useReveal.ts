import { ref, onMounted } from 'vue'

export function useReveal() {
  const revealRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (revealRef.value) {
      observer.observe(revealRef.value)
    }

    const allReveal = document.querySelectorAll('.reveal')
    allReveal.forEach((el) => observer.observe(el))
  })

  return revealRef
}
