const app = Vue.createApp({
    data(){
        return{
            enteredTask:'',
            tasks: [],
            taskListIsVisible:true
        }
    },
    computed:{
        buttonCaption(){
            return this.taskListIsVisible ? 'Hide List':'Show List'
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTask);
        },
        toggleTaskList(){
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    }
});

app.mount("#assignment")