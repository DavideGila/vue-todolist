// Descrizione:
// Rifare l'esercizio della to do list.
// Ogni todo sarà un oggetto, formato da tre proprietà:
//  `text`, una stringa che indica il testo del todo
// `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
//   id, un numero intero positivo incrementale  (univoco per ogni task)
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const {createApp} = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    id: 2,
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    id: 3,
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
}).mount('#app');