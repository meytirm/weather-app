import { Quasar } from 'quasar'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(Quasar, {
  plugin: {},
})
app.use(createPinia())
app.use(router)

app.mount('#app')
