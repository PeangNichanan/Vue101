<template>
  <div>
      Counter: {{number}}
      <div>
        <label for="counter" v-bind:title="number">Counter: </label>
        <input type="text" v-model="number">
        <button v-on:click="increase">+</button>
        <button @click="decrease">-</button>
        <button v-on:click="plus10">+10</button>
        <button v-on:click="multi2">x2</button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      number: 200
    }
  },
  methods:{
    increase(){
      this.number++
    },
    decrease(){
      this.number--
    },
    plus10(){
      this.number = parseInt(this.number)+10
    },
    multi2(){
      this.number*=2
    }
  }

}
</script>

<style scoped lang="scss" >
  button{
    padding: 5px 10px 5px 10px;
    margin: 1px;
    background-color: rgb(196, 233, 111);
    border-radius: 10px;
  }
  button:hover{
    background-color: rgb(238, 197, 197);
  }

</style>