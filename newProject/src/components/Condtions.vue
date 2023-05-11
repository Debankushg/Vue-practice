<template>
    <h2 v-if="num === 0"> The num is ZERO</h2>
    <h2 v-else-if="num < 0">Number is Negative</h2>
    <h2 v-else-if="num > 0">Number is Positive</h2>
    <h2 v-else> The num is not a number</h2>



    <template v-if="display">
        <h3>Ram</h3>
        <h3>Sham</h3>
        <h3>Sita</h3>
    </template>

    <h3 v-show="showElement">Hi Dear</h3>

    <h3 v-for="(name, index) in names" :key="name">{{ index + 1 }}. {{ name }}</h3>

    <h2 v-for="name in fullNames" :key="name.first">{{ name.first }} {{ name.last }}</h2>

    <div v-for="actor in actors" :key="actor.name">
        <h2>{{ actor.name }}</h2>
        <h3 v-for="(movie,index) in actor.movies" :key="movie">{{index+1}}.{{movie}}</h3>
    </div>

    <h2 v-for="(value, key,index) in myInfo" :key="value">{{index+1}}.{{key}}- {{ value }}</h2>

    <!-- Conditions inside for loop -->
    <template v-for="names in newName" :key="names">
        <h2 v-if="names==='Ram'">{{ names }}</h2>
    </template>
</template>


<script>

export default {
    name: "Conditions",
    data() {
        return {
            num: 0,
            display: true,
            showElement: true,

            newName:['Ram' ,'Shyam' ,'Sita'],
            names: ['Dum', 'Deb', 'Ram', "mohan"],

            fullNames: [
                { first: 'Dumpy', last: 'warn' },
                { first: 'Clark', last: 'Das' },
                { first: 'Jenni', last: 'Ken' }
            ],

            actors: [
                {
                    name: 'Chris Bale',
                    movies: ['Batman', 'Inception']
                },
                {
                    name: 'Rasmika Mandana',
                    movies: ['Puspa', 'Titanic'],
                }
            ],
            myInfo:{
                Name:'Debankush',
                Job:"Software Engineer"
            }
        }
    }
}
</script>

<style></style>