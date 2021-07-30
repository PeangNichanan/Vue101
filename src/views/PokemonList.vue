<template>
    <div>
        Pokemon List
        <pokemon-create-form></pokemon-create-form>
        <pokemon-table></pokemon-table>
    </div>
</template>

<script>
import PokemonTable from '../components/PokemonTable.vue'
import PokemonForm from '../components/PokemonCreateForm.vue'
import PokemonCreateForm from '../components/PokemonCreateForm.vue'
export default {
      components:{
    PokemonTable,
            PokemonCreateForm
  }
}
</script>

<style scoped lang="scss">

</style>