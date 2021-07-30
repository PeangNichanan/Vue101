import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      data:[],
  },
  getters:{
      pokemons: (state) => state.data,
  },
//mutations => private setter in oop -> change value in state
  mutations: {
      fetch(state,{res}){
          state.data = res.data
      },
      add(state,{payload}){
          state.data.push(payload)

      },
      edit(state,{payload}){
          state.data[payload.index].name = payload.name
          state.data[payload.index].type = payload.type
      }
  },
  //action => public method in oop => other component use it Or get value from API , Server
  actions: {
      editPokemon({commit},payload){
          //todo: call API to edit data
          commit("edit",{payload})
      },
      //commit -> keyword for calling "mutations"
      async fetchPokemon({commit}){
          // mock data -> get data from API
          let res = await Axios.get(api_endpoint)
          commit("fetch",{res})
      },
      addPokemon({commit},payload){
          //todo: call API to add data
          commit("add",{payload})
      }
  },
  modules: {}
})