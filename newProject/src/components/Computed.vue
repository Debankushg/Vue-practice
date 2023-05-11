<template>
    <h2>{{ fulName }}</h2>

    <button @click="changeFullName">Change FullName</button>

    <h2>Total- {{ total }}</h2>
    <button @click="items.push({ id: 1, title: MURI, price: 50 })">Add Name</button>

    <h2> Method Total - {{ getTotal() }}</h2>

    <input type="text" v-model="country" />

    <template v-for="item in items" :key="item.id">
        <h2 v-if="item.price > 100">{{ item.title }} --{{ item.price }}</h2>
    </template>


    <h2 v-for="item in expenSiveItems" :key="item.id">{{ item.title }} {{ item.price }}</h2>
</template>

<script>
import { computed } from 'vue';

export default {
    name: computed,
    data() {
        return {
            firstName: 'Jonny',
            lastName: 'Brother',
            items: [
                {
                    id: 1,
                    title: 'TV',
                    price: 100,
                },
                {
                    id: 2,
                    title: 'TVS',
                    price: 500,
                },
                {
                    id: 3,
                    title: 'TVDD',
                    price: 250,
                },
                {
                    id: 4,
                    title: 'VECTOR',
                    price: 300,
                },
            ],
            country: '',
        }
    },
    methods: {
        getTotal() {
            return this.items.reduce((total, curr) => (total = total + curr.price), 0)
        },
        changeFullName(){
            this.fulName ='Reshmi Das'
        }
    },
    computed: {
        fulName: {
            get() {
                return `${this.firstName} ${this.lastName} is a good Boy`
            },
            set(value){
                const names = value.split(' ')
                this.firstName = names[0]
                this.lastName = names[1]
             }
        },
        total() {
            return this.items.reduce((total, curr) => (total = total + curr.price), 0)
        },
        expenSiveItems() {
            return this.items.filter((e) => e.price > 100)
        }

    }
}

</script>