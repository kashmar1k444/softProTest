<script setup>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import TodoStats from "./components/TodoStats.vue";
</script>

<template>
  <div class="wrapper">
    <h1>TODO LIST</h1>
    <AddTodo />
    <TodoStats />
    <TodoList />
    {{ $store.state.count }}
  </div>
</template>
