<template>
  <div id="app">
  <div class="flex">
 <left-side class="left"></left-side>
 <div class="background"></div>
 <middle-side class="middle"></middle-side>
 <right-side class="right"></right-side>
</div>
</div>
</template>

<script>

import LeftSide from './components/left-side.vue';
import RightSide from './components/right-side.vue'
import MiddleSide from './middle/middle-side.vue'


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
  display: flex;
  width: 100%;
  background: #5b1e2c;
}

.left{
width: 420px;
background-color: #5b1e2c;
display: flex;
justify-content: center;
flex-wrap: wrap;
min-height: 90vh;
}
.right{
  width: 420px;
  background-color: #5b1e2c;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.middle{
  width: 80%;
  border-style: solid;
  text-align: center;
  position: sticky;
  top: 35vh;
}
</style>
