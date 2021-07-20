const conditionalRendering = {
  data() {
    return { 
      programs: {
        vacist:true,
        catalyst:true,
        bootcamp:true
      } 
    }
  }
} 

Vue.createApp(conditionalRendering).mount('#app')
