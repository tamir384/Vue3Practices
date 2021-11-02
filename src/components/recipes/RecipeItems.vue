<template>
  <div class="flex justify-center">
    <q-card
      class="my-card foodCard"
      v-for="(recipe, index) in recipes"
      :key="index"
    >
      <img style="height: 250px" :src="recipe.img" />

      <q-card-section>
        <span class="text-h6 ingText">{{ recipe.name }}</span>
        <div>
          <q-btn @click="deleteItem(index)">Delete</q-btn>
          <q-btn @click="editItem(recipe)">Edit</q-btn>
        </div>
        <q-chip>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          {{ recipe.by }}
        </q-chip>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p class="ingText">{{ recipe.ingredients }}</p>
        <label for="ingText" role="button">read more</label>
      </q-card-section>
      <q-rating
        @click="uploadRating(recipe.rating, index)"
        v-model="recipe.rating"
        size="2em"
        :max="10"
        color="primary"
      />
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { data } from "../../model/constantRecipes";

export default defineComponent({
  setup(props, { emit }) {
    let localStorageArray = JSON.parse(localStorage.getItem("recipes"));
    const router = useRouter();

    const recipes = ref(null);

    const deleteItem = (rowIndex) => {
      let array = [];
      array = recipes.value.filter((item, index) => {
        return rowIndex != index;
      });
      recipes.value = array;
      localStorage.setItem("recipes", JSON.stringify(recipes.value));
    };
    const editItem = (recipe) => {
      router.push(`/editRecipe/${recipe.id}`);
    };

    const searchInRecipes = (newArr) => {
      recipes.value = newArr;
    };

    onMounted(() => {
      if (!localStorageArray || localStorageArray.length == 0) {
        localStorageArray = data;
        localStorage.setItem("recipes", JSON.stringify(localStorageArray));
      }
      recipes.value = localStorageArray;
      console.log(recipes.value);
    });

    return {
      recipes,
      searchInRecipes,
      deleteItem,
      router,
      editItem,
    };
  },
});
</script>

<style scoped>
.foodCard {
  width: 40%;
  height: 500px;
  margin-bottom: 3%;
  margin-left: 2%;
  margin-right: 2%;
}

.ingText {
  overflow: hidden;
  max-height: 35px;
}
</style>
