<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <p></p>
      <form>
        <input
          v-model="store.searchTerm"
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <p></p>
      <p></p>
      <searchCard v-for="card in filteredCards" :key="card.url" :info="card" />
    </div>
  </div>
</template>
<script>
import store from "@/store";
import searchCard from "@/components/searchCard.vue";
let cards = [];
cards = [
  {
    url: "https://www.motortrend.com/uploads/sites/5/2020/12/2021-Audi-R8-Panther-Edition-24.jpg?fit=around%7C875:492.1875",
    description: "Audi R8",
  },
  {
    url: "https://cdn.audi.hr/media/GalleryThumbnails_Slider_Image_Component/67267-680528-slider-417955/dh-1459-a9ad28/a31ce513/1627904235/1920x1080-audi-rs-5-coupe-my2021-1513-oe.jpg",
    description: "Audi RS 5",
  },
  {
    url: "https://carsalesbase.com/wp-content/uploads/2019/03/BMW_3_series-auto-sales-statistics-Europe.jpg",
    description: "BMW 3",
  },
  {
    url: "https://www.tuningblog.eu/wp-content/uploads/2019/09/BB-VW-Golf-VII-GTI-TCR-Tuning-2019-3.jpg",
    description: "VW Golf 7 GTI",
  },
  {
    url: "https://cdn.motor1.com/images/mgl/BMzwe/s1/2020-vw-golf-8-by-jms.jpg",
    description: "VW Golf 8",
  },
  {
    url: "https://storage.glasistre.hr/MediaServer/Photos/Download/185208?Format=1",
    description: "BMW 5",
  },
];

export default {
  name: "Search",
  data: function () {
    return {
      cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      let newCards = [];
      for (let card of this.cards) {
        if (card.description.indexOf(termin) >= 0) {
          newCards.push(card);
        }
        console.log(newCards);
      }
      return newCards;
    },
  },
  components: {
    searchCard,
  },
};
</script>

