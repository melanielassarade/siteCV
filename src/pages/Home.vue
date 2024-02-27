<template>

    <section id="startedDialog">    
        <q-dialog v-model="dialogVisible">
            <q-card>
                <q-card-section>
                <div class="text-h6">Bienvenue sur mon site CV !</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <p>Ce site a été réalisé dans le cadre du stage chez Kalisio au cours de ma formation de Développeuse Web fin 2023.</p>
                </q-card-section>
                <q-card-actions align="right" class="text-primary">
                <q-btn flat label="En savoir plus" @click="secondDialog = true" />
                <q-btn flat label="Fermer" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
            <q-card class="bg-teal text-white" style="width: 600px">
                <q-card-section>
                <div class="text-h6">Résumé du projet</div>
                </q-card-section>
                <q-card-section class="q-pt-none text-center">
                    <p>
                        Lors de mon stage en entreprise chez Kalisio, j’ai pu développer mon projet "Site CV avec Quasar et Vue.js" qui est une exploration approfondie des technologies modernes du développement web.
                    </p>
                    <p>    
                        Le cas d'utilisation avec le site CV explore en détails les différentes étapes de la création d'un CV en ligne, de la gestion des pages et des routes à l'intégration de composants personnalisés, en passant par les animations, le traitement et la sécurisation des données.
                    </p>
                    <p>
                        Ce projet passionnant représente pour moi une opportunité précieuse me permettant par la suite de travailler avec Kalisio.           
                    </p>
                </q-card-section>
                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat href="https://www.canva.com/design/DAF9aMRe1w8/tRn5ZVCb9aHF2aYuJS0sCQ/view?utm_content=DAF9aMRe1w8&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" label="Mon dossier de projet" />
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </section>

    <section id="carouselMenu">
        <q-carousel height="80vh" animated v-model="slide" arrows navigation infinite>
            <q-carousel-slide name="one" img-src="/img/background_photo_mel.jpg" class="column">
                <div class="absolute-left custom-caption flex flex-center">
                    <div class="q-gutter-md">
                        <div class="text-h2">Je suis <span class="text-accent text-bold">Mélanie</span>,</div>
                        <div class="text-h6 text-italic">développeuse web et web mobile (mais pas que...)</div>
                        <q-btn color="secondary" href="#bio" label="En savoir +"/>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="two" img-src="https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725_1280.jpg">
                <div class="absolute-left custom-caption flex flex-center">
                    <div class="q-gutter-md">
                        <div class="text-h2">Mes compétences</div>
                        <q-btn color="primary" to="/Skills" label="En savoir +"/>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="three" img-src="https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg">
                <div class="absolute-left custom-caption flex flex-center">
                    <div class="q-gutter-md">
                        <div class="text-h2">Mes expériences</div>
                        <q-btn color="secondary" to="/Experiences" label="En savoir +"/>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="four" img-src="https://cdn.pixabay.com/photo/2017/07/31/22/06/computer-2561518_1280.jpg">
                <div class="absolute-left custom-caption flex flex-center">
                    <div class="q-gutter-md">
                        <div class="text-h2">Mes formations</div>
                        <q-btn color="primary" to="/Trainings" label="En savoir +"/>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="five" img-src="https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_1280.jpg">
                <div class="absolute-left custom-caption flex flex-center">
                    <div class="q-gutter-md">
                        <div class="text-h2">Mes contacts</div>
                        <q-btn color="secondary" to="/Contact" label="Me contacter"/>
                    </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </section>

    <section id="bio" class="row q-pa-xl q-col-gutter-md">
        <div class="col-12 col-md-4 bg-accent flex flex-middle flex-center">
            <q-img src="/img/ANIMATEAvatarSimple.gif" width="200px"/>
        </div>
        <div class="col-12 col-md-8 flex flex-middle flex-center">
            <div>
                <p style="font-size: 18px">Tombée dans l'informatique depuis l'adolescence,<br> j'ai voulu combiner ma passion pour la communication et l'image avec le numérique<br> pour en faire aujourd'hui mon métier.</p>
                <p style="font-size: 18px">Tout au long de ma vie professionnelle, j'ai développé des compétences<br>qui m'ont permise d'être polyvalente et évolutive.</p>
            </div>
        </div>
    </section>

    <section id="origins" class="row q-pa-xl q-col-gutter-md parallax" style="background-image: url('https://cdn.pixabay.com/photo/2019/07/14/16/37/landscape-4337546_1280.jpg');">
        <div class="col-12 flex flex-middle flex-center">
            <div class="text-accent text-center text-h6" style="background-color: rgba(0,0,0,0.3); border-radius: 5px;">
                <p style="font-size: 18px" class="q-pa-lg">Originaire de l'Aveyron, je suis une femme authentique et généreuse.</p>
                <p style="font-size: 18px" class="q-pa-lg">Vivre en milieu rural m'a appris le sens du relationnel et de l'humilité :<br>
                que ce soit en travail d'équipe comme en autonomie,<br>je sais faire preuve d'écoute, car c'est avant tout pour les autres que je travaille.</p>
            </div>
        </div> 
    </section>

    <section id="rewards" class="row q-pa-xl q-col-gutter-md">
        <div class="col-12 col-md-8 flex flex-middle flex-center">
            <div style="font-size: 18px">
                <p>"Pourquoi moi ?" Voici quelques avis de d'anciens collaborateurs :</p>
                <div>
                    <q-chat-message
                    bg-color="secondary" text-color="white" name="Aline, partenaire de formation au titre pro de Web Designer à BGE Sud Ouest (31)"
                    :text="['Un véritable talent pour le travail d\'équipe, le respect des délais et de la deadline, un très bon contact et écoute du client.']"
                    />
                    <q-chat-message sent
                    bg-color="primary" text-color="white" name="Laurine, infographiste référente de stage à Galzin (12)"
                    :text="['Travailleuse investie, consciencieuse, ponctuelle, discrète et organisée.']"
                    />
                    <q-chat-message
                    bg-color="secondary" text-color="white" name="Soazig, collègue et employée référente et formatrice au rayon Charcuterie-traiteur à Leclerc (12)"
                    :text="['Très méthodique, avec de la rigueur et du dynamisme.']"
                    />
                    <q-chat-message sent
                    bg-color="primary" text-color="white" name="Alicia, collègue de rayon à Leclerc (12)"
                    :text="['Très à l\'écoute, souriante et bon contact avec le client, elle sait vendre !']"
                    />
                    <q-chat-message
                    bg-color="secondary" text-color="white" name="Kévin, tuteur référent de formation au titre pro de CLVUL à la Poste (12)"
                    :text="['Une collègue volontaire, dynamique et enjouée.']"
                    />
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 bg-accent flex column flex-middle flex-center text-center text-primary">
            <div class="text-h1"><i class="bi bi-hand-thumbs-up-fill"/><i class="bi bi-patch-check-fill"/></div>
            <div class="text-h4">Collaboratrice<br>certifiée<br>conforme !</div>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const slide = ref('one')
    const dialogVisible = ref(false)
    const inception = ref(false)
    const secondDialog = ref(false)

    onMounted(() => {
    dialogVisible.value = true
    })
</script>

<style lang="sass" scoped>
.custom-caption
    text-align: center
    padding: 75px
    color: white
    background-color: rgba(0, 0, 0, .3)

.parallax
    background-attachment: fixed
    background-size: cover
    background-position: center
    background-repeat: no-repeat

</style>