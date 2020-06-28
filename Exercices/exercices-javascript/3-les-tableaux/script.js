// Exercice 1: ajoute "Ted" au tableau suivant

let castArray= ["Robin", "Barney", "Lily", "Marshal"];

castArray.push("Ted");

// Exercice 2: Affiche l'index de "Ted" dans le tableau dans la console

console.log(castArray[4])

// Exercice 3: Affiche l'index de Robin dans le tableau dans la console
console.log(castArray.indexOf("Robin"))

// Exercice 4: retire "Robin" du tableau
castArray.shift();
// Exercice 5: retire "Ted" du tableau
castArray.pop();
// Exercice 6: ajoute "Ted" et "Robin" au tableau
castArray.push("Ted","Robin" );
// Exercice 7: Affiche le nouvel index de Ted et Robin dans le tableau dans la console
console.log(castArray.indexOf("Ted") ,castArray.indexOf("Robin") );
// Exercice 8: à l'aide d'une boucle, affiche chaque élément du tableau dans la console
castArray.forEach(Element => 
    console.log(Element)
)
// Exercice 9: à l'aide de la méthode .findIndex(), trouve l'index de Lily, ensuite, affiche Lily dans la console
indexOfLily = (element)=>element=="Lily" ;
console.log(castArray[castArray.findIndex(indexOfLily)]);
// Exercice 10: à l'aide d'une boucle, multiplie par 2 chaque élément du tableau suivant, crée un nouveau tableau à l'aide de la méthode .push(), affiche le nouveau tableau dans la console

let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

NewArray= [] ;
multiplicationArray.forEach(element => {
    NewArray.push(element * 2);
});
console.log(NewArray);