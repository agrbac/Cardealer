<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/cardealer.jpg"
            alt=""
            width="160"
            height="60"
            class="d-inline-block align-text-top"
          />
        </a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li v-if="store.currentUser" class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <router-link to="/search" class="nav-link">Search</router-link>
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <router-link to="/sell car" class="nav-link"
                >Sell car</router-link
              >
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <router-link to="/my listings" class="nav-link"
                >My listings</router-link
              >
            </li>
            <li v-if="store.currentUser" class="nav-item">
              <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>
<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log("****", user.email);
    store.currentUser = user.email;
  } else {
    console.log("no user");
    store.currentUser = null;
    if (router.name !== "Login") {
      router.push({ name: "Login" });
    }
  }
});
export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #ff0000;
    }
  }
}
.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgb(50, 50, 50) !important;
}
</style>
