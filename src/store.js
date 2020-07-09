import Vue from 'vue'
import Vuex from 'vuex'
import GameTable from "./GameTable";

Vue.use (Vuex)

const store = new Vuex.Store ({
  state: {
    table: {},
    sign: ''
  },
  
  getters: {
    getGameState(state) {
      
      if (state.table instanceof GameTable) {
        return state.table.getGameState ()
      }
      
      return null
    },
    
    sign(state) {
      return state.sign;
    },
  },
  mutations: {
    initGame(state) {
      state.table = new GameTable ();
      state.sign = 'x'
    },
    
  },
  actions: {
    move({commit, state}, step) {
      try {
        state.table.move (step, state.sign);
        
        //TODO remove this later
        state.sign = state.sign === "x" ? "o" : "x"
        
        
        return {success: true}
      } catch (e) {
        return {success: false}
      }
    }
  }
})

export default store;