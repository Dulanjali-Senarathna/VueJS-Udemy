const app = Vue.createApp({
    data (){
        return{
            Name: "Dulanjali Senarathna",
            NameValue : "Dulanjali Senarathna",
            Age: 28,
            Url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        }
    },
    methods:{
        ageInFiveYears (){
           return this.Age  + 5;
        },
        getRandom(){
            return Math.random();
        }

    }
});

app.mount("#assignment");