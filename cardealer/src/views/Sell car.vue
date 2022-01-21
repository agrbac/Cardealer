<template>
  <div class="about">
    <h1>Sell car</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <p></p>
          <form @submit.prevent="addListing" class="form-inline mb-5">
            <div class="form-group">
              <label for="exampleModel1">Model</label>
              <input
                type="model"
                v-model="model"
                class="form-control"
                id="exampleInputModel1"
                placeholder="Enter model"
              />

              <p></p>
            </div>
            <div class="form-group">
              <label for="exampleInputManufacturer1">Manufacturer</label>
              <input
                v-model="Manufacturer"
                type="Manufacturer"
                class="form-control"
                id="exampleInputManufacturer1"
                placeholder="Manufacturer"
              />
            </div>
            <p></p>
            <div class="form-group">
              <label for="exampleFuel1">Fuel</label>
              <input
                type="Fuel"
                v-model="Fuel"
                class="form-control"
                id="exampleInputFuel1"
                placeholder="Enter Fuel"
              />

              <p></p>
            </div>
            <div class="form-group">
              <label for="exampleEngine size1">Engine size</label>
              <input
                type="Engine size"
                v-model="Enginesize"
                class="form-control"
                id="exampleInputEngine size1"
                placeholder="Enter Engine size"
              />

              <p></p>
            </div>
            <div class="form-group">
              <label for="exampleYear1">Year</label>
              <input
                type="Year"
                v-model="Year"
                class="form-control"
                id="exampleInputYear1"
                placeholder="Enter Year"
              />

              <p></p>
            </div>
            <div class="form-group">
              <label for="exampleModel1">Kilometrage</label>
              <input
                type="Kilometrage"
                v-model="Kilometrage"
                class="form-control"
                id="exampleInputKilometrage1"
                placeholder="Enter Kilometrage"
              />

              <p></p>
            </div>
            <div class="form-group">
              <label for="exampleRegion1">Region</label>
              <input
                type="Region"
                v-model="Region"
                class="form-control"
                id="exampleInputRegion1"
                placeholder="Enter Region"
              />

              <p></p>
            </div>
            <div class="form-group">
              <label for="exampleContact number1">Contact number</label>
              <input
                type="Contact number"
                v-model="Contactnumber"
                class="form-control"
                id="exampleInputContact number1"
                placeholder="Enter Contact number"
              />

              <p></p>
            </div>
            <div>
              <label for="exampleImage1">Image</label>
              <UploadImages
                v-model="Image"
                max="1"
                maxError="Max files exceed"
                uploadMsg="upload product images"
                fileError="images files only accepted"
              />
            </div>
            <p></p>
            <button type="button" @click="addListing()" class="btn btn-primary">
              Add
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
import UploadImages from "vue-upload-drop-images";
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "sellcar",
  data: function () {
    return {
      model: "",
      Manufacturer: "",
      Fuel: "",
      Enginesize: "",
      Year: "",
      Kilometrage: "",
      Region: "",
      Contactnumber: "",
      Image: "",
    };
  },
  components: {
    UploadImages,
  },

  methods: {
    addListing() {
      const model = this.model;
      const Manufacturer = this.Manufacturer;
      const Fuel = this.Fuel;
      const Enginesize = this.Enginesize;
      const Year = this.Year;
      const Kilometrage = this.Kilometrage;
      const Region = this.Region;
      const Contactnumber = this.Contactnumber;
      const Image = this.Image;
      if (
        (this.model == 0,
        this.Manufacturer == 0,
        this.Fuel == 0,
        this.Enginesize == 0,
        this.Year == 0,
        this.Kilometrage == 0,
        this.Region == 0,
        this.Contactnumber == 0)
      ) {
        alert("Please fill in all the blank spaces");
        return;
      } else {
        db.collection("listings")
          .add({
            model1: model,
            Manufacturer1: Manufacturer,
            Fuel1: Fuel,
            Enginesize1: Enginesize,
            Year1: Year,
            Kilometrage1: Kilometrage,
            Region1: Region,
            Contactnumber1: Contactnumber,
            Image1: Image,
            email: store.currentUser,
            posted_at: Date.now(),
          })

          .then((doc) => {
            alert("Succesfully added");

            this.model = "";
            this.Manufacturer = "";
            this.Fuel = "";
            this.Enginesize = "";
            this.Year = "";
            this.Kilometrage = "";
            this.Region = "";
            this.Contactnumber = "";
            this.Image = "";
          });
      }
    },
  },
};
</script>