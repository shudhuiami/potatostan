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
        startSortModal: false,
        timerSec: 0,
        timerStatus: false,
    },
    getters: {
        HostsList(state) {
            return state.mailHosts;
        },
        getPeoples(state) {
            return state.peoples;
        },
        getStartModal(state) {
            return state.startSortModal;
        },
        getTimerSec(state) {
            return state.timerSec;
        },
        getTimerStatus(state) {
            return state.timerStatus;
        },




    },
    mutations: {
        setPeoples(state, option) {
            state.peoples = option;
        },
        setStartModal(state, option) {
            state.startSortModal = option;
        },
        setTimerSec(state, option) {
            state.timerSec = option;
        },
        setTimerStatus(state, option) {
            state.timerStatus = option;
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
        SortCompleted(context, status)
        {
            if(status === true){
                context.commit('setTimerStatus', false);
                alert('Winner');
            }
        },
    }
});