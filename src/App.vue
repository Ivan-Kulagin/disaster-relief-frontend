<template>
  <div id="app">
    <v-app>
      <transition
        :name="$store.state.pageTransition.name"
        :mode="$store.state.pageTransition.mode"
        v-on:after-enter="afterEnter"
        v-on:after-leave="afterLeave"
      >
        <router-view class="transition" />
      </transition>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
$duration: 0.4s;
.transition {
  overflow: hidden;
}
.router-view,
.router-view-back {
  &-enter-active,
  &-leave-active {
    position: fixed;
    width: 100%;
    background: white;
    min-height: 100vh;
    top: 0;
  }
}
// router view
.router-view-enter-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(100%);
}
.router-view-enter-to {
  z-index: 2;
  transform: translateX(0%);
}
.router-view-leave-active {
  z-index: -1;
}
.router-view-leave-to {
  z-index: -1;
}
// router view back

.router-view-back-leave-active {
  transition: transform $duration ease-in-out;
  z-index: 2;
  transform: translateX(0%);
}
.router-view-back-leave-to {
  z-index: 2;
  transform: translateX(100%);
}
</style>

<script>
import Store from "./store/index";
import { instance } from "@/services/_api";

export default {
  name: "App",
  methods: {
    afterEnter: () => {
      window.scrollTo(0, 0);
    },
    afterLeave: () => {
      Store.commit("setPageTransition", "default");
    },
  },
  mounted() {
    if (this.$store.getters.authToken) {
      instance.defaults.headers.common["Authorization"] =
        "Bearer " + this.$store.getters.authToken;
    } else {
      instance.defaults.headers.common["Authorization"] = "";
    }
  },
};
</script>
