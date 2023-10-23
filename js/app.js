// console.log('Hello Vue')

// Salviamo in una variabile locale la funzione createApp; presa dalla variabile globale Vue
const { createApp } = Vue;

// Inizializziamo un'istanza dell'aplicazione Vue, invocando la funzione createApp
createApp ({
    data() {
        // oggetto
        return {
            // proprietà immagine o messaggio
            title: 'Hello Vue!',

            // proprietà immagine
            image: './img/Vue.jpeg',

            // proprietà input
            message: 'Yessss man'
        }
    },

    methods: {

        

    }





// invochiamo il metodo .mount( pre connettere l'istanza al tag HTML con id #app e renderizzare l'app
}).mount('#app')