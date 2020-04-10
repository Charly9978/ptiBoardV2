<template>
  <v-row justify="center">
    <v-dialog max-width="450" v-model="openModal">
      <v-card>
        <v-card-title>
          <span class="headline">Ajouter un utilisateur du bip</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field label="Nom de l'utilisateur" v-model="user.name"></v-text-field>
            <v-text-field label="Entreprise" v-model="user.company"></v-text-field>
            <v-text-field label="Téléphone" v-model="user.tel"></v-text-field>
            <v-text-field label="Zone d'utilisation" v-model="user.useArea"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="reset">Annuler</v-btn>
          <v-btn color="green darken-1" text @click="sendUser">Enregistrer</v-btn>
          <v-btn color="green darken-1" text @click="deleteUser">Effacer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    openModal: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      user: {
        company: null,
        date: null,
        name: null,
        tel: null,
        useArea: null
      }
    };
  },

  methods: {
    getUser() {
      this.user = {
        ...this.$store.getters["devices/getDeviceById"](this.$route.params.id)
          .user
      };
    },

    reset() {
      this.$refs.form.reset();
      this.$emit("closeModal");
    },
    async sendUser() {
      this.user.date = new this.$fireStoreObj.Timestamp.now();
      await this.$fireStore
        .collection("Devices")
        .doc(this.$route.params.id)
        .update({ user: { ...this.user } });
      this.reset();
    },
    async deleteUser() {
      const user = {
        company: null,
        date: null,
        name: null,
        tel: null,
        useArea: null
      };
      await this.$fireStore
        .collection("Devices")
        .doc(this.$route.params.id)
        .update({ user: { ...user } });
      this.$emit("closeModal");
    }
  },

  watch: {
    openModal: function(newValue) {
      newValue == true ? this.getUser() : null;
    }
  }
};
</script>

<style>
</style>