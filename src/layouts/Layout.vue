<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <div style="margin-left: auto; margin-right: auto">
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://w7.pngwing.com/pngs/995/240/png-transparent-transcendental-meditation-world-retreat-inner-peace-meditation-miscellaneous-text-logo-thumbnail.png"
              />
            </q-avatar>
            Tamir's Workshop
          </q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div class="column layoutMenu">
        <span @click="router.push('/recipes')">Recipes</span>
        <span @click="router.push('/select')">Selector</span>
        <span @click="router.push('/todos')">Todo-List</span>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();

    return {
      leftDrawerOpen,
      router,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style scoped>
.layoutMenu > * {
  margin-bottom: 15%;
  border-bottom: 3px solid black;
  text-align: center;
  font-weight: 700;
}

.layoutMenu > *:hover {
  cursor: pointer;
  color: red;
  border-bottom: 3px solid red;
}

.layoutMenu {
  margin-top: 5%;
}
</style>
>
