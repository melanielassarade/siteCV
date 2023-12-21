<!-- EXPCard.vue -->
<template>
  <q-card dark bordered :class="cardClass">
    <q-card-section>
      <!--Contenu textuel card-->
      <div class="text-h6">{{ experience.title }}</div>
      <q-separator dark class="q-my-md" />
      <div class="text-subtitle2">{{ experience.date }} | {{ experience.company }}</div>
    </q-card-section>
    
    <q-card-section>
      <!--Contenu interactif card-->
      <div class="flex justify-center">
        <q-btn label="En savoir +" color="secondary" @click="showDetails = true" />
      </div>
      <!--Contenu "En savoir plus" -->
      <q-dialog v-model="showDetails">
        <q-card style="width:80vw;">
          <q-card-section class="flex justify-between">
            <div>
              <div class="text-h6">Détails de l'expérience :</div>
            </div>
            <div>
              <q-btn flat label="Fermer" color="secondary" @click="showDetails = false" />
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ experience.details }}
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showDetails: false
    };
  },
  computed: {
    cardClass() {
      return {
        'bg-teal-8': this.category === 'professionnellesNumeriques' ||
                    this.category === 'extraProfessionnelles',
        'bg-deep-purple-8': this.category === 'autresProfessionnelles',
      };
    }
  }
};
</script>