<template>
  <div>
      <h3>
          {{label}}
      </h3>
            
        <v-spacer></v-spacer>
        <v-progress-circular
        :rotate="-90"
        :size="120"
        :width="10"
        :value="percentage"
        :color="color"
        >
        {{percentage}}
        </v-progress-circular>
    
    <div>Precisión: {{percentage}}</div>
      
  </div>
</template>

<script>
export default {
  name: "circularChart",
  props: ["label", "percentage", "color"]
};
</script>