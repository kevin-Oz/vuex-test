import axios from 'axios';

const categoriaResource = 'http://127.0.0.1:5984/resbar-categoria/';

const getters = {
    categories: state => state.categorias
};
/*
 singleton que alamacena el estado globalmente,
 si un componente modifica una propiedad del state
 se vera reflejado en los demas que compartan esta data
  */
const state = {
    categorias: [],
};
/*
  labores de procesamiento
  como realizar petifciones
  al backend
*/
const actions = {
    async fetchCategorias({commit}) {
        const response = await axios.get(`${categoriaResource}_all_docs?include_docs=true`, {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        console.log('status Code: ',response.status, response.statusText);
        commit('setCategory', response.data.rows);

    },
    async addCategory({ commit }, category) {
        const response = await axios.post(`${categoriaResource}`, category,{
            auth: {
                username: 'admin',
                password: 'admin'
            },
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        });
        commit('newCategory', response);
    },
    async updateCategory({commit}, cat) {
        const response = await axios.put(`${categoriaResource}${cat.id}`, cat.doc,{
            params: {"rev": cat.doc._rev},
            auth: {
                username: 'admin',
                password: 'admin'
            },
            headers:{'Content-Type': 'application/json; charset=utf-8'}
        });
        commit('updCategory', response);
    },
    async removeCategory({commit}, cat) {
        console.log('url -> ',categoriaResource);
        await axios.delete(`${categoriaResource}${cat.id}`, {
            params: {"rev": cat.doc._rev},
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        commit('deleteCategory', cat);
    }
};
/*
funciones encargados de modificar el state
 */
const mutations = {
    setCategory(state, data) {
        console.info('actualice la lista')
        console.log('data => ', data)
        state.categorias = data;
    },
    newCategory(state, response){
        console.log('data =', response.data);
        console.log('status Code : ',response.status, response.statusText);
    },
    deleteCategory({commit}, response){
        console.log('registro eliminado -> ',response.doc.nombre, response.id);
    },
    updCategory({commit}, response){
        console.log('Status Code:  '+response.status);
    }
};

export default {
    state, getters, actions, mutations
}