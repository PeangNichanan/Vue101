<template>
    <div>
        Add New Pokemon
        <div>
            <div>
                <label for="name">Name (En)</label>
                <input type="text" v-model="form.name">
            </div>
            <div>
                <label for="name">Name (Jp)</label>
                <input type="text" v-model="form.name_jp">
            </div>
            <div>
                <label for="name">Type</label>
                <input type="text" v-model="form.pokemon_types">
            </div>
            <div>
                <button @click="addPokemon">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import PokedexStore from '@/store/PokedexApi'
export default {
    data(){
        return{
            form:{
                name:'',
                name_jp: '',
                pokemon_types:''
            }
        }
    },
    methods:{
        clearForm(){
            this.form={
                    name:'',
                    name_jp: '',
                    pokemon_types:''
                }
        },
        addPokemon(){
            let payload = {
                name: this.form.name,
                name_jp: this.form.name_jp,
                pokemon_types: this.form.pokemon_types.split(",").map(
                    (item) => item.trim()
                )
            }
            PokedexStore.dispatch("addPokemon",payload)

            //send data to Store
            console.log(payload)//use "form" -> not display => change to "div"
            this.clearForm()

        }
    }
    
}
</script>

<style lang="scss">

</style>