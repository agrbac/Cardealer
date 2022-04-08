<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          :src="info.image1"
          style="height: 100%; width: 100%"
          border="5px"
        />
      </div>

      <div class="flip-card-back">
        <br />

        <div
          style="
            display: flex;
            justify-content: center;
            font-size: 24px;
            gap: 10px;
          "
        >
          <h2>{{ info.manufacturer1 }} {{ info.model1 }}</h2>
          <i class="bi bi-star" v-if="save" @click="addToFavorites()"></i>
          <i class="bi bi-star-fill" v-if="remove" @click="removeFromFav()">
          </i>
        </div>
        <br />
        <p>Engine: {{ info.enginesize1 }}, {{ info.fuel1 }}</p>
        <p>Year of manufacture: {{ info.year1 }}</p>
        <p>Mileage: {{ info.kilometrage1 }}</p>
        <p>Vehicle location: {{ info.region1 }}</p>
        <p>Contact number: {{ info.contactnumber1 }}</p>

        <p>
          Price: <strong>{{ info.price1 }}Kn</strong> ~
          <strong>{{ (info.price1 / 7.5).toFixed(2) }}€</strong>
        </p>
        <p>Posted {{ postedFromNow }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { db } from "@/firebase";
import store from "@/store";

export default {
  props: ["info"],
  name: "searchCard",
  data() {
    return {
      save: false,
      remove: false,
      delitingId: "",
    };
  },
  computed: {
    postedFromNow() {
      return moment(this.info.posted_at).fromNow();
    },
  },

  mounted() {
    this.favbutton();
  },

  methods: {
    favbutton() {
      var checkpost = db.collection("Favoriteposts");
      checkpost
        .where("userId", "==", store.currentUser.id)
        .where("id", "==", this.info.id)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            this.save = true;
            console.log("This add is not on your favorite list.");
          }
          querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            this.remove = true;
            this.delitingId = doc.id;
          });
        });
    },

    addToFavorites() {
      db.collection("Favoriteposts")
        .add({
          userId: store.currentUser.id,
          id: this.info.id,
          model: this.info.model1,
          Manufacturer: this.info.manufacturer1,
          Fuel: this.info.fuel1,
          Enginesize: this.info.enginesize1,
          Year: this.info.year1,
          Kilometrage: this.info.kilometrage1,
          Region: this.info.region1,
          Price: this.info.price1,
          Contactnumber: this.info.contactnumber1,
          Image: this.info.image1,
          email: store.currentUser,
          posted_at: this.info.posted_at,
        })
        .then((doc) => {
          console.log("Spremljeno", doc.id);
          this.save = false;
          this.favbutton();
        })
        .catch((e) => {
          console.error(e);
        });
    },

    removeFromFav() {
      var delitepost = db.collection("Favoriteposts");
      delitepost
        .doc(this.delitingId)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.remove = false;
          this.favbutton();
          this.$root.$emit("Favorites");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
  background-color: transparent;
  width: 424px;
  height: 424px;
  perspective: 1000px;
  margin-bottom: 20px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: rgb(64, 64, 64);
  color: white;
  transform: rotateY(180deg);
}

.bi-star-fill {
  font-size: 25px;
  cursor: pointer;
}

.bi-star:hover {
  cursor: pointer;
}
</style>
