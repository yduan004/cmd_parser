<template>
    <v-card>
        <v-card-text>
            <v-textarea v-model="this.rawCmd" auto-grow></v-textarea>
            <pre>{{this.mapDiff}}</pre>
        </v-card-text>
    </v-card>
</template>

<script>

export default {

    computed: {
        rawCmd: {
            get(){
                return this.$store.state.rawCmdTwo
            },
            set(newValue){
                this.$store.commit("setRawCmdTwo", newValue)
            }
        },

        mapDiff(){
            return JSON.stringify(this.$store.getters.mapDiffTwo, null, 2)
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