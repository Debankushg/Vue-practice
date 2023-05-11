<template>
    <div>
        <pre>
          {{ JSON.stringify(formValues, null, 2) }}
        </pre>
    </div>
    <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model.trim.lazy="formValues.name">
        </div>

        <div>
            <label for="profile">Profile Summary</label>
            <textarea id="profile" v-model="formValues.profileSummary" />
        </div>

        <div>
            <label for="country">Country</label>
            <select id="country" v-model="formValues.country">
                <option value="">Select a country</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Singapore">Singapore</option>
            </select>
        </div>


        <div>
            <label for="job-location">Job Location</label>
            <select id="job-location" multiple v-model="formValues.jobLocation">
                <option value="England">England</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="Singapore">Singapore</option>
            </select>
        </div>

        <div>
            <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
            <label for="remoteWork">Open to remote work</label>
        </div>

        <div>
            <label>Skill Set</label>
            <input type="checkbox" id="html" value="html" v-model="formValues.skillSet" />
            <label for="html">HTML</label>
            <input type="checkbox" id="css" value="css" v-model="formValues.skillSet" />
            <label for="css">CSS</label>
            <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet" />
            <label for="javascript">Javascript</label>
            <input type="checkbox" id="java" value="java" v-model="formValues.skillSet" />
            <label for="java">Java</label>
        </div>

        <div>
            <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience" />
            <label for="0-2">0-2</label>
            <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience" />
            <label for="3-5">3-5</label>
            <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience" />
            <label for="6-10">5-10</label>
            <input type="radio" id="10+" value="10+" v-model="formValues.yearsOfExperience" />
            <label for="10+">10+</label>
        </div>

        <div>
            <label for="age">Age</label>
            <input @keyup.enter="submitForm" @change="updateAge" type="number" id="age" v-model.number="formValues.age" />
        </div>

        <div>
            <button>Submit</button>
        </div>

    </form>
</template>


<script>

export default {
    name: "Form",
    data() {
        return {
            formValues: {
                name: '',
                profileSummary: '',
                country: '',
                jobLocation: [],
                remoteWork: 'no',
                skillSet: [],
                yearsOfExperience: '',
                age: 0,
            }
        }
    },
    methods: {
        submitForm(e) {
            // e.preventDefault()
            console.log('Form Values', this.formValues);
        },
        updateAge(){
            (this.formValues.age<0)? (this.formValues.age=0): (this.formValues.age>100)?(this.formValues.age=100):''
        }
    }
}
</script>

<style>
label {
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
}

input+label {
    font-weight: bold;
    display: inline-flex;
    margin-right: 20px;
}

input[type='text'],
textarea,
select {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>