const fs = require('fs');
async function convertDataToArray(){
        
    let dataConverted;
    fs.readFile('./test.txt', 'utf8',(err,data)=>{
        if(err){
            console.log('error al leer data',err);
            return;
        }

        const line = data.split('\n');
        const filteredLines = line.filter(line=>line.trim() !=='');

        dataConverted = filteredLines;
        console.log(filteredLines);
        console.log(dataConverted);
    });
    return dataConverted;
}
let objectArray = [];
let dataArray = convertDataToArray();
console.log(dataArray);

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