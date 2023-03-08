const app = Vue.createApp({
    data(){
        return{
            counter:0
        };
    },
    computed:{
      result(){
        if(this.counter<37){
            return 'Not there yet';
        }
        else if(this.counter>37){
            return 'Too much!'
        }
        else{
            return this.counter
        }
      }  
    },
    watch:{
        result(value){
            const that = this;
            setTimeout(function(){
                that.counter = 0
            },5000);
        }
    },
    methods:{
        addNumber(num){
            this.counter = this.counter + num;
        }
    }
});

app.mount("#assignment")