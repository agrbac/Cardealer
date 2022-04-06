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
          <i class="bi bi-star-fill"></i>
        </div>
        <br />
        <p>Engine: {{ info.enginesize1 }}, {{ info.fuel1 }}</p>
        <p>Year of manufacture: {{ info.year1 }}</p>
        <p>Mileage: {{ info.kilometrage1 }}</p>
        <p>Vehicle location: {{ info.region1 }}</p>
        <p>Contact number: {{ info.contactnumber1 }}</p>
        <p>e-mail: {{ info.email }}</p>
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

export default {
  props: ["info"],
  name: "searchCard",
  computed: {
    postedFromNow() {
      return moment(this.info.posted_at).fromNow();
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

.bi-star-fill:hover {
  color: rgb(255, 251, 0);
}
</style>
