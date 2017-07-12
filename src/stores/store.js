import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Theme from '../define/theme';

export default new Vuex.Store({
    state: {
        theme: Theme.RED,
    },
    mutations: {
        updateTheme (state, val) {
            state.theme = val;
        }
    },
    getters: {
        getTheme: (state) => state.theme
    }
});
