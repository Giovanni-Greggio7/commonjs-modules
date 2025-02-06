// 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
const fullName = require("./names.js");
const hobbies = require("./hobbies.js");

function persona(){
    return {
        fullName : fullName("Giovanni", "Greggio"),
        hobbies : hobbies("videogiochi", "anime", "spritz")
    }
}

console.log(persona())