<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/cardealer.svg"
            alt=""
            width="160"
            height="60"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
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
  background: #b6b6b6;
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

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>
