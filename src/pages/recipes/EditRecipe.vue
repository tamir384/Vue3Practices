<template @updateItem="getRecipe">
  <q-page>
    <q-input
      style="margin-top: 10%"
      filled
      class="newRecipeForm"
      label="Recipe Name"
      v-model="recipe.name"
    />
    <q-input
      class="newRecipeForm"
      filled
      label="Recipe Image Link"
      v-model="recipe.img"
    />
    <q-input
      class="newRecipeForm"
      filled
      label="Name Of The Publisher"
      v-model="recipe.by"
    />
    <q-input
      class="newRecipeForm"
      filled
      autogrow
      label="Ingredients"
      v-model="recipe.ingredients"
    />
    <q-btn @click="updateRecipe" style="margin-left: 62%">update</q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    let localStorageArray = JSON.parse(localStorage.getItem("recipes")) || [];
    let recipe = ref({});
    const route = useRoute();
    const router = useRouter();

    const getRecipeById = (id) => {
      let array = [];
      array = localStorageArray;
      const index = array.findIndex((temp) => {
        return temp.id == id;
      });
      recipe.value = array[index];
    };

    const updateRecipe = () => {
      let array = [];
      array = localStorageArray;
      const index = array.findIndex((temp) => {
        return temp.id == recipe.value.id;
      });
      array[index] = recipe.value;
      localStorage.setItem("recipes", JSON.stringify(array));
      router.push("/recipes");
    };

    onMounted(() => {
      getRecipeById(route.params.id);
    });

    return { updateRecipe, getRecipeById, recipe };
  },
});
</script>

<style>
.newRecipeForm {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
}
</style>
