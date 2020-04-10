<template>
<div>
  <v-card >
      <v-toolbar v-if="device.lostConnection" color="error">
          <v-icon small class="mr-3">mdi-alert</v-icon>
          <v-toolbar-title class="subtitle-1"> Perte de connection depuis le {{device.lastConnectionDate.toDate().toLocaleString()}}</v-toolbar-title>
          <v-spacer></v-spacer>
       <v-btn icon small v-if="bell" @click="bellOff">
           <v-icon small>mdi-bell-ring</v-icon>
       </v-btn>
       <v-btn icon small disabled v-else>
           <v-icon small>mdi-bell-off</v-icon>
       </v-btn>
      </v-toolbar>

   <v-toolbar v-else-if="device.alarm" :color="device.alarm.type='lowBattery'?'warning':'error'">
       <v-icon small class="mr-3">mdi-alert</v-icon>
       <v-toolbar-title class="subtitle-1"> Alarme: {{device.alarm.type}}</v-toolbar-title>
       <v-spacer></v-spacer> 
       <v-btn icon small v-if="bell" @click="bellOff">
           <v-icon small>mdi-bell-ring</v-icon>
       </v-btn>
       <v-btn icon small disabled v-else>
           <v-icon small>mdi-bell-off</v-icon>
       </v-btn>
       <v-btn icon small @click="openValidation = true">
           <v-icon small>mdi-close</v-icon>
       </v-btn>    
   </v-toolbar>

      
  </v-card>
    <TheValidation :text="textValidation" :openValidation="openValidation" v-on:yes="acquitAlarm" v-on:no="openValidation=false"></TheValidation>
  </div>
</template>

<script>
import TheValidation from '~/components/utilities/TheValidation'

export default {

    data(){
        return{
            textValidation: "Attention, êtes-vous sûr de vouloir acquitter définitivement cette alarme?",
            openValidation: false
        }
    },

    computed:{
        
        device(){
            return this.$store.getters['devices/getDeviceById'](this.$route.params.id)
        },

        bell(){
            return this.$store.state.alarm
        }
    },

    methods:{

        bellOff(){
            this.$store.getters.setAlarmOff
        },

        async acquitAlarm(){
            this.openValidation = false
            await this.$fireStore.collection('Devices').doc(this.$route.params.id).update({alarm:{type:null,date:null}})
        }
    }

}
</script>

<style>

</style>