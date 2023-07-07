// Register the global component

import type { Component, App } from 'vue'
// Import the global components at here
import Test from './Test/index.vue'
// ...

const components: {
  [propName: string]: Component
} = {
  // Put in the global components that need to be registered
  Test
  // ...
}

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key])
    }
  }
}
