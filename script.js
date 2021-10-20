const appInstance = {
  data(){
      return {
        students:[],
        student: {
              firstName:"",
              lastName:"",
              email:""
          },
          refactoryLink:"https://www.refactory.ug"
      };
  },
  methods: {
      registerStudent:function(){
          console.log(this.students);
          this.students.push(Object.assign({}, this.student));
          console.log(this.students);
      }
  }
}

Vue.createApp(appInstance).mount('#app')