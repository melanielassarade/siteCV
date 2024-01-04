<template>
    <div>
        <template v-for="(detail, index) in details" :key="index">
            <p style="font-size: 16px;"><span class="text-bold text-primary">Missions : </span>{{ detail.missions }}</p>
            <p style="font-size: 16px;"><span class="text-bold text-primary">Objectifs : </span>{{ detail.goals }}</p>
            <p style="font-size: 16px;"><span class="text-bold text-primary">Compétences développées: </span>{{ detail.developedSkills }}</p>
        </template>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        details: {
            type: Array,
            required: true
        }
    });
</script>
