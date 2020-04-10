<template>
<v-container>
    <v-row>
        <v-col cols="7">
            
        </v-col>
        <v-col cols="5">
            <v-row>
                <v-col cols="12">
                    <DeviceCardAlarm></DeviceCardAlarm> 
                </v-col>
                <v-col cols="12">
                    <DeviceCardStatut></DeviceCardStatut> 
                </v-col>
                <v-col cols="12">

                </v-col>

            </v-row>
        </v-col>
    </v-row>
    
</v-container>
  
</template>

<script>
import DeviceCardStatut from '~/components/devices/DeviceCardStatut'
import DeviceCardAlarm from '~/components/devices/DeviceCardAlarm'
export default {
    components:{
        DeviceCardStatut,
        DeviceCardAlarm
    },

    layout:'dashboard',

    async asyncData ({params,app}) {
        const querySnapshot = await app.$fireStore
        .collection('Devices')
        .doc(params.id)
        .collection('trame')
        .orderBy('date','desc')
        .limit(60)
        .get()

        return{trames: querySnapshot.docs.map(snapShot=>snapShot.data()),id: params.id}
    }

}
</script>

<style>

</style>