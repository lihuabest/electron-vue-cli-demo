import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './stores/store';

import ipc from './plugins/ipc';
Vue.use(ipc);

var app = new Vue({
    el: '#app',
    store, // 这里注意store是小写
    template: '<App/>',
    components: {
        App
    },

    // render: h => h(App) // 还可以这样写
});

