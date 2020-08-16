<template>
<div>
    <ul class="list-group" v-if="categories !== []">
        <li v-for="cat of categories" :key="cat.id"
         class="list-group-item d-flex justify-content-between align-items-center">
                <span>{{ cat.doc.nombre }}</span>
                <span class="badge badge-primary badge-pill">{{ cat.id }}</span>
            <div>
            <button @click="delCategory(cat)" class="btn btn-danger">Del</button>
                <button @click="showMebaby(cat)" v-bind:class="{'btn btn-primary': inputEdit==false, 'btn btn-dark': inputEdit }">{{edith_msj}}</button>
            </div>
        </li>
        <label>
            <input  v-model="categoria.doc.nombre" v-if="inputEdit == true" placeholder="modifique el registro">
        </label>
    </ul>
    <hr>
    <button v-if="inputEdit == true" @click="upCategory" class="btn btn-dark align-content-center focus" >Guardar Cambios</button>
  <hr>
     <input placeholder="agregue categoria" v-model="categoria.nombre">
    <button @click="crearCategoria" class="btn btn-success">Add</button>
</div>
</template>

<script>
 import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Categoria',
    data(){
      return {
          categoria: {},
          inputEdit: false,
          edith_msj: 'Edith'
      }
    },
   computed: {
       ...mapGetters(['categories']),
        },
   methods: {
       ...mapActions(['fetchCategorias', 'addCategory', 'removeCategory','updateCategory']),
       async crearCategoria() {
           await this.addCategory(this.categoria);
           this.categoria.nombre = '';
           await this.fetchCategorias();
       },
       async delCategory(cat) {
           await this.removeCategory(cat);
           await this.fetchCategorias();

       },
       showMebaby(cat){
           this.inputEdit = !this.inputEdit;
           if(this.inputEdit == true){
               this.edith_msj = 'Cancel';
           }else {
               this.edith_msj = 'Edith';
           }
            this.categoria = cat;
       },
       async upCategory() {
           this.inputEdit = false;
           this.edith_msj = 'Edith';
           await this.updateCategory(this.categoria);
           await this.fetchCategorias();
       }
   },
   created(){
        this.fetchCategorias();
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
