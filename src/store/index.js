import Vue from 'vue'
import Vuex from 'vuex'
import Categoria from "./modules/Categoria";
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    Categoria
  }
})
