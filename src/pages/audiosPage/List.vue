<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <h2 class="text-h5 grey--text text--darken-4">Predicción</h2>
      <v-btn color="primary" dark depressed @click="toAudios()">
        <v-icon left>mdi-plus</v-icon>Nuevo
      </v-btn>
    </div>
    <p>
      Esta sección contiene las predicciones realizadas previamente. Si desea 
      agregar una nueva dar click al botón "Nuevo".
    </p>
    <div class="mt-5">

      <div>
        <LoadingContentLinear v-if="audiosLoading" />
        <div v-else>
          <div v-if="true">
            <div>
              <transition name="fade">
                <div>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      xl="3"
                      v-for="item in items"
                      :key="item.id"
                    >
                      <v-card
                        outlined
                        class="cfe-h-full d-flex flex-column justify-space-between rounded-lg"
                      >
                        <v-card-text class="cfe-h-full">
                          <div
                            class="d-flex justify-space-between align-center"
                          >
                            <div class="text-h6 grey--text text--darken-3">
                              <span>
                                <v-icon left>{{item.icon}}</v-icon>
                                {{item.status}}
                              </span>
                            </div>
                            <v-spacer></v-spacer>
                          </div>
                          <div class="text--primary mt-3">
                            
                            <v-row no-gutters class="mt-3 grey--text text-subtitle-2">
                              {{item.description}}
                            </v-row>
                          </div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-progress-linear
                            height="15"
                            color="teal"
                            buffer-value="0"
                            :value="item.percentage"
                            stream
                          >
                          <template v-slot:default="{}">
                            <strong>{{ item.percentage }}%</strong>
                          </template>
                          </v-progress-linear>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </transition>
            </div>
          </div>
          <div v-else>
            <v-row>
              <v-col class="not-available text-center">
                <img
                  height="150"
                  src="@/assets/images/no-data.svg"
                  alt="Validación Digito"
                  class="not-available__img"
                />
                <div class="not-available__text">
                  <span
                    >La información <strong>no está disponible</strong> en este
                    momento</span
                  >
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import AudiosService from "@/services/audios.service";
import Router from "@/router/index";
import LoadingContentLinear from "@/components/LoadingContentLinear";

export default {
  name: "CasesList",
  components: {
    LoadingContentLinear,
  },
  data() {
    return {
      items: [
        {
          id: 1, 
          icon: "warning",
          status: "violento", 
          percentage: 50,
          description: "sdfalsdjfslakdjlsa"
        },
        {
          id: 2, 
          icon: "star",
          status: "no violento", 
          percentage: 50,
          description: "sdfalsdjfslakdjlsa"
        }
      ],
      audios: [],
      audiosLoading: false,
    };
  },
  mounted() {
    this.getAudios(this.query);
  },
  methods: {
    toAudios() {
      Router.push({ name: "nuevo"});
    },
  },
};
</script>

