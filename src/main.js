import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gtag from 'vue-gtag'

createApp(App)
  .use(router)
  .mount('#app')

App.use(gtag, {
  property: {
    id: 'UA-91636249-3',
  },
})
