<template>
  <q-page>
    <q-input
      style="margin-top: 10%"
      filled
      @blur="v$.name.$touch()"
      :error="v$.name.$error"
      class="newRecipeForm"
      label="Recipe Name"
      v-model="state.name"
    />
    <q-input
      class="newRecipeForm"
      filled
      @blur="v$.img.$touch()"
      :error="v$.img.$error"
      label="Recipe Image Link"
      v-model="state.img"
    />
    <q-input
      class="newRecipeForm"
      filled
      @blur="v$.by.$touch()"
      :error="v$.by.$error"
      label="Name Of The Publisher"
      v-model="state.by"
    />
    <q-input
      class="newRecipeForm"
      filled
      @blur="v$.ingredients.$touch()"
      :error="v$.ingredients.$error"
      autogrow
      label="Ingredients"
      v-model="state.ingredients"
    />
    <q-btn @click="uploadRecipe(state)" style="margin-left: 62%">Submit</q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, url } from "@vuelidate/validators";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = ref({
      name: "",
      img: "",
      id: Math.floor(Math.random() * 1500000).toString(),
      by: "",
      ingredients: "",
    });

    const rules = {
      name: { required },
      img: { required, url },
      by: { required },
      ingredients: { required },
    };

    const v$ = useVuelidate(rules, state);

    const uploadRecipe = (context) => {
      for (const key in state.value) {
        if (key != "id") {
          v$.value[key].$touch();
        }
      }
      if (!v$.value.$error) {
        let array = [];
        array = JSON.parse(localStorage.getItem("recipes")) || [];
        context.rating = 0;
        array.push(context);
        localStorage.setItem("recipes", JSON.stringify(array));
        alert("recipe has been added");
        router.push("/recipes");
      } else {
        console.log(v$.value);
        alert(
          "you have: " +
            v$.value.$errors.length +
            " field/s without or with wrong value"
        );
      }
    };

    return { state, uploadRecipe, v$ };
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
