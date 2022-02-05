<template>
  <div style="width: 100%; height: 100%;">
    <h2 class="text-h5 grey--text text--darken-4">Resultados</h2>
    <br>
    <div>
      Total de mensajes: {{total}}
    </div>
    <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        align="center"
      >
        <circularChart 
        :percentage="percentage1" 
        :label="label1"
        color="green"/>
        <strong>V: </strong> {{v1}}
      </v-col>
      <v-col
        cols="12"
        sm="6"
        align="center"
      >
        <circularChart 
        :percentage="percentage2" 
        :label="label2"
        color="yellow"/>
        <strong>V: </strong> {{v2}}
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import circularChart from "@/components/circular";
export default {
  name: "TutorialPage",
  components: {
    circularChart,
  },
  data() {
    return { 
      total: 100,
      percentage1: 60,
      percentage2: 86,
      label1: "Violento",
      label2: "No Violento",
      v1: 100,
      v2: 200,
    }
  }
};
</script>

<style>
</style>
