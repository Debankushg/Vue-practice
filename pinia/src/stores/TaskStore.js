import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "Hello Eveveryone", isFav: false },
            // { id: 1, title: "I am Traveling", isFav: false },
            // { id: 1, title: "Enjoing a weeekened", isFav: false },
            // { id: 2, title: "Hello India", isFav: true },
            { id: 2, title: "User USing", isFav: true },
        ],
        name: 'DEBA',
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount:(state) => {
            return state.tasks.length
        }
    }, 
    actions:{
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id!== id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    },
})