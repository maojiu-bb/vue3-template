// You can add more customization hooks in this folder

// This is a example hook
import { ref } from 'vue'

export const useCounte = () => {
  const count = ref<number>(0)

  const add = () => {
    count.value++
  }

  return { count, add }
}
