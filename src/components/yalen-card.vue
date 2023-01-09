<template>
    <div class="base-card">
        <div class="slot" id="name">
        <h1>Yalen</h1>
    </div>
    <div class="slot" id="img">
        <img src="../assets/yalen.png">
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .base-card{
        display: flex;
        flex-direction: column;
        width: 90%;
        background-color: #5b1e2c;
        height:auto;
        padding: 5px;
    }
    #img{
        width: 100%;
        display: flex;
        padding-bottom: 20px;
    }
    .slot{
        display: flex;
        justify-content: center;
        background-color: #403d52;
    }
    #name{
        display: flex;
        
    }
   
</style>