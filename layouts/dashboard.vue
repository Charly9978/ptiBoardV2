<template>
  <v-app id="inspire">
        <audio autoplay loop v-if="alarm">
  <source src="@/assets/9248.ogg" type="audio/ogg">
</audio>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/dashboard" nuxt>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Tableau de bord Bips PTI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!alarm" icon class="mr-4" disabled>
        <v-icon>mdi-bell-off</v-icon>
      </v-btn>
      <v-btn v-else icon class="mr-4 error" @click="bellOff">
        <v-icon>mdi-bell-ring</v-icon>
      </v-btn>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn class="mr-3" icon v-on="on">
            <v-avatar>
              <img v-bind:src="photoUrl" />
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-subheader>{{ userName }}</v-subheader>
          <v-list-item @click="logout">
            <v-list-item-title>Déconnection</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
        <nuxt />
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  computed: {
    photoUrl() {
      return this.$store.state.auth.user.photoURL;
    },
    userName() {
      return this.$store.state.auth.user.displayName;
    },
    alarm() {
      return this.$store.state.alarm
    }
  },

  data: () => ({
    drawer: false
  }),

  methods:{
    logout(){
      this.$fireAuth.signOut()
      this.$store.dispatch('devices/unbindDevices')
      this.$router.push('/')
    },

    bellOff(){
      this.$store.commit('setAlarmOff')
    }
  },

  async mounted() {
    try {
      await this.$store.dispatch("devices/bindDevices");
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
