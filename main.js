//Partie 1

//1

document.querySelector('h1').textContent = "Les attributs class et id";

//2

document.querySelector('h2').textContent = "Exercice 2 partie A";

//3

document.querySelectorAll('h2')[1].textContent = "Exercice 2 partie B";

//4

document.querySelector('p').textContent = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"

//5

document.querySelectorAll('p')[1].textContent = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

//Partie 2.1

//6

document.querySelector('h1').setAttribute('id','bigTitle');

//7

document.querySelector('div').setAttribute('class','container');

//8

document.querySelectorAll('h2').forEach(element => {
    element.setAttribute('class','title');
    console.log(element);
});

//9

document.querySelectorAll('p').forEach(element => {
    element.setAttribute('class','text');
    console.log(element);
});

//Partie 2.2

//10

document.querySelector('section').setAttribute('class','margin-bottom border-black padding');

//11

document.querySelectorAll('section')[1].setAttribute('class','margin-top border-black padding');

//12

document.querySelector('section>div').setAttribute('style','background-color: blue; border-color: red; border-width: 1px; border-style: solid; 10px; height: 20px; width: 20px;');