const appInstance = {
    data(){
        return {
            student:{
              firstname:'',
              lastname:'',
              email:''
            }
        }
    },
}

Vue.createApp(appInstance).mount('#app')
