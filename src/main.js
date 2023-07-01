import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createStore } from 'vuex'

function parseCmd(rawCmd){

    if (rawCmd != ""){
                
        let keyValueMap = {}
        let flags = []

        rawCmd.split(" ").forEach((item) => {
            if (item.includes("=")){
                let keyValuePair = item.split("=")
                keyValueMap[keyValuePair[0].replace("--", "")] = keyValuePair[1]
            }else{
                flags.push(item)
            }
        })

        let sortedKeyValueMap = {}
        Object.keys(keyValueMap).sort().forEach((i) => sortedKeyValueMap[i] = keyValueMap[i])

        return {
            "map": sortedKeyValueMap,
            "flags": flags
        }

    }

    return {
        "map": {},
        "flags": []
    }
}

const store = createStore({
    state: {
        rawCmdOne: "/opt/edico/bin/dragen --tumor-fastq-list=/staging/tmp/suite_def/prod/10068050/001__noise_file_Tumor_normal_hg38_alt_masked_cnv_hla_rna_v2/06_SIMPLE_copy_to_local/illumina-isi07/scratch/dragen_datasets/repo/somatic_snv/cancer_data/NYGC/TN/fastq/HCC1143_80x_tumor/HCC1143_80x_tumor.fastq_list.lena.csv --tumor-fastq-list-sample-id=HCC-1143-NovaSeq_80 --fastq-list=/staging/tmp/suite_def/prod/10068050/001__noise_file_Tumor_normal_hg38_alt_masked_cnv_hla_rna_v2/06_SIMPLE_copy_to_local/illumina-isi07/scratch/dragen_datasets/repo/somatic_snv/cancer_data/NYGC/TN/fastq/HCC1143_40x_normal/HCC1143_40x_normal.fastq_list.lena.csv --fastq-list-sample-id=HCC-1143BL-NovaSeq_40 --ref-dir=/staging/tmp/suite_def/illumina-isi07/scratch/dragen_datasets/data/vault/reference_genomes/Hsapiens/hg38_alt_masked+cnv+hla+rna_v2/DRAGEN/9 --enable-performance-monitoring=true --output-file-prefix=run_dragen-NYGC_HCC1143_NovaSeq_80x40x_tumor-suite10068050-stage1 --events-log-file=/staging/tmp/suite_def/prod/10068050/001__noise_file_Tumor_normal_hg38_alt_masked_cnv_hla_rna_v2/_application_debug/dragen_events.csv --output-directory=/staging/tmp/suite_def/prod/10068050/001__noise_file_Tumor_normal_hg38_alt_masked_cnv_hla_rna_v2/_application_output --enable-map-align=true --enable-sort=true --enable-duplicate-marking=true --dump-map-align-registers=true --enable-variant-caller=true --enable-vcf-compression=true --enable-save-bed-file=true --vc-enable-profile-stats=true",
        rawCmdTwo: "/opt/edico/bin/dragen --output-directory=/staging/tmp/suite_def/424982/illumina-isi07/scratch/dragen_team_share1/users/toconnell1/hcc1187_pcr_free_novaseq_t_n.py/EId1/application_output --events-log-file=/illumina/scratch/test_runner_output/suite_logs/424982/illumina-isi07/scratch/dragen_team_share1/users/toconnell1/hcc1187_pcr_free_novaseq_t_n.py/EId1/application_output/dragen_events.csv --output-file-prefix=dragen.RunDragenSomaticVcStep-HCC1187_PCRFree_NovaSeq_tumor.INV424982-EId1 --tumor-bam-input=/staging/tmp/suite_def/illumina-isi07/scratch/test_suite_data/HCC1187_PCRFree_NovaSeq_tumor/365152/EId1/dragen.RunDragenStepNoMetricsJson-HCC1187_PCRFree_NovaSeq_tumor.INV365152-EId1.bam --bam-input=/staging/tmp/suite_def/illumina-isi07/scratch/test_suite_data/HCC1187_PCRFree_NovaSeq/365150/EId1/dragen.RunDragenStepNoMetricsJson-HCC1187_PCRFree_NovaSeq.INV365150-EId1.bam --ref-dir=/staging/tmp/suite_def/illumina-isi07/scratch/dragen_datasets/data/vault/reference_genomes/Hsapiens/hg38_alt_masked_v2/DRAGEN/8 --enable-http-server=true --enable-metrics-json=true --enable-variant-caller=true --enable-vcf-compression=true --vc-enable-profile-stats=true --enable-map-align=false --enable-save-bed-file=true --enable-sort=false --enable-duplicate-marking=false",
    },
    getters: {

        parsedCmdOne: (state)=> {
            return parseCmd(state.rawCmdOne)
        },

        parsedCmdTwo: (state) => {
            return parseCmd(state.rawCmdTwo)
        },

        mapOne: (state, getters) => {
            return getters.parsedCmdOne["map"]
        },

        mapTwo: (state, getters) => {
            return getters.parsedCmdTwo["map"]
        },

        flagSetOne: (state, getters) => {
            return getters.parsedCmdOne["flags"]
        },

        flagSetTwo: (state, getters) => {
            return getters.parsedCmdTwo["flags"]
        },

        mapIntersect: (state, getters) => {
            
            let intersect = {}
            
            Object.keys(getters.mapOne).forEach((i) => {
                if (i in getters.mapTwo){
                    intersect[i] = [getters.mapOne[i], getters.mapTwo[i]]
                }
            })

            return intersect

        },

        mapDiffOne: (state, getters) => {

            let diff = {}

            
            Object.keys(getters.mapOne).forEach((i) => {
                if (!(i in getters.mapTwo)){
                    diff[i] = getters.mapOne[i]
                }
            })

            return diff

        },

        mapDiffTwo: (state, getters) => {

            let diff = {}

            Object.keys(getters.mapTwo).forEach((i) => {
                if (!(i in getters.mapOne)){
                    diff[i] = getters.mapTwo[i]
                }
            })

            return diff

        }

    },

    mutations: {
        setRawCmdOne(state, newValue){
            state.rawCmdOne = newValue
        },
        setRawCmdTwo(state, newValue){
            state.rawCmdTwo = newValue
        }
    }
})

const vuetify = createVuetify(
    {
        components,
        directives,
    }
)

createApp(App).use(vuetify).use(store).mount('#app')
