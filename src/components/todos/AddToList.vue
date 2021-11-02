<template>
  <div>
    <div>
      <q-input
        @blur="v$.text.$touch()"
        :error="v$.text.$error"
        type="text"
        style="width: 350px"
        v-model="state.text"
      />
      <q-btn style="top: 15px" @click="sendTodo" rounded>Submit</q-btn>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";

export default {
  name: "PageIndex",
  emits: ["sendTodo"],

  setup(props, { emit }) {
    const state = reactive({
      text: "",
      done: false,
    });

    const rules = {
      text: { required },
      done: { required },
    };

    const v$ = useVuelidate(rules, state);

    const sendTodo = () => {
      v$.value.$touch();
      if (!v$.value.$error) {
        emit("sendTodo", state);
        state.text = "";
        v$.value.$reset();
      } else {
        alert("Please insert value inside the input");
      }
    };

    return {
      state,
      sendTodo,
      v$,
    };
  },
};
</script>
