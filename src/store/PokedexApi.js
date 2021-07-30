import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_endpoint = process.env.POKEDEX_ENDPOINT || "http://localhost:1337"


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
      add(state,payload){
          state.data.push(payload)

      },
      edit(state,index,data){
          state.data[index] = data
          
      }
  },
  //action => public method in oop => other component use it Or get value from API , Server
  actions: {
      async editPokemon({commit},payload){
          console.log("payload",payload);

          let qs = payload.pokemon_types.map(it => "name_in="+it)

          let res_types = await Axios.get(api_endpoint+"/types?"+qs)


          let url = api_endpoint+"/monsters/"+payload.id
          let body = {
            name: payload.name,
            name_jp : payload.name_jp,
            pokemon_types: res_types.data.map((it) => it.id)
          }

          let res = await Axios.put(url,body)

          console.log(res);

          if (res.status === 200) {
            //todo: call API to edit data
            commit("edit",payload.index,res.data)
          } else {
              console.error(res);
          }

      },
      //commit -> keyword for calling "mutations"
      async fetchPokemon({commit}){
          // mock data -> get data from API
          let res = await Axios.get(api_endpoint+"/monsters");
          commit("fetch",{res})
      },
      async addPokemon({commit},payload){
          //todo: call API to add data
          let url = api_endpoint+"/monsters"
          console.log('payload',payload);
          //payload.pokemon_types = ["Fire","Flying"]

          //name_in=Fire&name_in=Flying
          let qs = payload.pokemon_types.map(it => "name_in="+it).join('&')
          console.log(qs);

          //http://localhost:1337/types?name_in=Fire&name_in=Flying
          let res_types = await Axios.get(api_endpoint+"/types?"+qs)

          let body = {
              name: payload.name,
              name_jp : payload.name_jp,
              pokemon_types: res_types.data.map((it) => it.id)
          }

          console.log('bodu',body);


          let res = await Axios.post(url,body)
          if (res.status === 200) {
            commit("add",res.data)
          } else {
              console.error(res);
          }
          
      }
  },
  modules: {}
})