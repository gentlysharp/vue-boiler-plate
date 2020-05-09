<template>
  <div>
    <section id="about-me">
      <v-card>
        <v-card-text class="display-2">Main Page</v-card-text>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="300"></v-img>
      </v-card>

      <!-- <div class="py-12"></div> -->
      <v-container class="text-center">
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="12" sm="6" md="4">
            <v-card tile>
              <v-img src="https://picsum.photos/510/300?random" />
            </v-card>
          </v-col>
        </v-row>

        <!-- <v-row v-for="n in 2" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
          <v-col v-for="k in n + 1" :key="k">
            <v-card class="pa-2" outlined tile>
              <v-img src="https://picsum.photos/510/300?random" />
            </v-card>
          </v-col>
        </v-row>-->
      </v-container>

      <!-- <div class="py-12"></div> -->
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>