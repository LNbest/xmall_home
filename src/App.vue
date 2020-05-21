<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Foot></Foot>
  </v-app>
</template>

<script>
import Foot from "./views/foot/Foot";

export default {
  name: "App",

  components: {
    Foot
  },

  data: () => ({
    //
  })
};
</script>
