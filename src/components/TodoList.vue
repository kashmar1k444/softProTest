<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import TodoItem from './TodoItem.vue';

const store = useStore();
const todos = computed(() => store.getters.getTodos);
</script>


<template>
    <transition name="op" mode="out-in">
        <div v-if="todos.length == 0" class="list-clear">
            LIST CLEAR
        </div>
        <TransitionGroup v-else tag="ul" name="fade" class="todo-list">
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
        </TransitionGroup>
    </transition>
</template> 