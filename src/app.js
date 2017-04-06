import "./main.scss";
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        text: ""
    },
    mutations: {
        updateText(state, text) {
            state.text = text
        }
    }
});


import BeautifyJSON from "./components/BeautifyJSON.vue";

new Vue({
    el: "#app",
    store,
    render(h) {
        return h(BeautifyJSON)
    },
    components: { BeautifyJSON }
})