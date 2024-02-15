<template>

    <section>
        <div id="headerExperiencesPage" class="row justify-center q-pa-md">
            <transition appear enter-active-class="animated fadeIn slow delay-1s">
                <h3 class="text-uppercase">Contactez-moi</h3>
            </transition>
        </div>
    </section>
    <section class="row justify-center">
        <transition appear enter-active-class="animated bounceInDown slow delay-2s">
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
    <transition appear enter-active-class="animated fadeIn slow delay-3s">
        <div class="text-h5 text-center">ou directement par ce formulaire :</div>
    </transition>
    <section class="row justify-center">
        <transition appear enter-active-class="animated fadeIn slow delay-4s">
            <div class="q-pa-lg full-width" style="max-width: 60vw;">
                <div v-if="successMessage" class="bg-light-green-9 text-white text-center q-pa-md q-ma-xs">
                    {{ successMessage }}
                </div>
                <div v-if="errorMessage" class="bg-red-9 text-white text-center q-pa-md q-ma-xs">
                    {{ errorMessage }}
                </div>
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" action="http://localhost:3000/send-email" method="POST">
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
                
                    <div v-if="!agreeToggle" class="text-red text-center q-pa-none q-ma-none">Veuillez accepter les conditions pour envoyer le message.</div>
                    <q-toggle :label="agreeToggle ? 'Je suis d\'accord' : 'Je ne suis pas d\'accord'" color="green" v-model="agreeToggle" class="q-pa-none q-ma-none">
                        de communiquer mes données à Mélanie LASSARADE exclusivement.
                    </q-toggle>
                
                    <div class="flex justify-center">
                        <q-btn label="Envoyer" type="submit" color="primary"/>
                        <q-btn label="Vider les champs" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const successMessage = ref('')
const errorMessage = ref('')

const tab = ref('mail')
const name = ref('')
const email = ref('')
const customText = ref('')
const agreeToggle = ref(false)

const onSubmit = () => {
    const formData = {
        name: name.value,
        email: email.value,
        customText: customText.value,
        agreeToggle: agreeToggle.value
    }

    if (agreeToggle.value) {
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:9000',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                successMessage.value = 'Message envoyé avec succès!'
                errorMessage.value = '' // Efface les messages d'erreur précédents s'il y en a
            } else {
                errorMessage.value = 'Erreur lors de l\'envoi du message. Veuillez vérifier vos réponses.'
                successMessage.value = '' // Efface les messages de succès précédents s'il y en a
            }
        })
        .catch(error => {
            errorMessage.value = 'Erreur lors de l\'envoi du message:' + error
        })
    } else {
        errorMessage.value = 'Veuillez accepter les conditions pour envoyer le message.'
    }
}

const onReset = () => {
    name.value = ''
    email.value = ''
    customText.value = ''
    agreeToggle.value = false
}
</script>
