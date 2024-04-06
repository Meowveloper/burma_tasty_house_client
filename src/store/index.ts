import { createStore } from 'vuex'

export default createStore({
  state: {
    newRecipe : {}, 

    validateNewRecipe : {
      form0 : false, 
      form1 : false, 
      form2 : false, 
      form3 : false
    }
  },
  getters: {
    getNewRecipe(state) {
      return state.newRecipe
    }, 

    getValidateNewRecipe (state) {
      return state.validateNewRecipe.form0 && state.validateNewRecipe.form1 && state.validateNewRecipe.form2 && state.validateNewRecipe.form3;
    }
  },
  mutations: {
    setNewRecipe (state, newVal) {
      state.newRecipe = {...state.newRecipe, ...newVal};
    },

    setValidateNewRecipe (state, newVal) {
      state.validateNewRecipe = {...state.validateNewRecipe, ...newVal};
    }
  },
  actions: {
  },
  modules: {
  }
})
