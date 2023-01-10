<template >
    <div>
        <div class="moving">
        <h1>Welcome to the Eneth random race and place generator!</h1>
        <Gens></Gens>
    </div>
    </div>
</template>
<script>
import Gens from './both-gens.vue'

export default {
    components:{
        Gens
    }
}
</script>
<style lang="css" scoped>
    div{
        display: flex;
        flex-wrap: wrap;
        max-height: 300px;
        text-align: center;
        justify-content: center;
    }
        h1{
        display: flex;
        text-align: center; 
        
    }
    
</style>