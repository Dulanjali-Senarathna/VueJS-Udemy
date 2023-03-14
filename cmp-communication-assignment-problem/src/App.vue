<template>
    <div>
        <active-user :username="user.name" :userage="user.age"></active-user>
        <user-data @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {
   data(){
    return{
        user:{
            name: 'Dulanjali ',
            age:31
        }
    }
   },
   methods:{
    setUserData(name,age){
        this.user ={
            name : name,
            age : +age //convert string to a number
        }
    }
   } 
}
</script>


