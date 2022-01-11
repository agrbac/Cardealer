<template>
  <div class="about">
    <h1>Sign up</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputUsername">Username</label>
              <input
                type="username"
                v-model="username"
                class="form-control"
                id="exampleInputUsername"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter
email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <small id="passwordHelp" class="form-text text-muted"
                >Password should be at least 6 characters</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Repeat password</label>
              <input
                type="password"
                v-model="passwordRepeat"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import firebase from "@/firebase";
export default {
  name: "signup",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      if (this.password != this.passwordRepeat) {
        alert("Confirm password not match");
        return;

        if ((this.username, this.email == null)) {
          alert("cant be blank");
          return;
        }
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function () {
            console.log("uspjesna registracija");
          })
          .catch(function (error) {
            console.error("greska", error);
          });
        console.log("nastavak");
        alert("uspjesna registracija");
      }
    },
  },
};
</script>



