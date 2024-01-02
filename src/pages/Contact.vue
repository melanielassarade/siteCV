<template>

    <section>
        <div id="headerExperiencesPage" class="row justify-center q-pa-md">
            <h3 class="text-uppercase">Contactez-moi</h3>
        </div>
    </section>
    <section class="row justify-center">
        <transition appear enter-active-class="animated fadeIn slow delay-1s" leave-active-class="animated fadeOut slow delay-1s">
            <div class="q-pa-md">
                <div style="max-width: 80vw">
                    <q-tabs v-model="tab" align="justify" narrow-indicator class="q-mb-lg">
                        <q-tab class="text-primary" name="mail" label="Email" />
                        <q-tab class="text-orange" name="tel" label="Téléphone" />
                        <q-tab class="text-secondary" name="rs" label="Réseaux Sociaux" />
                    </q-tabs>

                    <div class="q-gutter-y-sm">
                        <q-tab-panels v-model="tab" animated transition-prev="scale" transition-next="scale" class="text-white text-center rounded-borders">
                            <q-tab-panel name="mail" class="bg-primary q-pa-md">
                                <div class="text-h6">Email</div>
                                <a class="text-white text-h6" style="text-decoration: none;" href="mailto:melanie.lassarade@gmail.com">melanie.lassarade@gmail.com</a>
                            </q-tab-panel>
                    
                            <q-tab-panel name="tel" class="bg-orange q-pa-md">
                                <div class="text-h6">Téléphone</div>
                                <a class="text-white text-h6" style="text-decoration: none;" href="tel:+33686321802">06.86.32.18.02</a>
                            </q-tab-panel>
                    
                            <q-tab-panel name="rs" class="bg-secondary q-pa-md">
                                <div class="text-h6">Réseaux Sociaux</div>
                                <div class="flex justify-evenly">
                                    <q-btn flat icon="bi-instagram" alt="Instagram" target="_blank" href="https://www.instagram.com/"/>
                                    <q-btn flat icon="bi-facebook" alt="Facebook" target="_blank" href="https://www.facebook.com/?locale=fr_FR"/>
                                    <q-btn flat icon="bi-linkedin" alt="LinkedIn" target="_blank" href="https://fr.linkedin.com/"/>
                                </div>
                            </q-tab-panel>
                        </q-tab-panels>
                    </div>
                </div>
            </div>
        </transition>
    </section>
    <div class="text-h5 text-center">ou directement par ce formulaire :</div>
    <section class="row justify-center">
        <transition appear enter-active-class="animated fadeIn slow delay-3s" leave-active-class="animated fadeOut slow delay-3s">
            <div class="q-pa-lg full-width" style="max-width: 60vw;">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                    <q-input
                        v-model="name" label="Votre nom *" hint="Nom et prénom" lazy-rules :rules="[ 
                            val => val && val.length > 0 || 'Merci de remplir ce champs'
                        ]"/>
                
                    <q-input type="email" v-model="email" label="Votre mail *" lazy-rules :rules="[
                        val => val !== null && val !== '' || 'Merci de remplir ce champs',
                        val => val !== '@' && val !== '.' || 'Merci de mettre un mail valide'
                    ]"/>

                    <q-input type="textarea" label="Votre message *" v-model="customText" autogrow lazy-rules :rules="[ 
                        val => val && val.length > 0 || 'Merci de remplir ce champs'
                    ]"/>
                
                    <q-toggle v-model="accept" label="J'accepte de communiquer mes données à Mélanie LASSARADE" />
                
                    <div class="flex justify-center">
                        <q-btn label="Envoyer" type="submit" color="primary"/>
                        <q-btn label="Vider les champs" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </div>
        </transition>
    </section>
</template>

<!-- Script d'origine
    
<script>
    import { useQuasar } from 'quasar'
    import { ref } from 'vue'

    export default {
        setup () {
            const $q = useQuasar()
            const name = ref(null)
            const email = ref(null)
            const accept = ref(false)

            return {
                tab: ref('mail'),
                name,
                email,
                accept,

                onSubmit () {
                    if (accept.value !== true) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'Vous devez accepter de communiquer vos données.'
                    })
                    }
                    else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Message envoyé'
                    })
                    }
                },

                onReset () {
                    customText.value = null
                    name.value = null
                    email.value = null
                    accept.value = false
                }
            }
        }
    }
</script>
-->

<!--Transformation en script setup-->
<script setup>
    import { useQuasar } from 'quasar'
    import { ref } from 'vue'

    const $q = useQuasar()
    const name = ref(null)
    const email = ref(null)
    const accept = ref(false)
    const tab = ref('mail')

    const onSubmit = () => {
        if (accept.value !== true) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Vous devez accepter de communiquer vos données.'
        })
        } else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Message envoyé'
        })
        }
    }

    const onReset = () => {
        name.value = null
        email.value = null
        customText.value = null
        accept.value = false
    }
</script>
