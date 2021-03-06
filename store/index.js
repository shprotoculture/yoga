import Vue from 'vue';
import Vuex from 'vuex';

import { header } from './header/index';

Vue.use(Vuex);



const store = () => new Vuex.Store({
    modules: {
        header
    }
});

export default store;