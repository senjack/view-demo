/*
    #01. Installation of vue as any other npm package.
        npm install vue
*/


/*
    #02. Install vue using the vue-cli tool.
        npm install vue
*/


/*
    #03. Properties of the Vue instance: data

        HTML
        -----
            <div id="app"> {{greet}} </div>
        
        JavaScript
        ----------
            Vue.createApp({
                data(){
                    return {
                    greet:"Hello Catalyst!"
                    }
                }
            }).mount('#app');


*/

/*
    #04. Properties of the Vue instance: methods

        HTML
        -----
            <div id="app">
                <button v-on:click=“greetMethod">
                    greet
                </button>
            </div>
        

        JavaScript
        ----------
            Vue.createApp({
                methods: {
                greetMethod: function () {
                    alert("Hello Catalyst!");
                },
                },
            }).mount("#app");
*/


/*
    #05. Declarative Rendering

        HTML
        -----
            <div id="counter"> 
                Counter: {{ counter }} 
            </div> 
        

        JavaScript
        ----------
            const Counter = {
            data() {
                return { counter: 0 }
            }
            } 

            Vue.createApp(Counter).mount('#counter')
*/

