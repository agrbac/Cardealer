<template>
  <div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm"></div>
      <div class="col-sm"></div>

      <p></p>
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

      <searchCard v-for="card in filteredCards" :key="card.id" :info="card" />
    </div>
  </div>
</template>
<script>
import store from "@/store";
import searchCard from "@/components/searchCard.vue";
import { db } from "@/firebase";

export default {
  name: "Home",
  data: function () {
    return {
      cards: [],
      store,
    };
  },
  mounted() {
    this.getPosts();
    console.log("kartice", this.cards);
    console.log(store.currentUser);
  },
  methods: {
    getPosts() {
      console.log("Loading posts");
      db.collection("listings")
        .limit(10)
        .get()
        .then((results) => {
          results.forEach((doc) => {
            let id = doc.id;
            let data = doc.data();
            //console.log("testpodataka", data);

            let auto = {
              id: doc.id,
              model1: data.model1,
              manufacturer1: data.Manufacturer1,
              fuel1: data.Fuel1,
              enginesize1: data.Enginesize1,
              year1: data.Year1,
              kilometrage1: data.Kilometrage1,
              region1: data.Region1,
              price1: data.Price1,
              contactnumber1: data.Contactnumber1,
              image1: data.Image1,
              email: data.email,
              posted_at: data.posted_at,
            };
            this.cards.push(auto);
          });
        });
    },
  },

  computed: {
    filteredCards() {
      let termin = this.store.searchTerm.toLowerCase();
      let newCards = [];
      for (let card of this.cards) {
        if (
          card.manufacturer1.toLowerCase().indexOf(termin) >= 0 ||
          card.model1.toLowerCase().indexOf(termin) >= 0
        ) {
          newCards.push(card);
        }
        console.log("nove kartice", newCards);
      }
      return newCards;
    },
  },

  components: {
    searchCard,
  },
};
</script>
<style>
.container {
  min-height: calc(100vh - 133.2px);
}
</style>
