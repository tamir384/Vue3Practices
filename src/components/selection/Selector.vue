<template>
  <q-select
    v-model="refValue"
    style="width: 50%"
    :options="options"
    label="please select"
  />
</template>

<script>
import { watch, ref } from "vue";

export default {
  props: {
    modelValue: String,
    options: Array,
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    let refValue = ref(props.modelValue);

    watch(
      () => refValue,
      (value) => {
        emit("update:modelValue", value);
      }
    );

    return { refValue };
  },
};
</script>
