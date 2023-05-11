<template>
    <h2>Volune Tracker (0-20)</h2>
    <h3>Current Volume - {{ volume }}</h3>

    <div>
        <button @click="volume += 2">Increase</button>
        <button @click="volume -= 2">Decrease</button>
    </div>

    <input type="text" v-model="movie" />
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />
    <div>
        <button @click="movieList= movieList.concat(['Wonder Car'])">Add Movie</button>
    </div>
</template>

<script>
export default {
    name: 'Watcher',
    data() {
        return {
            volume: 0,
            movie: '',
            movieInfo: {
                title: '',
                actor: ''
            },

            movieList: ['Batman', 'Superman']

        }
    },
    methods: {},
    computed: {},
    watch: {
        volume(newValue, oldValue) {
            if (newValue > oldValue && newValue === 16) {
                alert('listen may damage your hearing')
            }
        },
        movie: {
            handler(newVal) {
                console.log(`calling API with name = ${newVal}`);
            },
            immediate: true,
        },
        movieInfo: {
            handler(newValue) {
                console.log(`Calling API with movietitle = ${newValue.title} and actor =${newValue.actor}`)
            },
            deep: true
        },
        movieList: {
            handler(newVal) {
                console.log(`Update List ${newVal}`);
            },
            //  deep:true
        }

    }
}
</script>