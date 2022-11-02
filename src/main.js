import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './assets/main.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

const options = {
    position: 'top-center',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
    transition: 'Vue-Toastification__fade',
    maxToasts: 20,
    newestOnTop: true,
}

Vue.use(Toast, options)

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app')
