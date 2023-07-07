import { createPinia } from 'pinia'
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// import the store modules from modules fold
import { useoptionStore } from './modules/optionStore'
import { usecompositionStore } from './modules/compositionStore'
// other import modules ...

const pinia = createPinia()

// Add pinia persistent storage
pinia.use(PiniaPluginPersistedstate)

// export the store module
export {
  useoptionStore,
  usecompositionStore
  // other store modules
}

export default pinia
