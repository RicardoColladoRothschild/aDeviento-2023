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

function returnColor(stringColor){
    const regex = /\b(?:\d+\s+)?([a-zA-Z]+)\b/;
    const result = stringColor.match(regex);

    return result[1];
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
            let currentGame;
            for(let j = 0; j < arrayMultidimensional[i].length;j++){
                const subSet = arrayMultidimensional[i][j].split(',');
                if(j===0){
                    currentGame= returnDigits(subSet[0]);
                    //games.push(temp); -> this must be move to the part of code where we confirm current game applies.
                }
                    subSet.forEach((set, indx)=>{

                        if(indx!==0){
                            const number =returnDigits(set);
                            const color = returnColor(set);

                            color_Objects[color] +=number;
                        }
                        
                    });


            }
                if((color_Objects.blue <= goal_Blue) && (color_Objects.red <= goal_Red) && (color_Objects.green <= goal_Green)){
                        games.push(currentGame)
                }


            color_Objects.blue = 0;
            color_Objects.green = 0;
            color_Objects.red = 0;
        }
    console.log(arrayMultidimensional);
    console.log(games);
  }
  main();
  const sum = games.reduce((accumulator, newNum)=>{
    return accumulator +newNum;
  },0);
  console.log(sum);