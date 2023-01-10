// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);


import { createStore } from 'vuex'

export const store = createStore({
  state: {
    places: ["Jelkala", "Yalen", "Praven", "Karkov", "Tulga", "Rivacheg Village", "Weherchet", "Saragoth", "Suno", 
    "Tihr Hamlet", "Galad-Omur", "Halmar", "Vladeta", "Hvalimir", "Bastov", "Dunja", "New Athens", "Jovanka", "Graymoor", 
    "Coldmaul", "Zlatko"],
    place: "",
    race:""
    
  },
 mutations: {
    SET_CURRENT_PLACE(state,number){
        state.place = number;
    },
    SET_CURRENT_RACE(state, name){
      state.place = name;
    }
 }
});
