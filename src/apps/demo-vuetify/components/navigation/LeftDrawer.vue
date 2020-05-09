<template>
  <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
    <v-list v-for="(item,i) in menu" :key="i">
      <v-list-group v-if="item.subMenu" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </template>

        <v-list-group v-for="(subItem,i) in item.subMenu" :key="i" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{subItem.title}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(subsubItem, i) in subItem.subMenu" :key="i" link>
            <v-list-item-title v-text="subsubItem.title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="subsubItem.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>

      <v-list-item v-else>
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
      

<script>
// import { EventBus } from "../../vuetify-event-bus/eventBus";
export default {
  name: "navigation-drawer",
  data: () => ({
    drawer: null,
    menu: [
      {
        title: "Home",
        icon: "mdi-home"
      },
      {
        title: "User",
        icon: "mdi-account-circle",
        subMenu: [
          {
            title: "Admin",
            icon: "",
            subMenu: [
              { title: "Management", icon: "mdi-account-supervisor-outline" },
              { title: "Settings", icon: "mdi-cog" }
            ]
          },
          {
            title: "Action",
            icon: "",
            subMenu: [
              { title: "Create", icon: "mdi-plus" },
              { title: "Read", icon: "mdi-file" },
              { title: "Update", icon: "mdi-clock-outline" },
              { title: "Delete", icon: "mdi-trash-can-outline" }
            ]
          }
        ]
      }
    ]
  }),
  created: function() {
    // console.log(this.$eventBus);

    this.$eventBus.$on("toggleDrawer", toggle => {
      this.drawer = toggle;
    });
  }
};
</script>

<style>
</style>