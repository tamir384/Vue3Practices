<template>
  <slot>
    <ul style="margin-top: 10%">
      <li v-for="(todo, index) in modelValue" :key="index">
        <q-checkbox v-model="todo.done" />
        <span :style="todo.done ? 'color:green' : 'color:red'">
          {{ todo.text }}
        </span>
        <q-btn style="margin-left: 10%" class="mb-20" @click="deleteTodo(index)"
          >Delete</q-btn
        >
      </li>
    </ul>
  </slot>
</template>

<script>
export default {
  props: {
    modelValue: Array,
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    let test = [];

    const deleteTodo = (rowIndex) => {
      console.log(props.modelValue);
      test = props.modelValue.filter((todo, index) => {
        return index != rowIndex;
      });
      console.log("test: ", test);
      emit("update:modelValue", test);
    };

    return {
      deleteTodo,
    };
  },
};
</script>
