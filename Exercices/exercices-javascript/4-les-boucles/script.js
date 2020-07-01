// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres 
//dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
let fizzBuzzArray = [];
for(let i = 0 ; i <= 100 ; i++)
{
  fizzBuzzArray.push(i);
}
/* Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens 
de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans 
la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par 
trois et par cinq affiche "fizzBuzz"*/

fizzBuzzArray.forEach(element =>{
    if(element % 3 == 0)
    {
        console.log("fizz")
    }else if(element % 5 == 0)
    {
        console.log("Buzz");
    }else if(element % 5 == 0 && element % 3 == 0)
    {
        console.log("fizzBuzz")
    }
})

// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020

let mois = 0 ;
const year = 2020, day = 13;

do{
    mois++;
    let dateTest = new Date(year,mois,day);
    if(dateTest.getDay()==5)
    {
        console.log(dateTest.getMonth());
    }
    
}while(mois < 11)