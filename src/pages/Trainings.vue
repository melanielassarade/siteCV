<template>
    <div class="q-px-lg q-py-md">
        <q-timeline :layout="layout" color="secondary">

            <transition
            appear enter-active-class="animated slideInDown slow delay-1s"
            leave-active-class="animated slideInDown slow delay-1s">
                <q-timeline-entry heading>
                    <h3 class="text-uppercase">Formations</h3>
                </q-timeline-entry>
            </transition>

            <transition
            appear enter-active-class="animated slideInLeft slow delay-2s"
            leave-active-class="animated slideInLeft slow delay-2s">
                <q-timeline-entry
                title="Baccalauréat Littéraire"
                subtitle="2006"
                side="left"
                icon="fa-solid fa-graduation-cap">
                <div>
                    spécialité mathématiques et option arts plastiques au lycée privé Jeanne d'Arc à Millau (12)
                </div>
                </q-timeline-entry>
            </transition>

            <transition
            appear enter-active-class="animated slideInRight slow delay-3s"
            leave-active-class="animated slideInRight slow delay-3s">
                <q-timeline-entry
                title="Mise à niveau en Arts Appliqués"
                subtitle="2007"
                side="right">
                <div>
                    à l'Ecole Supérieur des Métiers d'Arts de Montpellier (34)
                </div>
                </q-timeline-entry>
            </transition>

            <transition
            appear enter-active-class="animated slideInLeft slow delay-4s"
            leave-active-class="animated slideInLeft slow delay-4s">
                <q-timeline-entry
                title="BTS Communication Visuelle options graphisme édition et publicité"
                subtitle="2009"
                side="left"
                icon="fa-solid fa-graduation-cap">
                <div>
                    à l'Institut Professionnel de l'Enseignement Supérieur des Arts Appliqués à Montpellier (34)
                </div>
                </q-timeline-entry>
            </transition>

            <transition
            appear enter-active-class="animated slideInRight slow delay-5s"
            leave-active-class="animated slideInRight slow delay-5s">
                <q-timeline-entry
                title="Titre Professionnel niv III (équivalent BTS) Designer Web"
                subtitle="2019"
                side="right"
                icon="fa-solid fa-graduation-cap">
                <div>
                    à BGE Sud Ouest à Toulouse (31)
                </div>
                </q-timeline-entry>
            </transition>

            <transition
            appear enter-active-class="animated slideInLeft slow delay-5s"
            leave-active-class="animated slideInLeft slow delay-5s">
                <q-timeline-entry
                title="Formation professionnelle Conducteur Livreur sur Véhicules Utilitaires Légers"
                subtitle="2020-2021"
                side="left"
                >
                <div>
                    Formation continue en contrat de professionnalisation avec le groupe La Poste à Millau (12) et avec l'AFPA d'Albi (81)
                </div>
                </q-timeline-entry>
            </transition>

            <transition
            appear enter-active-class="animated slideInRight slow delay-5s"
            leave-active-class="animated slideInRight slow delay-5s">
                <q-timeline-entry
                title="Titre professionnel de niv III (équivalent BTS) Développeur Web et Web Mobile (en cours)"
                subtitle="2024"
                side="right"
                icon="fa-solid fa-school"
                color="primary">
                <div>
                    à l'antenne AFPA de Rodez à Millau (12)
                </div>
                </q-timeline-entry>
            </transition>

        </q-timeline>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

export default {
    setup () {
    const $q = useQuasar()

    return {
        layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
        })
    }
    }
}
</script>
