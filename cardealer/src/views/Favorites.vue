<template>
  <div
    style="margin-top: 15px"
    class="row row-cols-auto g-4 justify-content-center container"
  >
    <searchCard v-for="card in cards" :key="card.id" :info="card" />
  </div>
</template>
<script>
import store from "@/store";
import searchCard from "@/components/searchCard.vue";
import { db } from "@/firebase";

export default {
  name: "Favorites",
  data: function () {
    return {
      store,
      cards: [],
    };
  },

  mounted() {
    this.$root.$on("Favorites", () => {
      this.getPosts();
    });
    this.getPosts();
  },
  methods: {
    getPosts() {
      db.collection("Favoriteposts")
        .where("userId", "==", store.currentUser.id)
        .get()
        .then((query) => {
          this.cards = [];
          if (query.empty) {
            console.log("empty");
            this.message = "You didn't favorite any cars!";
          } else {
            query.forEach((doc) => {
              const data = doc.data();
              let auto1 = {
                userId: store.currentUser.id,
                id: data.id,
                model1: data.model,
                manufacturer1: data.Manufacturer,
                fuel1: data.Fuel,
                enginesize1: data.Enginesize,
                year1: data.Year,
                kilometrage1: data.Kilometrage,
                region1: data.Region,
                price1: data.Price,
                contactnumber1: data.Contactnumber,
                image1: data.Image,
                posted_at: data.posted_at,
              };
              this.cards.push(auto1);
            });
          }
        });
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
