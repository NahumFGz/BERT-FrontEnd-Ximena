<template>
  <div style="width: 100%;">
    <div class="d-flex justify-space-between align-center">
      <h2 class="text-h5 grey--text text--darken-4">Nueva predicción</h2>
    </div>
    <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <v-select
          :items="inputs"
          label="Tipo de entrada*"
          v-model="selected"
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        sm="8"
      >
        <div v-if="selected==''">
          De acuerdo a que tipo de entrada escoja se mostrarán diferentes campos
        </div>
        <div v-if="selected=='ID tweet'">
          <v-row>
            <v-col
            cols="12"
            sm="6">
              <v-text-field
                label="ID Tweet"
                hide-details="auto"
                v-model="idTweet"
              ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            sm="6">
              <v-btn color="primary" 
              dark 
              depressed
              :loading="loadingSearch"
              @click="searchTweet()"
              >
                <v-icon left>search</v-icon>Buscar
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="12"
      >
        <div v-if="text!='' && selected=='ID tweet'">
          <v-textarea
            solo
            counter="244"
            name="input-7-4"
            v-model="text"
            label="El texto del tweet aparecerá aquí"
          ></v-textarea>
          <div align="center">
            <circularChart 
              :percentage="percentage" 
              :label="label"
              color="green"/>
            <v-btn 
              color="primary" 
              dark 
              depressed
              @click="retry()"
              >
                <v-icon left>replay</v-icon>Realizar otra predicción
              </v-btn>
          </div>
          
        </div>
        <div v-if="selected=='Texto'">
          <v-textarea
            solo
            counter="244"
            name="input-7-4"
            v-model="text"
            label="Escriba aquí por favor el texto que desea analizar"
          ></v-textarea>
          <v-btn 
          color="primary" 
          dark 
          :loading="loadingPredict"
          depressed
          @click="predict()"
          >
            <v-icon left>settings</v-icon>Predecir
          </v-btn>
          <br/>
          <div v-if="predictButton" align="center">
            <circularChart 
            :percentage="percentage" 
            :label="label"
            color="green"/>
            <v-btn 
            color="primary" 
            dark 
            depressed
            @click="retry()"
            >
              <v-icon left>replay</v-icon>Realizar otra predicción
            </v-btn>
          </div>
          
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <div v-if="select!=''">

        </div>
        
      </v-col>
    </v-row>
  </v-container>
    
    
  </div>
</template>

<script>
import Router from "@/router/index";
import AudiosService from "@/services/audios.service";
import circularChart from "@/components/circular";

export default {
  name: "AudioPage",
  components: {
    circularChart,
  },
  data: () => ({
    inputs: ["Texto", "ID tweet"],
    selected: "",
    predictButton: false,
    text: "",
    idTweet: "",
    percentage: "10",
    label: "asdf",
    loadingSearch: false,
    loadingPredict: false,
  }),
  methods: {
    goTo(payload) {
      Router.push({ name: payload });
    },
    predict() {
      this.loadingPredict = true;
      AudiosService.predict(this.text)
        .then((r) => {
          this.$toast.success(r.data.message || "Predicción exitosa!");
          this.text = r.data.textprepros;
          this.percentage = Math.round10(r.data.prob*100, -1);
          this.label = r.data.label;
          this.predictButton = true;
        })
        .catch(({ response }) => {
          this.text = "TEXTO DE PRUEBA";
          this.percentage = 1;
          this.label = "PRUEBA";
          this.$toast.error(
            response.data.message || "Error al predecir"
          );
        })
        .finally(() => {
          this.loadingPredict = false;
        });
    },
    retry() {
      this.selected = "";
      this.predictButton = false;
      this.text = "";
      this.idTweet = "";
      this.percentage = "10";
      this.label = "asdf";
      this.loadingSearch = false;
      this.loadingPredict = false;
    },
    searchTweet() {
      this.loadingSearch = true;
      AudiosService.searchTweet(this.idTweet)
        .then((r) => {
          this.$toast.success(r.data.message || "Tweet encontrado y predecido");
          this.text = r.data.textprepros;
          this.percentage = Math.round10(r.data.prob*100, -1);
          this.label = r.label;
        })
        .catch(({ response }) => {
          this.text = "TEXTO DE PRUEBA";
          this.percentage = 1;
          this.label = "PRUEBA";
          this.$toast.error(
            response.data.message || "Error al encontrar el tweet"
          );
        })
        .finally(() => {
          this.loadingSearch = false;
        });
    },
  },
};
</script>

