<!-- SkillsList.vue -->
<template>
    <q-list bordered separator>
        <q-item v-for="(skill, index) in skills" :key="'skill' + index">
            <q-item-section class="q-pa-md">
                <q-item-label overline class="text-uppercase">{{ skill.category }}</q-item-label>
                <q-item-label style="font-size: 18px;">{{ skill.description }}</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>
    
<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        skills: {
            type: Array,
            required: true
        }
    })
</script>
    