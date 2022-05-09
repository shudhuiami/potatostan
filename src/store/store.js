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
        resultModal: false,
        alertModal: false,
        timerSec: 0,
        timerStatus: false,
        timerStart: false,
        timerStop: false,
        timerReset: false,
        timerInterval: null
    },
    getters: {
        HostsList(state) {
            return state.mailHosts;
        },
        getPeoples(state) {
            return state.peoples;
        },
        getPeoplesLength(state) {
            return state.peoples.length;
        },
        getStartModal(state) {
            return state.startSortModal;
        },
        getResultModal(state) {
            return state.resultModal;
        },
        getAlertModal(state) {
            return state.alertModal;
        },
        getTimerSec(state) {
            return state.timerSec;
        },
        getTimerStatus(state) {
            return state.timerStatus;
        },
        getTimerStart(state) {
            return state.timerStart;
        },
        getTimerStop(state) {
            return state.timerStop;
        },
        getTimerReset(state) {
            return state.timerReset;
        },
        getTimerInterval(state) {
            return state.timerInterval;
        },




    },
    mutations: {
        setPeoples(state, option) {
            state.peoples = option;
        },
        setStartModal(state, option) {
            state.startSortModal = option;
        },
        setResultModal(state, option) {
            state.resultModal = option;
        },
        setAlertModal(state, option) {
            state.alertModal = option;
        },
        setTimerSec(state, option) {
            state.timerSec = option;
        },
        setTimerStatus(state, option) {
            state.timerStatus = option;
        },
        setTimerStart(state, option) {
            state.timerStart = option;
        },
        setTimerStop(state, option) {
            state.timerStop = option;
        },
        setTimerReset(state, option) {
            state.timerReset = option;
        },
        setTimerInterval(state, option) {
            state.timerInterval = option;
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
                    active: false,
                })
                count--;
            }
            context.commit('setPeoples', peoples_arr)
        },
        SortCompleted(context, status) {
            if(status === true){
                context.commit('setTimerStop', true);
                context.commit('setResultModal', true);
            }
        },
    }
});