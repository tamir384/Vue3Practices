<template>
  <div>
    <span>{{ "Total checked: " + totalChecked.length }}</span>
    <q-btn style="margin-left: 20%; color: green" @click="deleteChecked">
      Delete Checked
    </q-btn>
    <add-to-list @sendTodo="pushTodo"></add-to-list>
    <todo-item-list :todos="todos" v-model="todos"> </todo-item-list>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import AddToList from "src/components/todos/AddToList.vue";
import TodoItemList from "src/components/todos/TodoItemList.vue";
import { ref, computed } from "vue";

export default {
  components: { TodoItemList, AddToList },

  setup() {
    const todos = ref([]);

    const pushTodo = (todo) => {
      todos.value.push({ ...todo });
      console.log(todos.value);
    };

    const totalChecked = computed(() => {
      return todos.value.filter((todo) => todo.done);
    });

    const deleteChecked = () => {
      todos.value = todos.value.filter((todo) => !todo.done);
    };

    return {
      todos,
      pushTodo,
      totalChecked,
      deleteChecked,
    };
  },
};
</script>
