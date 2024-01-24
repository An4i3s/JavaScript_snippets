//Normale ciclo for loop

let parent = ['a', 'b', 'c', 'd', 'e'];
console.log("Ciclo for");
for (let index = 0; index < parent.length; index++) {
console.log(parent[index]);    
}

//Ciclo For...Of
//Funziona solo  per gli Array!
console.log("Ciclo For...Of");
for (let child of parent) {
    console.log(child);
}


//Ciclo For...In
//Funziona con gli Oggetti
let parent1 = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
};
console.log("Ciclo For...in (Oggetti)");
for (let child in parent1) {
    console.log(child); //se volete la chiave
    console.log(parent1[child]); //se volete il valore
}


//Ciclo For...Each
//A differenza dei cicli for può essere concatenato
//utile in relazione a document.querySelectorAll() e EventListener
let parent2 = ['a', 'b', 'c', 'd', 'e'];
console.log("Ciclo For..Each");
parent2.forEach(child => {
    console.log(child);
});

//Metodo MAP
//se è necessario eseguire un'operazione su ogni elemento di un array
//non altera l'array originale
console.log("Metodo Map");
parent2.map(child =>  {
    console.log(child);
});


//Alternative al Ciclo For

//Metodo Every
//esegue una funzione su tutti gli elementi e restituisce true se questa restituisce true per tutti gli elementi
//non esegue la funzione per elementi vuoti
console.log("Metodo Every");
console.log(parent2.every((child) => {
    return child=='a' || child =='b'
}))

//Metodo Some
//verifica se gli elementi di un Array superano un test, fornito come funzione di Callback che viene eseguita una volta per ogni elemento dell'Array
//Il metodo restituisce true (e si ferma) se la funzione restituisce false per tutti gli elementi dell'array.
console.log("Metodo Some");
console.log(parent2.some((child) =>{
    return child=='a' || child =='b'
}
));

//Metodo filter
//se avete bisogno di un array con tutti gli elementi che corrispondo a un'espressione
//applica un'istruzione condizionale ad ogni elemento all'interno di un'array.
//se la condizione restituisce btrue l'elemento viene inviato all'array di output.
//restituisce risultati multipli (a differenza di find)
console.log("Metodo filter");
console.log(parent2.filter((child) => {
    return child=='a' || child =='b'
}));

//Metodo find
//per trovare il primo elemento di un array che soddisfa la funzione di test fornita
//se nessun valore soddisfa la funzione di test, viene restituito undefined.
console.log("Metodo find");
console.log(parent2.find((child) => {
    return child=='a' || child =='b'

}
));

//Metodo Reduce
//per calcolare un singolo valore utilizzando tutti gli elementi di un array
console.log(parent2.reduce((children, child) => {
    return children+child;
}
));