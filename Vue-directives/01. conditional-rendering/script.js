const conditionalRendering = {
  data() {
    return { 
      vacistProgram:true,
      catalystProgram:false
    }
  }
} 

Vue.createApp(conditionalRendering).mount('#app')
