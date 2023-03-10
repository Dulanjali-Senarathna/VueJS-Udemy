const app = Vue.createApp({
    data(){
        return{
            detailsAreVisible:false,
            friends:[
                {id: 'manuel',
                 name:'Manuel Lorenz', 
                 phone:'0713725452',
                  email:'dulanjali@gmail.com'
                },
                {id: 'julie',
                name:'Julie Johnz', 
                phone:'0713725452',
                 email:'julie@gmail.com'
               },
            ]
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
    
});

app.mount("#app");