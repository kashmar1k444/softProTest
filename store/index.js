import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
      filter: "all",
    };
  },
  getters: {
    getTodos(state) {
      if (state.filter == "all") {
        return state.todos;
      }
      if (state.filter == "completed") {
        return state.todos.filter((el) => el.completed);
      }
      if (state.filter == "uncompleted") {
        return state.todos.filter((el) => !el.completed);
      }
    },
    getTodosCounter(state) {
      return state.todos.length;
    },
    getTodosCompletedCounter(state) {
      let counter = 0;
      state.todos.forEach((el) => (el.completed ? counter++ : false));
      return counter;
    },
    getTodosUncompletedCounter(state) {
      let counter = 0;
      state.todos.forEach((el) => (!el.completed ? counter++ : false));
      return counter;
    },
    getFilter(state) {
      return state.filter;
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.unshift(todo);
    },
    removeTodo(state, id) {
      let index = state.todos.findIndex((el) => el.id == id);
      if (index != -1) {
        state.todos = [
          ...state.todos.slice(0, index),
          ...state.todos.slice(++index, state.todos.length),
        ];
      }
    },
    completeTodo(state, id) {
      const index = state.todos.findIndex((el) => el.id == id);
      if (index != -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
    updateTodo(state, { id, title }) {
      const index = state.todos.findIndex((el) => el.id == id);
      if (index != -1) {
        state.todos[index].title = title;
      }
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
    removeTodo({ commit }, id) {
      commit("removeTodo", id);
    },
    completeTodo({ commit }, id) {
      commit("completeTodo", id);
    },
    updateTodo({ commit }, data) {
      commit("updateTodo", data);
    },
    setFilter({ commit }, filter) {
      commit("setFilter", filter);
    },
  },
});

export default store;
