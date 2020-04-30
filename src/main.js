import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/style.scss'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import VueCookies from 'vue-cookies'
import i18n from './lang/i18n'
import VueJSModal from 'vue-js-modal'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(AOS, {
  duration: 800,
  easing: 'slide'
})
Vue.use(VueCookies)
Vue.use(VueJSModal, {
  dialog: true,
  dynamic: true
})
Vue.use(VueFbCustomerChat, {
  page_id: '197657473618542',
  locale: 'vi_vn'
})
Vue.config.productionTip = false

const app = new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

export default app
