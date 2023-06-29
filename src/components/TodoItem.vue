<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue'

const { todo } = defineProps({
    todo: Object
})

const store = useStore();
const title = ref(todo.title);
const updating = ref(false);
const updatingError = ref(false);

const updateTodo = () => {
    if (title.value.trim()) {
        updatingError.value = false;
        store.dispatch('updateTodo', { id: todo.id, title });
        updating.value = false;
    } else {
        updatingError.value = true
    }
}

</script>

<template>
    <li :class="`${todo.completed ? 'todo-item completed' : 'todo-item'}`">
        <input type="checkbox" class="todo-item-complete" :checked="todo.completed"
            @change="store.dispatch('completeTodo', todo.id)">
        <div class="todo-item-content">
            <transition name="op" mode="out-in">
                <p v-if="!updating" class="todo-item-title">{{ todo.title }}</p>
                <input type="text" :class="`${updatingError ? 'todo-item-input error' : 'todo-item-input'}`" v-model="title"
                    v-else>
            </transition>
        </div>
        <div class="todo-item-btns">
            <transition name="btn" mode="out-in">
                <button v-if="!updating" @click="updating = true">
                    <svg height="16px" width="16px" viewBox="0 0 512 512">
                        <use href="../../public/update.svg#path"></use>
                    </svg>
                </button>
                <button v-else @click="updateTodo">
                    <svg height="16px" width="16px" viewBox="0 0 448 512">
                        <use href="../../public/save.svg#path"></use>
                    </svg>
                </button>
            </transition>
            <button @click="store.dispatch('removeTodo', todo.id)">
                <svg height="16px" width="16px" viewBox="0 0 384 512">
                    <use href="../../public/remove.svg#path"></use>
                </svg>
            </button>
        </div>
    </li>
</template>