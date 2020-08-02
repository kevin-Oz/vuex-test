<template>
    <div  >
        <ul class="list-group">
            <li v-for="(item, index) of frutas" @click="aumentar(index)"
                class="list-group-item d-flex justify-content-between align-items-center">
                {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>

        </ul>
        <button @click="reiniciar" class="btn btn-danger btn-block">reiniciar</button>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: "Lista",
        /**
         * usar computed properties para obtener la definicion
         * de lo que este en el state.
         * Cualquier logica compleja que afecte al template
         * deberia de usar una propiedad computada
         */
        computed: {
        ...mapState(['frutas']),
            sortFrutas(){
            return this.frutas.sort((a,b) => b.cantidad - a.cantidad)
            }
        },
        methods: {
            ...mapMutations(['aumentar','reiniciar'])
        }

    }
</script>

<style scoped>

</style>