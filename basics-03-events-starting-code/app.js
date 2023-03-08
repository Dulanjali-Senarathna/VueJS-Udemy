const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:'',
      //fullname:'',
      lastName:''
    };
  },
  watch:{

    counter(value){
      if(value>50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },5000);
      }
    }
    
    // name(value){
    //   if(value===''){
    //     this.fullname='';
    //   }else{
    //     this.fullname = value + ' '+ this.lastName;
    //   } 
    // },
    // lastName(value){
    //   if(value===''){
    //     this.fullname='';
    //   }else{
    //     this.fullname = this.name + ' '+ value;
    //   } 
    // }
  },
  computed:{
    fullname(){
      console.log('Running again..');
      if(this.name === ''||this.lastName===''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName(){
      console.log('Running again..');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Senarathna';
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      event.preventDefault();
      alert('Submitted');
      
    },
    setName(event){
      this.name = event.target.value;
    },
    add (num){
      this.counter = this.counter+num
    },
    remove(num){
      this.counter = this.counter-num
    },
    resetInput(){
      this.confirmedName = '';
      this.name = '';
    }
  }
});

app.mount('#events');
