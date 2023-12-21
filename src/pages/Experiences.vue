<template>
    <q-page class="q-pa-md">
        <q-page-section>
        <h3 class="text-uppercase text-center">Expériences</h3>
        </q-page-section>
        <q-page-section>
            <h3 v-if="professionnellesNumeriques.length > 0" class="text-secondary text-capitalize col-12 col-md-3">
                Expériences professionnelles numériques
            </h3>
            <div class="row q-col-12 q-col-md">
                <template v-for="(experience, index) in professionnellesNumeriques" :key="'expNumérique-' + index">
                <div>
                    <EXPCard :experience="experience" category="professionnellesNumeriques" />
                </div>
                </template>
            </div>
        </q-page-section>
    
    <template v-if="autresProfessionnelles.length > 0">
        <div class="row justify-center">
            <h3 class="text-primary text-capitalize q-col-12">Autres expériences professionnelles</h3>
            <div v-for="(experience, index) in autresProfessionnelles" :key="'expAutre-' + index" class="q-col-12 q-md-6">
                <EXPCard :experience="experience" category="autresProfessionnelles"/>
            </div>
        </div>
    </template>

    <template v-if="extraProfessionnelles.length > 0">
        <div class="row justify-center">
            <h3 class="text-secondary text-capitalize q-col-12">Expériences extra-professionnelles</h3>
            <div v-for="(experience, index) in extraProfessionnelles" :key="'expExtra-' + index" class="q-col-12 q-md-12">
                <EXPCard :experience="experience" category="extraProfessionnelles"/>
            </div>
        </div>
    </template>
    </q-page>
</template>

<script>

import experiencesData from 'src/data/experiencesData.json';
import EXPCard from 'src/components/EXPCard.vue';

export default {
    components: {
        EXPCard,
    },
    data() {
        return {
        professionnellesNumeriques: experiencesData.professionnellesNumeriques || [],
        autresProfessionnelles: experiencesData.autresProfessionnelles || [],
        extraProfessionnelles: experiencesData.extraProfessionnelles || [],
        };
    }
};
</script>