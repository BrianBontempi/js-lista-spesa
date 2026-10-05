// Lista della spesa
const listaSpesa = ["Pane", "Latte", "Uova", "Frutta", "Verdura"];

// Ciclo for per stampare gli elementi della lista
for (let i = 0; i < listaSpesa.length; i++) {
    console.log(listaSpesa[i]);
}


// Recupero la lista in pagina
const listElement = document.getElementById("lista");

// Inizializziamo il contatore per il ciclo while
const shoppingList = ["Biscotti", "Lasagne", "Pizza", "Surgelati"]
let counter = 0;

// Ciclo while per stampare gli elementi della lista in console e in pagina
while (counter < shoppingList.length) {
    console.log(shoppingList[counter]);
    listElement.innerHTML += `<li>${shoppingList[counter]}</li>`;
    counter++;
}