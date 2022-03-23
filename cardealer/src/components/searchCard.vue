<template>
  <div class="card text-center">
    <div class="card-header">{{ info.manufacturer1 }} {{ info.model1 }}</div>
    <div class="card-body p-0">
      <img class="card-img-top" :src="info.image1" />
    </div>
    <div class="card-footer text-muted">
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
