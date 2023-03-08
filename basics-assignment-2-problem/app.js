const app = Vue.createApp({
    data(){
        return{
            name:'',
            confiremedName:''
        }
    },

    methods:{
        showAlert(num){
            alert(num);
        },

        setOutput(event){
            this.name = event.target.value;
        },
        confirmInput(){
            this.confiremedName = this.name ;
        }
    }
});

app.mount("#assignment");