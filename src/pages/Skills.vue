<template>

    <q-page class="q-pa-xl">
        <q-page-section id="headerSkillsPage">
            <h3 class="text-uppercase text-center">Compétences</h3>
        </q-page-section>
        <q-page-section>
            <div class="q-pa-md relative-position" style="height: 60vh">
                <q-btn v-morph:btn:mygroup:300.resize="morphGroupModel" class="absolute-bottom-left q-ma-md" fab color="primary" size="lg" icon="add" label="Compétences Techniques" @click="nextMorph" />
            
                <q-card v-morph:card1:mygroup:500.resize="morphGroupModel" class="absolute-bottom-left q-ma-md bg-primary text-white" style="width: 80vw; border-bottom-left-radius: 2em">
                    <q-card-section class="text-h6">
                        Techniques numériques
                    </q-card-section>
            
                    <q-card-section class="text-subtitle1">
                        <q-list bordered separator>
                            <q-item v-ripple>
                                <q-item-section>
                                    <q-item-label overline>Développement</q-item-label>
                                    <q-item-label>Utilisation et gestion du CMS Wordpress</q-item-label>
                                </q-item-section>
                            </q-item>
                    
                            <q-item v-ripple>
                                <q-item-section>
                                    <q-item-label overline>Développement</q-item-label>
                                    <q-item-label>Langages et framework orienté back-end : PHP, POO, Symphony, Git</q-item-label>
                                </q-item-section>
                            </q-item>
                    
                            <q-item v-ripple>
                                <q-item-section>
                                    <q-item-label overline>Développement</q-item-label>
                                    <q-item-label>Langages et framework orienté front-end : HTML5, CSS3, Javascript, Bootstrap, Quasar, Node.JS, Vue.JS</q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-item v-ripple>
                                <q-item-section>
                                    <q-item-label overline>Développement</q-item-label>
                                    <q-item-label>Construction et exploitation de base de données avec MySQL</q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-item v-ripple>
                                <q-item-section>
                                    <q-item-label overline>Design</q-item-label>
                                    <q-item-label>Maîtrise des logiciels de la suite Adobe CC -Photoshop-Illustrator-InDesign-XD-</q-item-label>
                                </q-item-section>
                            </q-item>

                        </q-list>
                    </q-card-section>
            
                    <q-card-actions align="right">
                        <q-btn flat label="Fermer" @click="nextMorph" />
                    </q-card-actions>
                </q-card>            
            </div>
        </q-page-section>
    </q-page>

</template>

<script setup>
    import { ref } from 'vue'

    const nextMorphStep = {
        btn: 'card1',
        card1: 'btn',
    }

    const morphGroupModel = ref('btn')

    const nextMorph = () => {
        morphGroupModel.value = nextMorphStep[morphGroupModel.value]
    }
</script>