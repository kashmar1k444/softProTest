<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore();
const title = ref('');
let error = ref(false);

const addTodo = () => {
    if (title.value.trim()) {
        error.value = false;
        const todo = {
            id: new Date().getTime(),
            title: title.value,
            completed: false
        }
        store.dispatch('addTodo', todo);
        title.value = ''
    } else {
        error.value = true;
    }
}

</script>

<template>
    <form @submit.prevent="addTodo" class="todo-form">
        <div class="todo-form-input">
            <input :class="`${error ? 'todo-form-error' : ''}`" type="text" v-model="title">
            <transition name="op">
                <p v-if="error">Please enter text</p>
            </transition>

        </div>
        <button>
            ADD TODO
        </button>
    </form>
</template>