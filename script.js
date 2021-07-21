const appInstance = {
    data(){
        return {
            student: {
                firstName:"john",
                lastName:"Doe",
                email:"jdoe@domain.tld"
            },
            refactoryLink:'https://www.refactory.ug'
        }
    },
}

Vue.createApp(appInstance).mount('#app')
