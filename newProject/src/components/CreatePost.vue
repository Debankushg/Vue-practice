<template>
    <div>
        <form @submit.prevent="createPost">
            <div>
                <label for="userId">Post User Id</label>
                <input type="text" autocomplete="off" id="userId" v-model="formData.userId" />
            </div>
            <div>
                <label for="title">Post Title</label>
                <input type="text" autocomplete="off" id="title" v-model="formData.title" />
            </div>
            <div>
                <label for="body">Post Body</label>
                <input type="text" autocomplete="off" id="body" v-model="formData.body" />
            </div>
            <button type="submit">Create Post</button>
        </form>


        <div v-if="newPost">
            <h2>New Post:</h2>
            <h3>Post ID: {{ newPost.id }}</h3>
            <h3>{{ newPost.userId }}. {{ newPost.title }}</h3>
            <p>{{ newPost.body }}</p>
        </div>


        <div v-if="errorMsg" class="error-message">{{ errorMsg }}</div>
    </div>
</template>

<script>
export default {
    name: 'CreatePost',
    data() {
        return {
            formData: {
                userId: '',
                title: '',
                body: '',
            },
            newPost: null,
            errorMsg: '',
        }
    },
    methods: {
        createPost() {

            console.log('Payload:', JSON.stringify(this.formData));
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    userId: this.formData.userId,
                    title: this.formData.title,
                    body: this.formData.body,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // console.log('Created post:', JSON.stringify(data, null, 2));
                    this.newPost = data;
                    this.errorMsg = '';
                    // Handle the response data here (e.g., update state, display on page)
                })
                .catch(error => {
                    this.errorMsg = 'Error creating post: ' + error.message;
                    console.error('Error creating post:', error);
                });
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