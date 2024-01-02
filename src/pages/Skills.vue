<template>

    <q-page class="q-pa-xl">
        <q-page-section id="headerSkillsPage">
            <h3 class="text-uppercase text-center">Compétences</h3>
        </q-page-section>

        <q-page-section>
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
                            <div class="text-h5 q-mb-md">Mes connaissances</div>
                            <q-list bordered separator>
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">Design</q-item-label>
                                        <q-item-label>Logiciels de création graphique et de mise en page Adobe (Photoshop, Illustrator, Indesign, XD, Animate)</q-item-label>
                                    </q-item-section>
                                </q-item>
                            
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">Développement Web</q-item-label>
                                        <q-item-label>Langages de présentation et de programmation HTML/CSS/JS/PHP/NodeJS, framework Bootstrap/React/Symfony</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-tab-panel>
                
                        <q-tab-panel name="do">
                            <div class="text-h5 q-mb-md">Mes compétences opérationnelles </div>
                            <q-list bordered separator>
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">Développement Web</q-item-label>
                                        <q-item-label>Tests unitaires d'applications web avec Puppeteer (bibliothèque Node.js)</q-item-label>
                                    </q-item-section>
                                </q-item>
                            
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">Développement Web</q-item-label>
                                        <q-item-label>Item with caption</q-item-label>
                                    </q-item-section>
                                </q-item>
                            
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">OVERLINE</q-item-label>
                                        <q-item-label>Item with caption</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-tab-panel>
                
                        <q-tab-panel name="be">
                            <div class="text-h5 q-mb-md">Mes compétences comportementales</div>
                            <q-list bordered separator>
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">Relationnel</q-item-label>
                                        <q-item-label>J'ai le sens du travail d'équipe, et sais former et diriger une équipe au besoin.</q-item-label>
                                    </q-item-section>
                                </q-item>
                            
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">Professionnel</q-item-label>
                                        <q-item-label>Autonome et persévérante, je sais m'adapter et faire preuve d'esprit critique et de résilience sur mon travail.</q-item-label>
                                    </q-item-section>
                                </q-item>
                            
                                <q-item v-ripple>
                                    <q-item-section>
                                        <q-item-label overline class="text-uppercase">Emotionnel</q-item-label>
                                        <q-item-label>Je reste à l'écoute de mon équipe ou du client. </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-tab-panel>
                    </q-tab-panels>
                </template>
            
                </q-splitter>
            </div>     
        </q-page-section>
    </q-page>
</template>

<script setup>
    import { ref } from 'vue'
    
    const tab = ref('know')
    const splitterModel = ref(20)

</script>