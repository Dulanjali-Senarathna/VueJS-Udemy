<template>
    <section>
        <form @submit.prevent="submitData">
        <input type="text" placeholder="User name" v-model="enteredName">
        <input type="text" placeholder="Age" v-model="enteredAge"><br><br>
        <button>Set Data</button>
        </form>
    </section>
</template>

<script>
export default {
    emits:['set-data'],
    data(){
        return{
            enteredName:'',
            enteredAge:''
        };
    },
    methods:{
        submitData(){
            this.$emit('set-data',this.enteredName, this.enteredAge);
        }
    }
}
</script>