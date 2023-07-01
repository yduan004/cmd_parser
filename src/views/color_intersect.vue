<template>
    <v-card>
        <v-card-text>
          <pre v-for="(value, key) in mapIntersect" v-bind:class="getClass(key, value)">
            {{ key }}: {{ value }}
          </pre>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    computed: {
        mapIntersect() {
            return this.$store.getters.mapIntersect;
        },
        greyKeys() {
            return ["events-log-file", "output-directory", "output-file-prefix"];
        },
    },
    methods: {
        getClass(key, value) {
            return {
                "green-text": value[0] === value[1],
                "red-text": value[0] !== value[1],
                "grey-text": this.greyKeys.includes(key),
            };
        },
    },
};
</script>

<style>
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
.green-text {
  color: green;
}
.red-text {
  color: red;
}
.grey-text {
  color: grey;
}
</style>