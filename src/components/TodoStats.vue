<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();

const totalCounter = computed(() => store.getters.getTodosCounter);
const computedCounter = computed(() => store.getters.getTodosCompletedCounter);
const unomputedCounter = computed(
    () => store.getters.getTodosUncompletedCounter
);

const filter = ref("all");
</script>

<template>
    <transition name="op">
        <div class="todo-stats" v-if="totalCounter > 0">
            <div class="todo-stats-card">
                <p>Total</p>
                <div>{{ totalCounter }}</div>
            </div>
            <div class="todo-stats-card">
                <p>Completed</p>
                <div>{{ computedCounter }}</div>
            </div>
            <div class="todo-stats-card">
                <p>Uncompleted</p>
                <div>{{ unomputedCounter }}</div>
            </div>
            <select v-model="filter" @change="store.dispatch('setFilter', filter)">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </transition>
</template>
