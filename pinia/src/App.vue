<template>
  <main>
    <header>
      <img src="./assets/Pinialogo.svg" alt="Pinia Logo"/>
      <h1>Pinia Practice</h1>
    </header>

    <div class="new-task-form">
      <TaskForm/>
    </div>


    <nav class="filter">
      <button @click="filter = 'all'">All Task</button>
      <button @click="filter = 'favs'">Favs Task</button>
    </nav>


    <div class="task-list" v-if="filter=== 'all'">
      <p>you have {{ taskStore.totalCount }} task left to do</p>
      <div v-for="task in taskStore.tasks">
      <TaskDetails :task = "task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter=== 'favs'">
      <p>you have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs">
      <TaskDetails :task = "task"/>
      </div>
    </div>


  </main>
</template>

<script>
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import {useTaskStore} from './stores/TaskStore'



export default {
  components:{ TaskDetails,TaskForm},

setup(){
  const taskStore = useTaskStore()

  const filter = ref('all')

  return{taskStore ,filter}
}
}
</script>