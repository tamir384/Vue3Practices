<template>
  <selector
    v-model="model"
    clearable
    :options="filteredOptions"
    use-input
    @filter="filterFn"
  />
  <span>{{ model }}</span>
</template>

<script>
import { ref, computed, watch } from "vue";
import selector from "../../components/selection/Selector.vue";

export default {
  components: {
    selector,
  },
  setup() {
    let model = ref(null);

    const options = [
      {
        name: "google",
        value: "google",
        field: "google",
        label: "Google",
      },
      {
        name: "facebook",
        value: "facebook",
        field: "facebook",
        label: "Facebook",
      },
      {
        name: "instagram",
        value: "instagram",
        field: "instagram",
        label: "Instagram",
      },
    ];

    const filteredOptions = ref(options);

    const filterFn = (val, update) => {
      update(() => {
        filteredOptions.value = options.filter((option) => {
          return option.name.indexOf(val) > -1;
        });
      });
    };

    return {
      filteredOptions,
      filterFn,
      model,
    };
  },
};
</script>
