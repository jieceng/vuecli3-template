import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/reset.css'	//重置样式
import 'lib-flexible'						//根字体大小随宽度变化
import router from '@/router'   //路由配置
import http from '@/config/http'//网络请求
import api from '@/config/api'	//api接口
import store from '@/store'
Vue.prototype.http = http;
Vue.prototype.api = api;
Vue.config.productionTip = false

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')
