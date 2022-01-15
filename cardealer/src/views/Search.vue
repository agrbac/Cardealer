<template>
  <div class="row">
    <div class="col-3">
    </div>
    <div class="col-6">
        <p></p>
        <input  v-model="store.searchTerm" class="form-control" type="text" placeholder="Search" aria-label="Search">
        <p></p>
        {{store.searchTerm}}
        <p></p>
        <searchCard v-for="card in cards" :key="card" :info="card"/>

</div>
  </div>
</template>
<script> 
import store from "@/store";
import searchCard from '@/components/searchCard.vue';
let cards=[]
cards=[{url:"https://i.insider.com/592f4169b74af41b008b5977?width=700",description:"Audi"}, 
{url:"https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png",description:"BMW"}, 
{url:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349",description:"Golf"},
];

export default {
    name:"Search",
    components: {
        searchCard,
        
    },
     data:function() {
     return { 
     store,
     cards,
  }
  },
  computed: {
      filteredCards() {
          let termin=this.store.searchTerm;
          let newCards=[]
          for (let card of this.cards) {
             if (card.description.indexOf(termin) >=0) {
                 newCards.push(card)
             }
             console.log(newCards);
          }
          return newCards;
      },
  }
};
</script>

