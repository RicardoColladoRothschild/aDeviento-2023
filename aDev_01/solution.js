const fs = require('fs').promises;
async function convertDataToArray() {
    try {
      const data = await fs.readFile('./letters.txt', 'utf8');
      const lines = data.split('\n');
      const filteredLines = lines.filter(line => line.trim() !== '');
      console.log(filteredLines);
      return filteredLines;
    } catch (err) {
      console.error('Error al leer data', err);
      throw err; 
    }
  }

let objectArray = [];
let dataArray;

let objectArray_letters = [];
                        
let number_as_letters = {'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9}
async function main() {
    try {
      dataArray = await convertDataToArray();
      console.log('printing data');
      console.log(dataArray);

      dataArray.forEach((line)=>{
        let firstNumber = undefined;
        let secondNumber;
    
            let tempArray = line.split('');
            tempArray.forEach((caracter)=>{
                if(!isNaN(Number(caracter))){
                    if(!firstNumber){
                        firstNumber = caracter;
                    }
                    secondNumber = caracter;
                }else if(number_as_letters[caracter]){
                    if (!firstNumber) {
                        firstNumber = number_as_letters[caracter];
                      }
                      lastNumber = number_as_letters[caracter];
                    }
                }
            });
            objectArray.push(firstNumber + secondNumber);
            
            
            
            
    
            
    });
    console.log(objectArray);
        let nums = objectArray.map((e)=>Number(e));
        let sum = nums.reduce((accumulator, newNumber)=>{
            return accumulator + newNumber;
        },0);
        console.log(sum);
        /*
        let sumLetters = objectArray_letters.reduce((accumulator, newNumber)=>{
            return accumulator + newNumber;
        },0);
        console.log(objectArray_letters);*/
    } catch (err) {
      
      console.error('Error en la función principal', err);
    }
}
  main();
  console.log(dataArray);
