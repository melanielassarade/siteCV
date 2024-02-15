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
                                    <SkillsList :skills="knowSkills" />
                                </q-tab-panel>
                                <q-tab-panel name="do">
                                    <div v-if="doSkills.length > 0" class="text-h5 q-mb-md text-primary"><i class="fa-solid fa-gears"/> Mon savoir-faire</div>
                                    <SkillsList :skills="doSkills" />
                                </q-tab-panel>
                                <q-tab-panel name="be">
                                    <div v-if="beSkills.length > 0" class="text-h5 q-mb-md text-primary"><i class="fa-solid fa-users"/> Mon savoir-être</div>
                                    <SkillsList :skills="beSkills" />
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
    import { ref } from 'vue'
    import { api } from 'boot/axios'
    import { useQuasar } from 'quasar'
    import SkillsList from 'src/components/SkillsList.vue'

    //Props    
    const $q = useQuasar()
    let knowSkills = ref([])
    let doSkills = ref([])
    let beSkills = ref([])
    const tab = ref('know')
    const splitterModel = ref(20)
    
    // Functions
    function loadData () {
        api.get('https://api.npoint.io/e66b2086122ba0135bf0')
        .then((response) => {
            const skillsData = response.data
            knowSkills.value = skillsData.knowSkills 
            doSkills.value = skillsData.doSkills 
            beSkills.value = skillsData.beSkills
        })
    }
    loadData()
</script>