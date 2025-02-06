// 2 - hobbies.js
// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
// 2. Esporta la funzione dal file.

function hobbies(hobbyOne, hobbyTwo, hobbyThree){
    let interessi = [];
    interessi.push(hobbyOne, hobbyTwo, hobbyThree)
    return interessi
}

console.log(hobbies("videogiochi", "anime", "spritz"))

module.exports = hobbies;