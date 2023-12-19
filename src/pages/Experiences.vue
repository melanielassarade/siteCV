<template>

    <section>
        <div id="headerExperiencesPage" class="row justify-center q-pa-md">
            <h3 class="text-uppercase">Expériences</h3>
        </div>
        <div class="row justify-center q-gutter-sm q-pa-md">
            <h3 class="text-secondary text-capitalize col-12 col-sm-6 col-md-4 col-lg-3">Expériences professionnelles design et numérique</h3>
            
            <q-card dark bordered class="bg-teal-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Stage Développeuse Web et Web Mobile</div>
                <div class="text-subtitle2">11/2023-02/2024 | KALISIO (11)</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    <div class="flex justify-center">
                        <q-btn label="En savoir +" color="secondary" @click="xp01 = true" />
                    </div>

                    <!-- Pop-up détails expérience -->
                    <q-dialog v-model="xp01">
                        <q-card style="width: 80vw;">
                            <q-card-section class="flex justify-between">
                                <div>
                                    <div class="text-h6">Détails de l'expérience :</div>
                                </div>
                                <div>
                                    <q-btn flat label="Fermer" color="secondary" v-close-popup />
                                </div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                Mettre ici le détails de l'expérience 1
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </q-card-section>
            </q-card>

            <q-card dark bordered class="bg-teal-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Graphiste et Web Designer indépendant</div>
                <div class="text-subtitle2">10/2020-09/2022 | Mélanie LASSARADE (12,15,48)</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    <div class="flex justify-center">
                        <q-btn label="En savoir +" color="secondary" @click="xp02 = true" />
                    </div>

                    <!-- Pop-up détails expérience -->
                    <q-dialog v-model="xp02">
                        <q-card style="width: 80vw;">
                            <q-card-section class="flex justify-between">
                                <div>
                                    <div class="text-h6">Détails de l'expérience :</div>
                                </div>
                                <div>
                                    <q-btn flat label="Fermer" color="secondary" v-close-popup />
                                </div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                Mettre ici le détails de l'expérience 2
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </q-card-section>
            </q-card>
            <q-card dark bordered class="bg-teal-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Stage Designer Web</div>
                <div class="text-subtitle2">11/2019-02/2020 | GALZIN (12)</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    <div class="flex justify-center">
                        <q-btn label="En savoir +" color="secondary" @click="xp03 = true" />
                    </div>

                    <!-- Pop-up détails expérience -->
                    <q-dialog v-model="xp03">
                        <q-card style="width: 80vw;">
                            <q-card-section class="flex justify-between">
                                <div>
                                    <div class="text-h6">Détails de l'expérience :</div>
                                </div>
                                <div>
                                    <q-btn flat label="Fermer" color="secondary" v-close-popup />
                                </div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                Mettre ici le détails de l'expérience 3
                            </q-card-section>
                        </q-card>
                    </q-dialog>
                </q-card-section>
            </q-card>
            <q-card dark bordered class="bg-teal-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Designer textile et commercial</div>
                <div class="text-subtitle2">04/2018-04/2019 | MOMENTO DECO (48)</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    Insérer ici le déclenchement de la pop up pour le détails
                </q-card-section>
            </q-card>
            <q-card dark bordered class="bg-teal-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Game Designer</div>
                <div class="text-subtitle2">07/2008-09/2008 | FEERIK (34)</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    Insérer ici le déclenchement de la pop up pour le détails
                </q-card-section>
            </q-card>
        </div>
        <div class="row justify-center q-gutter-sm q-pa-md bg-deep-purple-1">
            <h3 class="text-primary text-capitalize col-12 col-sm-6 col-md-4 col-lg-3"> Autres expériences professionnelles</h3>
            <q-card dark bordered class="bg-deep-purple-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Vendeuse en rayon frais traditionnel</div>
                <div class="text-subtitle2">05/2021-12/2022 | LECLERC (12)</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    Insérer ici le déclenchement de la pop up pour le détails
                </q-card-section>
            </q-card>
            <q-card dark bordered class="bg-deep-purple-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Factrice</div>
                <div class="text-subtitle2">10/2020-05/2021 | LA POSTE (12)</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    Insérer ici le déclenchement de la pop up pour le détails
                </q-card-section>
            </q-card>
        </div>
        <div class="row justify-center q-gutter-sm q-pa-md">
            <h3 class="text-secondary text-capitalize col-12 col-sm-6 col-md-4 col-lg-3">Expériences extra-professionnelles</h3>
            <q-card dark bordered class="bg-teal-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Modératrice puis Administratrice <br>Game et Social Server</div>
                <div class="text-subtitle2">Depuis 03/2023 | Jeu "ARK:Survival Evolved" Mobile</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    Insérer ici le déclenchement de la pop up pour le détails
                </q-card-section>
            </q-card>
            <q-card dark bordered class="bg-teal-8 col-12 col-sm-6 col-md-4 col-lg-3">
                <q-card-section>
                <div class="text-h6">Comédienne de théâtre amateur</div>
                <div class="text-subtitle2">03/2000-08/2008 | Association "La Compagnie des Causses"</div>
                </q-card-section>
        
                <q-separator dark inset />
        
                <q-card-section>
                    Insérer ici le déclenchement de la pop up pour le détails
                </q-card-section>
            </q-card>
        </div>
    </section>

</template>

<script>

    import { defineComponent } from 'vue'
    import { ref } from 'vue'

    export default defineComponent({
        name: "Experiences",
        setup() {
            return {
                xp01: ref(false),
                xp02: ref(false),
                xp03: ref(false),
                xp04: ref(false),
                xp05: ref(false),
                xp06: ref(false),
                xp07: ref(false),
                xp08: ref(false),
                xp09: ref(false),
                xp10: ref(false),
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        }
    })

</script>

<style lang="sass" scoped>

.my-card
    width: 100%
    max-width: 250px

</style>