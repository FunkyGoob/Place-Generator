<template >
    <div class="main-container">
        <div class="place">
        <h2>Random Place!</h2>
        <p v-if="!clicked" id="outcome">Pick Your Poison!</p>
        <p v-if="clicked" id="outcome">{{ this.$store.state.place }}</p>
        <button @click="place()" id="random">Random!</button>
    </div>
    <div class="race">
        <h2>Random Race!</h2>
         <p v-if="!clicked">Please Roll your race!</p>
         <p v-if="clicked">Roll race # {{ this.combo }}</p>
         <p v-if="bastov"> Unless you rolled Bastov! Talk to DM!</p> 
        <button @click="race" id="race" v-if="clicked" >Random!</button>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            clicked: false,
            population: 0,
            combo: 0,
            bastov: false
        };
    },
    methods: {
        place(){
        let number = getplace();
        if(number <= 500){
           this.set_place("Jelkala"); 
           //set number
           this.population = 50000;
        }else if(number <= 780){
            this.set_place("Yalen")
            this.population = 28000
        }else if(number <= 930){
            this.set_place("Praven")
            this.population = 15000
        }else if(number <= 1000){
            this.set_place("Karkov")
            this.population = 7000
        }else if(number <= 1065){
            this.set_place("Tulga")
            this.population = 6500
        }else if(number <= 1615){
            this.set_place("Rivacheg Village")
            this.population = 55000
        }else if(number <= 1885){
            this.set_place("Weherchet")
            this.population = 27000
        }else if(number <= 2125){
            this.set_place("Saragoth")
            this.population = 24000
        }else if(number <= 2360){
            this.set_place("Suno")
            this.population = 23500
        }else if(number <= 2910){
            this.set_place("Tihr Hamlet")
            this.population = 20000
        }else if(number <= 3560){
            this.set_place("Galad-Omur")
            this.population = 65000
        }else if(number <= 3710){
            this.set_place("Halmar")
            this.population = 15000
        }else if(number <= 4010){
            this.set_place("Vladeta")
            this.population = 30000
        } else if (number <= 4095){
            this.set_place("Hvalimir")
            this.population = 8500
        }else if(number <= 4100){
            this.set_place("Bastov")
            this.bastov = true;
        }else if(number <= 4170){
            this.set_place("Dunja")
            this.population = 7000
        }else if(number <= 4235 ){
            this.set_place("New Athens") 
            this.population = 6500
        }else if(number <= 4285){
            this.set_place("Jovanka")
            this.population = 5000
        }else if(number <= 4310){
            this.set_place("Graymoor")
            this.population = 2500
        }else if(number <= 4325){
            this.set_place("Coldmaul")
            this.population = 1500
        }else if(number <= 4355){
            this.set_place("Zlatko")
            this.population = 3000
        }else if(number <= 4605){
            this.set_place("Neutral")
            this.population = 25000
        }
        this.clicked = true;
    },
        race(){
            this.combo = getrace(this.population);
        },
    set_place(number){
        this.$store.commit("SET_CURRENT_PLACE", number)
    },
    set_race(name){
        this.$store.commit("SET_CURRENT_RACE", name)
    }
}
}
function getplace(){
    return Math.floor(Math.random() * 4605) //4605
}

function getrace(number){
    return Math.floor(Math.random() * number)
}
</script>
<style scoped>
    .main-container{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
    }
    .place{
        display: flex;
        flex-direction: column;
    }
    .race{
        display: flex;
        flex-direction: column;
    }
    #random{
        font-size: 16px;
        transition-duration: 0.4s;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    #outcome{
        text-align: center;
    }
    #random:hover{
        background-color: #403d52;
    }

</style>