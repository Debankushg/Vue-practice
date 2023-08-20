<template>
    <div>
        <button v-if="showLoadButton" @click="getData">Load Post >></button>
        <button v-if="!showLoadButton" @click="clearData">Clear Post >></button>
        <h3 v-if="errorMsg" class="error-message">{{ errorMsg }}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }}. {{ post.title }} </h3>
            <p>{{ post.body }}</p>
        </div>


    </div>
</template>

<script>
export default {
    name: 'HostList',
    data() {
        return {
            posts: [],
            errorMsg: '',
            showLoadButton: true,
        }
    },
    methods: {
        getData() {
            fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json()
            })
                .then(data => {
                    this.posts = data;
                    // this. errorMsg='';
                }).catch(error => {
                    this.errorMsg = 'Problem in DATA Loading: ' + error.message;
                    console.log('Error fetching data:', error)
                })
            this.showLoadButton = false;
        },
        clearData() {
            this.posts = []; // Clear the data
            this.showLoadButton = true;
            // this.errorMsg = ''; // Clear the error message
        },
    }
}
</script>

<style scoped>
h3 {
    text-align: left;
    color: orange;
}

.error-message {
    color: red;
}
</style>