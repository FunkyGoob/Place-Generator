
// import Vue from 'vue'
// import App from './App.vue'
// import store from './store/index'


// Vue.config.productionTip = false

// new Vue({
//   store,
//   render: h => h(App)
// }).createApp(App).$mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import store from './store'


// createApp(App).use(store).mount('#app')

import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'

const app = createApp(App)

app.use(store)

app.mount('#app')