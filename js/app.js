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
            message: 'Yessss man',

            gallery: [
                    'https://picsum.photos/seed/picsum/200/300',
                    'https://picsum.photos/200/300?grayscale',
                    'https://picsum.photos/200/300/?blur'
            ],

            paragraph: [
                'immagine a caso 1',
                'immagine a caso caso 2',
                'immagine a caso caso del caso 3'
            ],

            bgParagraph: [
                'bg-red',
                'bg-blue',
                'bg-green'

            ],

            items: [
                {
                    image: 'https://picsum.photos/seed/picsum/200/300',
                    paragraph: 'immagine a caso 1',
                    bgParagraph: 'bg-red'
                },
                {
                    image: 'https://picsum.photos/200/300?grayscale',
                    paragraph: 'immagine a caso caso 2',
                    bgParagraph: 'bg-blue'
                },
                {
                    image: 'https://picsum.photos/200/300/?blur',
                    paragraph: 'immagine a caso caso del caso 3',
                    bgParagraph: 'bg-green'
                }
            ]
        }
    },

    methods: {

            


    }





// invochiamo il metodo .mount( pre connettere l'istanza al tag HTML con id #app e renderizzare l'app
}).mount('#app')