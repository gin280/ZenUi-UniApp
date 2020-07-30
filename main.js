import Vue from 'vue'
import App from './App'
import zen from './utils/request'

Vue.config.productionTip = false
Vue.prototype.zen = zen

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
