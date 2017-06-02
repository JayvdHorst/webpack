/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */

import 'les_6'
/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */
var appOne = "Whatsapp";
var appTwo = "Facebook";
var appThree = "Snapchat";
var appFour = "Youtube";
var appFive = "Reddit";

var numberOne = 1;
var numberTwo = 2;
var numberThree = 3;
var numberFour = 4;
var numberFive = 5;

var booleanOne = true;
var booleanTwo = false;
var booleanThree = true;
var booleanFour = false;
var booleanFive = true;


/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */
var students = [
    "Jay",
    "Luuk",
    "Martijn"
];
var colors = [
    "red",
    "yellow",
    "blue"
];
var movies = [
    "badboys 1",
    "badboys 2",
    "badboys 3"
];
console.log(students);
console.log(colors);
console.log(movies);
/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */
var arrayPush = [];
arrayPush.push("Pushing");
console.log(arrayPush);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */
var arraySplice = ["Jay", "Luuk", "Martijn", "Menno"];
arraySplice.splice(2, 0, "Toom", "Luwke");
console.log(arraySplice);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */
var objectJay = {firstName:"Jay", age:18, eyeColor:"green/blue"};
var objectPhone = {brand: "Iphone", type: "5s", version: "IOS 10.3"};
var objectJacket = {brand: "The Sting", color: "black", price: "60"};
var objectLaptop = {brand: "Asus", color: "black & silver", processor: "Intel Core I7"};
var objectDesktop = {build: "custom build", color: "black", RAM: "16GB"};
var objectTV = {brand: "Samsung", color: "black", type: "flatscreen"};
var objectMouse = {brand: "Razer", color: "black", colorLight: "blue"};
var objectKeyboard = {brand: "Logitech", color: "black & red", colorLight: "blue"};
var objectHeadset = {brand: "Turtle Beach", color: "black & blue", MLG: "yes"};
var objectPencil = {brand: "HB", sharp: "no", eraser: "yes"};

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */
multiply(4, 4);
divide(4, 4);
plus(4, 4);
minus(4, 4);
function multiply(numberOne, numberTwo) {
    var answer1_6 =  numberOne * numberTwo;
    console.log(answer1_6);
}

function divide(numberOne, numberTwo) {
     var answer2_6 = numberOne / numberTwo;
     console.log(answer2_6)
}

function plus(numberOne, numberTwo) {
    var answer3_6 =  numberOne + numberTwo;
    console.log(answer3_6)
}

function minus(numberOne, numberTwo) {
    var answer4_6 =  numberOne - numberTwo;
    console.log(answer4_6)
}
/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */
var returnName = {};

function expect(firstName, Lastname) {
    return returnName = {firstName:"Jay", lastName:"van der Horst"};
}
console.log(expect());
/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

var student = {};

student = function showName() {

};

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */
    var students_2 = ["Jay", "Luuk", "Martijn", "Menno","Tom","Bertje","Henkie","willempie","hekkie","snek"];

    for (i = 0; i < students_2.length; i++) {
        text += students_2[i] + "<br>";
    }

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */
    var firstName = "Jay";
    var lastName = "van der Horst";

    var fullName = firstName + lastName;

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */
    console.log(Math.floor(Math.random() * 5));
    console.log(Math.floor(Math.random() * 10) + 1);
    console.log(Math.floor(Math.random() * 40) + 30);
    console.log(Math.floor(Math.random() * 100)- 100);

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
    { array : true, object : false, primitive : false });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
    { array : true, object : true, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
    { array : true, object : true, primitive : false });

console.log('Een factuur sla ik op in een:',
    { array : true, object : false, primitive : false });

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    { array : false, object : false, primitive : true });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */
    let number1 = 1;
    let number2 = 2;
    let number3 = 3;
    let number4 = 4;

    const string1 = "hi1";
    const string2 = "hi2";
    const string3 = "hi3";
    const string4 = "hi4";
/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.');
console.log('Wanneer gebruik je de const keyword', 'once you bind a value/object to a variable using const, you cant reassign to that variable.');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */
    var jezelf;
    jezelf.naam = "Jay";
    jezelf.leeftijd = 18;
    jezelf.lengte = 1.84;

    jezelf.family = ["Jay", "Hiltje", "Dylaine","Eric","Jan"];


/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */

var names = ['jay', 'menno', 'luuk', 'martijn'];
console.log(names.random());

/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */
var text = "Er was eens een mooi mannetje in de woestijn die luuk heten";
console.log(text.replace('luuk','menno'));

/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?', 'Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects via delegation that serve as prototypes. ');

/**
 * Opdracht 19: Zelf een custom prototype method maken
 * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
 * je bij elke array een empty() functie kunt aanroepen.
 * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
 */


/**
 * Opdracht 20: Monkey patching (?)
 * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
 * functies van Arrays te overschrijven met een eigen functie.
 * Maak 2 arrays aan en laat zien dat je code werkt
 */