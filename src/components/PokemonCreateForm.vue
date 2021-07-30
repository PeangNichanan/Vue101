<template>
    <div>
        Add New Pokemon
        <div>
            <div>
                <label for="name">Name (En)</label>
                <input type="text" v-model="form.name.english">
            </div>
            <div>
                <label for="name">Name (Jp)</label>
                <input type="text" v-model="form.name.japanese">
            </div>
            <div>
                <label for="name">Type</label>
                <input type="text" v-model="form.type">
            </div>
            <div>
                <button @click="addPokemon">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import PokemonStore from '@/store/Pokemon'
export default {
    data(){
        return{
            form:{
                name:{
                    english: '',
                    japanese: ''
                },
                type:''
            }
        }
    },
    methods:{
        clearForm(){
            this.form={
                    name:{
                        english: '',
                        japanese: ''
                    },
                    type:''
                }
        },
        addPokemon(){
            let payload = {
                name: this.form.name,
                type: this.form.type.split(",").map(
                    (item) => item.trim()
                )
            }
            PokemonStore.dispatch("addPokemon",payload)

            //send data to Store
            console.log(payload)//use "form" -> not display => change to "div"
            this.clearForm()

        }
    }
    
}
</script>

<style lang="scss">

</style>