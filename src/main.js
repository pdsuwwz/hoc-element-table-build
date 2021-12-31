import { createApp } from 'vue'

import router from '@/router'
import '@/router/permission'

import App from './App.vue'

import ElementPlus from 'element-plus'
import HocElementTable from '@hoc-element/table'

import '@/styles/variables.scss'
const app = createApp(App)

app
  .use(router)

app
  .use(ElementPlus)
  .use(HocElementTable)
  .mount('#app')

export default app
