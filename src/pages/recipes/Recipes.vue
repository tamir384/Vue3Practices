<template>
  <q-page padding>
    <div style="margin-bottom: 3%" class="flex justify-center">
      <q-btn @click="addRecipe">Add Recipe</q-btn>
      <q-btn @click="search = !search">Search</q-btn>
      <q-input
        v-if="search"
        v-model="searchInput"
        filled
        style="width: 20%; margin-left: 40px"
      />
      <button
        v-if="search"
        @click="
          searchItem(searchInput);
          searchInput = '';
          search = false;
        "
      >
        submit
      </button>
    </div>
    <recipe-items ref="recipeItems"></recipe-items>
  </q-page>
</template>

<script lang="ts">
import RecipeItems from "src/components/recipes/RecipeItems.vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { templateRef } from "@vueuse/core";

export default defineComponent({
  components: { RecipeItems },
  setup() {
    let localStorageArray = JSON.parse(localStorage.getItem("recipes"));
    const router = useRouter();
    const searchArray = ref(localStorageArray);
    const recipeItems = templateRef("recipeItems");
    const addRecipe = () => {
      router.push("/addRecipe");
    };

    let search = ref(false);
    let searchInput = ref("");

    const searchItem = (model) => {
      searchArray.value = localStorageArray.filter((recipe) => {
        return recipe.name.toLowerCase().includes(model.toLowerCase());
      });
      recipeItems.value.searchInRecipes(searchArray.value);
    };

    return {
      addRecipe,
      localStorageArray,
      search,
      searchArray,
      searchInput,
      searchItem,
    };
  },
});
</script>

<style scoped></style>
