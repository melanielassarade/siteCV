<!-- SkillsList.vue -->
<template>
    <q-list bordered separator>
        <q-item>
            <q-item-section>
                <q-item-label overline class="text-uppercase">{{ skill.category }}</q-item-label>
                <q-item-label>{{ skill.description }}</q-item-label>
            </q-item-section>
        </q-item>
        </q-list>
    </template>
    
    <script setup>
        import { defineProps } from 'vue';
    
        const props = defineProps({
            skill: {
                type: Object,
                required: true
            }
        });
    </script>
    