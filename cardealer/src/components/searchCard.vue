<template>
  <div class="card text-center">
    <div class="card-header">{{ info.manufacturer1 }} {{ info.model1 }}</div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.image1" />
    </div>
    <div class="card-footer">
      {{ info.contactnumber1 }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "searchCard",
};
</script>
<style>
.card-header {
  font-style: italic;
  font-size: 120%;
  color: rgb(255, 255, 255);
  background: rgb(64, 64, 64);
}

.card-footer {
  font-size: 120%;
  color: rgb(255, 255, 255);
  background: rgb(64, 64, 64);
}

.card-body {
  width: 100%;
  height: 100%;
  background: rgb(64, 64, 64);
}
</style>
