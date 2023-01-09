<template>
  <div>
  <JelkalaCard></JelkalaCard>
  <YalenCard></YalenCard>
  <PravenCard></PravenCard>
  <KarkovCard></KarkovCard>
  <TulgaCard></TulgaCard>
  <VillageCard></VillageCard>
  <WeherchetCard></WeherchetCard>
  <SaragothCard></SaragothCard>
  </div>
</template>

<script>
import JelkalaCard from './jelkala-card.vue';
import YalenCard from './yalen-card.vue'
import PravenCard from './praven-card.vue'
import KarkovCard from './karkov-card.vue'
import TulgaCard from './tulga-card.vue'
import VillageCard from './village-card.vue'
import WeherchetCard from './weherchet-card.vue'
import SaragothCard from  './saragoth-card.vue'

export default {
    components: { JelkalaCard,
    YalenCard,
    PravenCard,
    KarkovCard,
    TulgaCard,
    VillageCard,
    WeherchetCard,
    SaragothCard
    }
}
</script>

<style scoped>
div{
 display: flex;
}
</style>