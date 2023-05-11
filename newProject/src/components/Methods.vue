<template>
    <h2>Add method - {{ add(5, 6, 1) }}</h2>

    <h2>Multiply method - {{ multiply(10) }}</h2>
    <h2>{{ name }}</h2>


    <div>
        <button v-on:click="baseMultiplier=10 ,increment(5,$event)">Change Number</button>
        <button v-on:click="changeName($event) ,increment(2,$event)">Change Name</button>
    </div>


    <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>


  <h2>{{ count }}</h2>
  <div>
    <button @click="increment(1)">Increment</button>
    <button @click="decrement(1)">Decrement</button>
  </div>


</template>

<script>
export default {
    name: "Methods",
    data() {
        return {
            items: ["apple", "banana", "orange"],
            baseMultiplier:5,
            count:0,
            name:'Deb',
        }
    },
    methods: {
        add(a, b, c) {
            return a + b + c
        },
        multiply(num){
           return num * this.baseMultiplier
        },
        changeName(event){
            this.name = "RadhaKrishn"
        },
        increment(num, event){
            this.count +=num
        },
        decrement(num){
            if(this.count>0){
                this.count -=num
            }
        }
    },
//     mounted() {
//     // Using map() to update the array
//     this.items = this.items.map((item) => item.toUpperCase());
//   },
}
</script>