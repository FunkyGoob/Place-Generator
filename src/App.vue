<template>
  <div class="flex">
 <left-side class="left"></left-side>
</div>
</template>

<script>

import LeftSide from './components/left-side.vue';


export default {
  name: 'App',
  components: {
    LeftSide
  }
}
</script>

<style scoped>
.flex{
  min-height: 90vh;
  display: flex;
  
}

.left{
width: 420px;
background-color: #5b1e2c;
display: flex;
justify-content: center;
flex-wrap: wrap;
}


</style>
