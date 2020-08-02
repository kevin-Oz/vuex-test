import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 /*
 singleton que alamacena el estado globalmente,
 si un componente modifica una propiedad del state
 se vera reflejado en los demas que compartan esta data
  */
  state: {
    frutas: [
      { nombre: 'Naranja', cantidad: 0},
      { nombre: 'Sandia', cantidad: 2},
      { nombre: 'Melon', cantidad: 2}
    ]
  },
  /*
  funciones encargados de modificar el state
   */
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++;
    },
    reiniciar(state){
      state.frutas.forEach(elemento => {
        elemento.cantidad=0;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
