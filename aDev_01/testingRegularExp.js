const texto = "two1nine";
const expresionRegular = /\b(?:one|two|three|four|five|six|seven|eight|nine|zero)\b/g;
const expresionRegular2 = /(?:\W|^)(one|two|three|four|five|six|seven|eight|nine|zero)(?:\W|$)/g;


const coincidencias = texto.match(expresionRegular2);

console.log(coincidencias);


const texto2 = "una vez habia unotwothree";
const expresionRegular3 = /\w*(two)\w*/g;

const coincidencias2 = texto2.match(expresionRegular3);

console.log(coincidencias2);

//using search:
const texto4 = "una onehabia unotwothree";
let resultado2 = texto4.search(/(\w)(one|two|three|four|five|six|seven|eight|nine|zero)(\w)/g);

//const coincidencias4 = texto2.match(expresionRegular4);
let slicing = texto4.slice()
console.log(resultado2);


var cadena = "asfaunadsljkconeaksmdaksmdalsktwoasl;dmasldmthree";

// Define la expresión regular para buscar "one", "two", "three" o "four"
var patron = /\b(?:one|two|three|four)\b/g;

// Busca todas las coincidencias en la cadena
var coincidencias = cadena.match(patron);

// Imprime las coincidencias encontradas
console.log(coincidencias);



//let number_as_letters = {'one':'1', 'two':'2', 'three':'3', 'four':'4', 'five':'5', 'six':'6', 'seven':'7', 'eight':'8', 'nine':'9'}
let number_as_letters = {'nine':'9','eight':'8','seven':'7','six':'6','five':'5','four':'4','three':'3','two':'2', 'one':'1', }

let text = 'eightwothree';
for(let key in number_as_letters){
    console.log(`${key}`,`${number_as_letters[key]}`);
    text = text.replace(`${key}`,`${number_as_letters[key]}`);
}
console.log(text);


//other try
let number_as_letters = {'one':'1', 'two':'2', 'three':'3', 'four':'4', 'five':'5', 'six':'6', 'seven':'7', 'eight':'8', 'nine':'9', 'zero':'0'}
let text = 'eightwothree';

// Obtén las claves en orden inverso
let keys = Object.keys(number_as_letters).reverse();

for(let key of keys){
    console.log(`${key}`,`${number_as_letters[key]}`);
    text = text.replace(new RegExp(key, 'g'), `${number_as_letters[key]}`);
}

console.log(text);