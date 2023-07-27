<template>
    <div>
        <h3 v-for="name in names" :key="name.fName"><slot :fName="name.fName" :lName="name.lName"></slot></h3>
    </div>
</template>

<script>
    export default {
        name:'NameList',
        data(){
            return{
                names:[
                    {
                        fName:'Jack',
                        lName:'wane'
                    },
                    {
                        fName:'Rock',
                        lName:'Paul'
                    },
                    {
                        fName:'Mark',
                        lName:'Sharkey'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>