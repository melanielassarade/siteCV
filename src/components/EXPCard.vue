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
        <q-btn label="En savoir +" :class="buttonClass" @click="showDetails = true"/>
      </div>

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
            <EXPCardDetails v-if="showDetails" :details="experience.details" />
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-card-section>
  </q-card>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import EXPCardDetails from 'src/components/EXPCardDetails.vue';

  const props = defineProps({
    experience: {
      type: Object,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  });

  const showDetails = ref(false);

  const cardClass = computed(() => {
    return {
      'bg-teal-8':
        props.category === 'professionnellesNumeriques' ||
        props.category === 'extraProfessionnelles',
      'bg-deep-purple-8': props.category === 'autresProfessionnelles',
    };
  });

  const buttonClass = computed(() => {
    return {
      'bg-secondary':
        props.category === 'professionnellesNumeriques' ||
        props.category === 'extraProfessionnelles',
      'bg-primary': props.category === 'autresProfessionnelles',
    };
  });


</script>