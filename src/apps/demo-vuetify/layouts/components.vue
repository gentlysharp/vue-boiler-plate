<template>
  <v-app id="inspire">
    <LeftDrawer />
    <HeaderBar />
    <v-content>
      <MainPage />
    </v-content>

    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <Dialog />
  </v-app>
</template>

<script>
import HeaderBar from "../components/bar/HeaderBar";
import Dialog from "../components/dialog/Dialog";
import LeftDrawer from "../components/navigation/LeftDrawer";
import MainPage from "../components/page/MainPage";

export default {
  components: {
    HeaderBar,
    Dialog,
    LeftDrawer,
    MainPage
  },
  props: {
    source: String
  },
  data: () => ({})
};
</script>
