'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                { text: 'Fare la spesa', done: false },
                { text: 'Studiare Vue.js', done: true },
                { text: 'Preparare la cena', done: false },
                { text: 'Lavarsi i denti', done: true },
            ],
            newTodo: '',
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo.trim(), done: false });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        },
    },
    computed: {
        remainingTodos() {
            return this.todos.filter(todo => !todo.done);
        },
    },
}).mount('#app');


