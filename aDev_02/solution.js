const fs = require('fs').promises;
const goal_Red = 12;
const goal_Green = 13;
const goal_Blue = 14;
let color_Objects = {green:0,blue:0,red:0}
let games = [];
async function convertDataToArray() {
    try {
      const data = await fs.readFile('./input.txt', 'utf8');
      const lines = data.split('\n');
      const filteredLines = lines.filter(line => line.trim() !== '');
      
      return filteredLines;
    } catch (err) {
      console.error('Error al leer data', err);
      throw err; 
    }
  }

  function returnDigits(stringDigits){

    const regex = /\d+/g;
    return stringDigits.match(regex);
}

  async function main(){
    
  let arreglo = await convertDataToArray();
  let arrayMultidimensional = [];
  console.log(arreglo[0]);
    for(let i = 0; i < arreglo.length; i ++ ){
        arrayMultidimensional[i] = [];
        let subSet = arreglo[i].split(';');
            for(let j = 0; j < subSet.length; j++){
                arrayMultidimensional[i].push(subSet[j]);
                
            }
            arrayMultidimensional[i][0] = arrayMultidimensional[i][0].replace(':',",");

            
    }
        for(let i = 0; i < arrayMultidimensional.length; i++){
            for(let j = 0; j < arrayMultidimensional[i].length;j++){
                const subSet = arrayMultidimensional[i][j].split(',');
                if(j===0){
                    const currentGame = returnDigits(subSet[0]);
                    //games.push(temp); -> this must be move to the part of code where we confirm current game applies.
                }
            }
        }
    //console.log(arrayMultidimensional);
    console.log(games);
  }
  main();