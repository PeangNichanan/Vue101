<template>
  <div class="mb-20">
      <h1>Number List</h1>
      <p>Sample counter Components</p>
      <counter></counter>
      <br>
      <counter></counter>
      <br>
      <counter></counter>
      <br>
      <counter></counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
export default {
  components:{
    Counter
  }
}
</script>

<style scoped lang="scss">
mb-20{
  margin-bottom: 20px;
}

</style>