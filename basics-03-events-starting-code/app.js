const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
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
