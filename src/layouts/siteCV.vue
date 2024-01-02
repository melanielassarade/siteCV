<template>
    <q-layout>
        <q-header reveal elevated class="bg-primary">
            <q-toolbar>
                <q-avatar class="q-pa-xs" size="100px"><img src="/img/avatar_mel.png"></q-avatar>
                <q-toolbar-title id="topBrandNav" class="text-left">Mélanie LASSARADE</q-toolbar-title>

                <!--Burger Menu -->
                <q-btn class="q-mr-sm" dense flat round icon="menu" color="white" v-if="$q.screen.lt.md" @click="toggleDrawer" />

                <q-toolbar-content id="topNav" class="q-gutter-md" v-if="$q.screen.gt.md">
                    <q-btn-toggle
                        v-model="model"
                        flat
                        stretch
                        toggle-color="secondary"
                        :options="options"
                    />
                </q-toolbar-content>
            </q-toolbar>
        </q-header>

        <!-- Sidebar Drawer -->
        <q-drawer
        v-model="drawerState" :show-if-above="$q.screen.md" :content-class="drawerClass">
            <q-list>
                <q-item v-for="option in options" :key="option.value" :to="option.to" clickable @click="selectOption(option)">
                <q-item-section>
                    <q-item-label>{{ option.label }}</q-item-label>
                </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-footer reveal elevated class="bg-secondary">
            <q-toolbar>
                <q-toolbar-title class="text-center text-subtitle1">Conçu par Mélanie L. - Powered by Quasar</q-toolbar-title>
            </q-toolbar>
        </q-footer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
    import { defineComponent } from 'vue';
    import { ref } from 'vue';

    export default defineComponent({
        name: 'siteCV',
        setup() {
            const drawerState = ref(false);

            const options = [
                { icon: 'home', label: 'Bienvenue !', to: '/', value: 'one' },
                { icon: 'list', label: 'Compétences', to: '/Skills', value: 'two' },
                { icon: 'fact_check', label: 'Expériences', to: '/Experiences', value: 'three' },
                { icon: 'school', label: 'Formations', to: '/Trainings', value: 'four' },
                { icon: 'mail', label: 'Contacts', to: '/Contact', value: 'five' },
            ];

            const toggleDrawer = () => {
                drawerState.value = !drawerState.value;
            };

            const selectOption = (option) => {
                drawerState.value = false;
            };

            return {
                drawerState,
                options,
                toggleDrawer,
                selectOption,
            };
        },
    });
</script>
