<template>
    <q-page class="q-pa-xl">
        <q-page-section>
            <h3 class="text-uppercase text-center">Expériences</h3>
        </q-page-section>
        <q-page-section class="row justify-between q-py-sm">
            <h3 v-if="professionnellesNumeriques.length > 0" class="col-md-3 text-center text-secondary text-capitalize">
                Expériences professionnelles numériques
            </h3>
            <div class="col-md row justify-start q-gutter-md">
                <template v-for="(experience, index) in professionnellesNumeriques" :key="'expNumérique-' + index">
                    <EXPCard :experience="experience" category="professionnellesNumeriques" />
                </template>
            </div>
        </q-page-section>
    
        <q-page-section class="row justify-between q-py-sm">
                <h3 v-if="autresProfessionnelles.length > 0" class="col-md-3 text-center text-primary text-capitalize">
                    Autres expériences professionnelles
                </h3>
                <div class="col-md row justify-start q-gutter-md">
                    <template v-for="(experience, index) in autresProfessionnelles" :key="'expAutre-' + index">
                        <EXPCard :experience="experience" category="autresProfessionnelles"/>
                    </template>
                </div>
        </q-page-section>

        <q-page-section class="row justify-between q-py-sm">
                <h3 v-if="extraProfessionnelles.length > 0" class="col-md-3 text-center text-secondary text-capitalize">
                    Expériences extra-professionnelles
                </h3>
                <div class="col-md row justify-start q-gutter-md">
                    <template v-for="(experience, index) in extraProfessionnelles" :key="'expExtra-' + index">
                        <EXPCard :experience="experience" category="extraProfessionnelles"/>
                    </template>
                </div>
        </q-page-section>
    </q-page>
</template>

<script setup>
    import { ref } from 'vue';
    import experiencesData from 'src/data/experiencesData.json';
    import EXPCard from 'src/components/EXPCard.vue';

    const professionnellesNumeriques = ref(experiencesData.professionnellesNumeriques || []);
    const autresProfessionnelles = ref(experiencesData.autresProfessionnelles || []);
    const extraProfessionnelles = ref(experiencesData.extraProfessionnelles || []);

    const components = {
        EXPCard
    };
</script>