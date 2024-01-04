<template>

    <q-page class="q-pa-xl">
        <q-page-section id="headerSkillsPage">
            <transition appear enter-active-class="animated slideInDown slow delay-1s">
                <h3 class="text-uppercase text-center">Compétences</h3>
            </transition>
        </q-page-section>

        <q-page-section>
            <transition appear enter-active-class="animated fadeIn slow delay-2s">
                <div>
                    <q-splitter v-model="splitterModel" style="height: 50vh">
                        <template v-slot:before>
                            <q-tabs v-model="tab" vertical class="text-teal">
                                <q-tab name="know" icon="fa-solid fa-lightbulb" label="Savoir" />
                                <q-tab name="do" icon="fa-solid fa-gears" label="Faire" />
                                <q-tab name="be" icon="fa-solid fa-users" label="Etre" />
                            </q-tabs>
                        </template>
                        <template v-slot:after>
                            <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
                                <q-tab-panel name="know">
                                    <div v-if="knowSkills.length > 0" class="text-h5 q-mb-md text-primary"><i class="fa-solid fa-lightbulb"/> Mes connaissances</div>
                                    <template v-for="(skills, index) in knowSkills" :key="'knowSkill' + index">
                                        <SkillsList :skill="skills" />
                                    </template>
                                </q-tab-panel>
                        
                                <q-tab-panel name="do">
                                    <div v-if="doSkills.length > 0" class="text-h5 q-mb-md text-primary"><i class="fa-solid fa-gears"/> Mes compétences opérationnelles </div>
                                    <template v-for="(skills, index) in doSkills" :key="'doSkill' + index">
                                        <SkillsList :skill="skills" />
                                    </template>
                                </q-tab-panel>
                        
                                <q-tab-panel name="be">
                                    <div v-if="beSkills.length > 0" class="text-h5 q-mb-md text-primary"><i class="fa-solid fa-users"/> Mes compétences comportementales</div>
                                    <template v-for="(skills, index) in beSkills" :key="'beSkill' + index">
                                        <SkillsList :skill="skills" />
                                    </template>
                                </q-tab-panel>
                            </q-tab-panels>
                        </template>
                    </q-splitter>
                </div>
            </transition>  
        </q-page-section>
    </q-page>
</template>

<script setup>
    import { ref } from 'vue';
    import skillsData from 'src/data/skillsData.json';
    import SkillsList from 'src/components/SkillsList.vue';

    const tab = ref('know');
    const splitterModel = ref(20);

    const knowSkills = ref(skillsData.knowSkills || []);
    const doSkills = ref(skillsData.doSkills || []);
    const beSkills = ref(skillsData.beSkills || []);

    const components = {
        SkillsList
    };
</script>