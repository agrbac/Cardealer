<template>
  <div class="container">
    <h3 class="p-3 text-center">Your listings</h3>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Model</th>
          <th scope="col">Manufacturer</th>
          <th scope="col">Fuel</th>
          <th scope="col">Engine size</th>
          <th scope="col">Year</th>
          <th scope="col">Kilometrage</th>
          <th scope="col">Region</th>
          <th scope="col">Contact number</th>
          <th scope="col">Image</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.model1 }}</td>
          <td>{{ user.manufacturer1 }}</td>
          <td>{{ user.fuel1 }}</td>
          <td>{{ user.enginesize1 }}</td>
          <td>{{ user.year1 }}</td>
          <td>{{ user.kilometrage1 }}</td>
          <td>{{ user.region1 }}</td>
          <td>{{ user.contactnumber1 }}</td>
          <td><img :src="user.image1" height="200" /></td>
          <td><i class="bi bi-trash3-fill" @click="removeCar(user)"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
console.log("test1");

import UploadImages from "vue-upload-drop-images";
import store from "@/store";
import { db } from "@/firebase";

export default {
  mounted() {
    console.log("testpodataka");

    this.getPosts();
  },

  name: "MyListings",
  data() {
    return {
      users: [],
    };
  },

  components: {
    UploadImages,
  },

  methods: {
    getPosts() {
      console.log("Loading posts");
      db.collection("listings")
        .where("email", "==", store.currentUser)
        .limit(10)
        .get()
        .then((results) => {
          results.forEach((doc) => {
            let id = doc.id;
            let data = doc.data();
            console.log("testpodataka", data);

            let auto = {
              id: doc.id,
              model1: data.model1,
              manufacturer1: data.Manufacturer1,
              fuel1: data.Fuel1,
              enginesize1: data.Enginesize1,
              year1: data.Year1,
              kilometrage1: data.Kilometrage1,
              region1: data.Region1,
              contactnumber1: data.Contactnumber1,
              image1: data.Image1,
            };
            this.users.push(auto);
          });
        });
    },

    removeCar(user) {
      var delitepost = db.collection("listings");
      delitepost
        .doc(user.id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          (this.users = []), this.getPosts();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>

<style>
.container {
  min-height: calc(100vh - 133.2px);
}

table td {
  vertical-align: middle;
}

.bi-trash3-fill {
  font-size: 25px;
  cursor: pointer;
}

.bi-trash3-fill:hover {
  color: red;
}
</style>
