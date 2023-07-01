<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <ParserToolOne/>
      </v-col>
      <v-col cols="6">
        <ParserToolTwo/>
      </v-col>
    </v-row>
    <v-row justify="center">
        <color_intersect/>
      </v-row>
  </v-container>
</template>

<script>
import ParserToolOne from './views/ParserToolOne.vue'
import ParserToolTwo from './views/ParserToolTwo.vue'
import color_intersect from './views/color_intersect.vue'

export default {
  name: 'App',
  components: {
    ParserToolOne, ParserToolTwo, color_intersect
  },
  data(){
    return {
      test: "hello world"
    }
  },
  computed: {
    intersect(){
      return JSON.stringify(this.$store.getters.mapIntersect, null, 2)
    }
  }
}
</script>

<style>
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>