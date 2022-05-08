import Vue from 'vue'
import Vuex from 'vuex'
import {names, uniqueNamesGenerator} from "unique-names-generator";
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        peoples: [],
        mailHosts: [
            'gmail.com',
            'yahoo.com',
            'live.com',
            'outlook.com',
        ],
    },
    getters: {
        HostsList(state) {
            return state.mailHosts;
        },
        getPeoples(state) {
            return state.peoples;
        },

    },
    mutations: {
        setPeoples(state, option) {
            state.peoples = option;
        },
    },
    actions: {
        generatesPeoples(context, count) {
            let peoples_arr = [];
            while (count) {
                const first_name = uniqueNamesGenerator({dictionaries: [names]});
                const last_name = uniqueNamesGenerator({dictionaries: [names]});
                const mailHost = uniqueNamesGenerator({dictionaries: [context.state.mailHosts]});
                const user_email = first_name + '@' + mailHost;
                const potatoes = Math.floor(Math.random() * 999) + 1;
                peoples_arr.push({
                    email: user_email,
                    potatoes: potatoes,
                    first_name: first_name,
                    last_name: last_name,
                })
                count--;
            }
            context.commit('setPeoples', peoples_arr)
        },
    }
});