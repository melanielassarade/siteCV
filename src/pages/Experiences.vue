<template>
    <q-page class="q-pa-xl">
        <q-page-section>
            <transition appear enter-active-class="animated fadeIn slow delay-1s">
                <h3 class="text-uppercase text-center">Expériences</h3>
            </transition>
        </q-page-section>
        <q-page-section class="row justify-center q-py-sm">
            <transition appear enter-active-class="animated fadeIn slow delay-1s">
                <h4 v-if="professionnellesNumeriques.length > 0" class="col-lg-2 q-px-sm text-center text-secondary text-capitalize">
                    Expériences professionnelles numériques
                </h4>
            </transition>
            <div class="col-lg row justify-center q-gutter-sm">
                <transition-group appear enter-active-class="animated flipInY slow delay-2s">
                    <template v-for="(experience, index) in professionnellesNumeriques" :key="'expNumérique-' + index">
                        <EXPCard :experience="experience" category="professionnellesNumeriques" />
                    </template>
                </transition-group>
            </div>
        </q-page-section>
        <q-page-section class="row justify-center q-py-sm">
            <transition appear enter-active-class="animated fadeIn slow delay-1s">
                <h4 v-if="autresProfessionnelles.length > 0" class="col-lg-2 q-px-sm text-center text-primary text-capitalize">
                    Autres expériences professionnelles
                </h4>
            </transition>
            <div class="col-lg row justify-center q-gutter-sm">
                <transition-group appear enter-active-class="animated flipInY slow delay-2s">
                    <template v-for="(experience, index) in autresProfessionnelles" :key="'expAutre-' + index">
                        <EXPCard :experience="experience" category="autresProfessionnelles"/>
                    </template>
                </transition-group>
            </div>
        </q-page-section>
        <q-page-section class="row justify-center q-py-sm">
            <transition appear enter-active-class="animated fadeIn slow delay-1s">
                <h4 v-if="extraProfessionnelles.length > 0" class="col-lg-2 q-px-sm text-center text-secondary text-capitalize">
                    Expériences extra-professionnelles
                </h4>
            </transition>
                <div class="col-lg row justify-center q-gutter-sm">
                    <transition-group appear enter-active-class="animated flipInY slow delay-2s">
                        <template v-for="(experience, index) in extraProfessionnelles" :key="'expExtra-' + index">
                            <EXPCard :experience="experience" category="extraProfessionnelles"/>
                        </template>
                    </transition-group>
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