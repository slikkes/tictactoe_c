import Vue from 'vue'
import Vuex from 'vuex'
import GameTable from "./GameTable";

Vue.use (Vuex)

const store = new Vuex.Store ({
  state: {
    table: {}
  },
  
  getters:{
    getGameState(state){
      
      if(state.table instanceof GameTable){
        return state.table.getGameState()
      }
      
      return null
    }
  },
  mutations: {
    initGame(state) {
      state.table = new GameTable ();
    },
    
  },
  actions: {
    move({commit, state}, step) {
      try {
        state.table.move (step);
        
        return {success: true}
      } catch (e) {
        return {success: false}
      }
    }
  }
})

export default store;