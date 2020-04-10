<template>
  <div>
    <v-card>

      <v-toolbar class="px-3" color="primary" dark>
        <v-toolbar-title>Information sur le bip {{device.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.prevent="openModal = true">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Téléphone du bip</v-list-item-title>
            <v-list-item-subtitle>{{device.telBip}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-group v-if="device.user.name">
          <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Nom de l'utilisateur</v-list-item-title>
            <v-list-item-subtitle>{{device.user.name}}</v-list-item-subtitle>
          </v-list-item-content>
          </template>
          <v-list-item dense class="ml-2 mt-n3">
          <v-list-item-content>
            <v-list-item-title>Entreprise</v-list-item-title>
            <v-list-item-subtitle>{{device.user.company}}</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item dense class="ml-2 mt-n3">
          <v-list-item-content>
            <v-list-item-title>Téléphone</v-list-item-title>
            <v-list-item-subtitle>{{device.user.tel}}</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item dense class="ml-2 mt-n3">
          <v-list-item-content>
            <v-list-item-title>Zone d'utilisation</v-list-item-title>
            <v-list-item-subtitle>{{device.user.useArea}}</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item dense class="ml-2 mt-n3">
          <v-list-item-content>
            <v-list-item-title>Date de début d'utilisation</v-list-item-title>
            <v-list-item-subtitle>{{device.user.date.toDate().toLocaleString()}}</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item v-else>
          <v-list-item-content>
            <v-list-item-title>Zone d'utilisation</v-list-item-title>
            <v-list-item-subtitle>{{device.useArea}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Situation</v-list-item-title>
            <v-list-item-subtitle>{{device.inCharge?'En charge':"En cours d'utilisation"}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{`Charge: ${device.levelBattery}%`}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <DeviceCardStatutForm :openModal='openModal' v-on:closeModal="openModal=false"></DeviceCardStatutForm>
  </div>
</template>

<script>
import DeviceCardStatutForm from "@/components/devices/DeviceCardStatutForm";

export default {
  components: {
    DeviceCardStatutForm
  },

  computed:{
    device(){
      return this.$store.getters['devices/getDeviceById'](this.$route.params.id)
    }
  },

  data() {
    return {
      openModal: false
    };
  }
};
</script>

<style>
</style>