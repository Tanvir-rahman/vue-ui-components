import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
// import 'src/theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import 'src/styles/element-variables.scss'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App)
}).$mount('#app')
