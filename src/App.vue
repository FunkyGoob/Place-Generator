<template>
  <div class="flex">
 <left-side class="left"></left-side>
 <middle-side class="middle"></middle-side>
 <right-side class="right"></right-side>
</div>
</template>

<script>

import LeftSide from './components/left-side.vue';
import RightSide from './components/right-side.vue'
import MiddleSide from './components/middle-side.vue'


export default {
  name: 'App',
  components: {
    LeftSide,
    RightSide,
    MiddleSide
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
.right{
  width: 420px;
  background-color: #373049;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-self:end;
}
.middle{
  width: 70%;
}
</style>
