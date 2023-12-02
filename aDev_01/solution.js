const fs = require('fs').promises;
async function convertDataToArray() {
    try {
      const data = await fs.readFile('./dataEntry2.txt', 'utf8');
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

/*let number_as_letters = {'one':'1', 'two':'2', 'three':'3', 'four':'4', 'five':'5', 'six':'6', 'seven':'7', 'eight':'8', 'nine':'9', 'zero':'0'}
const expresionRegular = /\b(?:one|two|three|four|five|six|seven|eight|nine|zero)\b/i;
const expresionRegular2 = /\b(?:one|two|three|four|eight|nine|seven|six|five)\b/g;*/
let number_as_letters = {'nine':'9','eight':'8','seven':'7','six':'6','five':'5','four':'4','three':'3','two':'2', 'one':'1', }

async function main() {
    try {
      dataArray = await convertDataToArray();
      console.log('printing data');
      console.log(dataArray);

      dataArray.forEach((line)=>{
        let firstNumber = undefined;
        let secondNumber;

            let temporaryLine = line;

            for(let key in number_as_letters){
              line = line.replace('oneight','1ight');
              line = line.replace('threeight','3ight');
              line = line.replace('fiveight','5ight');
              line = line.replace('twone','2ne');
              line = line.replace('twone','2ne');

              line = line.replace(`${key}`,`${number_as_letters[key]}`);
          }
          console.log('Line after converted leters numbers:');
          console.log(line);
            let tempArray = line.split('');
            tempArray.forEach((caracter)=>{
                
                
                if(!isNaN(Number(caracter))){
                    if(!firstNumber){
                        firstNumber = caracter;
                    }
                    secondNumber = caracter;
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
