const fs = require('fs').promises;
async function convertDataToArray() {
    try {
      const data = await fs.readFile('./test.txt', 'utf8');
      const lines = data.split('\n');
      const filteredLines = lines.filter(line => line.trim() !== '');
      console.log(filteredLines);
      return filteredLines;
    } catch (err) {
      console.error('Error al leer data', err);
      throw err; // Propaga el error para que pueda ser manejado por el código que llama a esta función
    }
  }

let objectArray = [];
let dataArray;

async function main() {
    try {
      dataArray = await convertDataToArray();
      console.log('printing data');
      console.log(dataArray);
    } catch (err) {
      
      console.error('Error en la función principal', err);
    }
}
  main();
/*
dataArray.forEach((line)=>{
    let firstNumber;
    let secondNumber;

        let tempArray = line.split('');
        tempArray.forEach((caracter)=>{
            if(!isNaN(Number(caracter))){
                if(fristNumber){
                    firstNumber = Number(caracter)
                }
                secondNumber = caracter;
            }
        });
        objectArray.push(firstNumber);
        objectArray.push(secondNumber);

        firstNumber = undefined;
        secondNumber = undefined;
});
console.log(objectArray);*/