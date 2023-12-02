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

let number_as_letters = {'one':1, 'two':2, 'thre':3, 'fou':4, 'fiv':5, 'six':6, 'sev':7, 'eig':8, 'nin':9}
const expresionRegular = /\b(?:one|two|three|four|five|six|seven|eight|nine|zero)\b/i;
async function main() {
    try {
      dataArray = await convertDataToArray();
      console.log('printing data');
      console.log(dataArray);

      dataArray.forEach((line)=>{
        let firstNumber = undefined;
        let secondNumber;

            let temporaryLine = line;

            let tempArray = line.split('');
            tempArray.forEach((caracter,indx)=>{
                const resultado = expresionRegular.exec(temporaryLine);
                if(!isNaN(Number(caracter))){
                    if(!firstNumber){
                        firstNumber = caracter;
                    }
                    secondNumber = caracter;
                }else if(resultado){
                    if (!firstNumber) {
                      const matcher = resultado[0];
                        firstNumber = matcher;
                        console.log();
                      }
                      secondNumber = number_as_letters[(caracter + tempArray[indx+1] + tempArray[indx + 2])];
                      console.log(number_as_letters[(caracter + tempArray[indx+1] + tempArray[indx + 2])]);
                }
            });
            if (firstNumber !== undefined && secondNumber !== undefined) {
                objectArray.push(firstNumber + secondNumber);
              }           
            

            
    
            
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
