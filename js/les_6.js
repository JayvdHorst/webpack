import {existy , thruty} from 'utils/conditions.utils';
import { multiply } from 'utils/multiply.utils';
import Student from 'entities/student';
import Classroom from 'entities/classroom';

/**
 * Opdracht 1: imports
 * Importeer conditions.utils.js
 *
 * Maak een object aan en check via existy() of hij bestaat
 * Maak een variabele aan maar geef hem nog geen vulling. Console.log() wat existy() teruggeeft
 */
let country = 'Spain';
console.log(existy(country));

let numberOne = 5;

console.log(multiply(numberOne));

/**
 * Opdracht 2: exports
 *
 * Maak een eigen util bestand aan met een functie die je handig lijkt om te hebben
 * Je kan aan iets simpels denken als je multiply functie
 * Maar misschien weet je iets anders te bedenken. Bijvoorbeeld een functie die je helpt
 * met random getallen. getRandom(from, to)
 * importeer je bestand hier en voer je functie uit
 */

/**
 * Opdracht 3: Analyseer de Student Class
 *
 * Importeer de Class en maak 3 studenten aan
 * Beantwoord de volgende vragen
 */
console.log('Wat is de prototype chain van een student?',
            'naam, achternaam en dan leeftijd');

console.log('Kan je na het aanmaken van een student nog bij zijn leeftijd?',
            'Ja maar dan zou je niet .getFullName() erachter moeten zetten');

/**
 * Opdracht 4: Student Class
 *
 * Console.log() de fullNames van je 3 aangemaakte studenten
 */
let student1 = new Student('Jay', 'vd Horst', '18');

console.log(student1.getFullName());

let classroom1 = new Classroom;

console.log(classroom1.addStudent(student1));



/**
 * Opdracht 5: Custom class
 *
 * Roep mij erbij als je langer dan 5 a 10 minuten over deze opdracht na moet denken
 * Dan help ik even
 *
 * Maak een eigen Classroom class met de volgende functionaliteiten:
 * addStudent() sla de student op in een array
 * getStudent() studenten kunnen ophalen
 * getAllStudents(). Deze functies geeft alle toegevoegde studenten terug
 * Mocht je meer methods weten: voeg deze zeker toe
 * maak een aantal classrooms aan
 */

/**
 * Opdracht 6: Custom class
 *
 * Maak een eigen School class met de volgende functionaliteiten:
 * addClassRoom()
 */