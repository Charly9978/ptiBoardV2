<template>
  <v-container fluid>
    <v-row class="ma-3">
      <v-col cols="3" v-for="(device, index) in devices" :key="index">
        <PtiCard v-bind:device="device" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PtiCard from "@/components/dashboard/ptiCard";

export default {
  components: {
    PtiCard
  },
  layout: "dashboard",

  computed: {
    devices() {
      return this.$store.getters["devices/getDevices"];
    }
  }
};
</script>

<style>
</style>