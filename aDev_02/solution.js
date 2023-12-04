const fs = require('fs').promises;
const goal_Red = 12;
const goal_Green = 13;
const goal_Blue = 14;
let color_Objects = {'green':0,'blue':0,'red':0}
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

    
    //const regex = /\d+/g;
    const regex = /([0-9]+)/g;
    return stringDigits.match(regex);
}

function returnColor(stringColor){
    const regex = /\b(?:\d+\s+)?([a-zA-Z]+)\b/;
    const result = stringColor.match(regex);

    return result[1];
}

    let flag_validateGame = false;
  async function main(){
    
  let arreglo = await convertDataToArray();
  let arrayMultidimensional = [];
  
    for(let i = 0; i < arreglo.length; i ++ ){
        arrayMultidimensional[i] = [];
        let subSet = arreglo[i].split(';');
        
            for(let j = 0; j < subSet.length; j++){
                
                arrayMultidimensional[i].push(subSet[j]);
                
            }
            arrayMultidimensional[i][0] = arrayMultidimensional[i][0].replace(': ',",");

            
    }
    
        for(let i = 0; i < arrayMultidimensional.length; i++){
            let currentGame;
            for(let j = 0; j < arrayMultidimensional[i].length;j++){
                const subSet = arrayMultidimensional[i][j].split(',');
                console.log(subSet);
                if(j===0){
                    currentGame= Number(returnDigits(subSet[0]));
                    //games.push(temp); -> this must be move to the part of code where we confirm current game applies.
                }
                    subSet.forEach((set)=>{

                            
                            const number =Number(returnDigits(set));
                            const color = returnColor(set);

                                    if(color==='red'){
                                        color_Objects['red'] +=number;

                                    }else if(color==='blue'){
                                        color_Objects['blue'] +=number;

                                    }else if(color==='green'){
                                        color_Objects['green'] +=number;
                                    }
                        
                    });
                 

                    
            }
            console.log(currentGame);
            console.log(color_Objects);
            if((color_Objects.blue <= goal_Blue) && (color_Objects.red <= goal_Red) && (color_Objects.green <= goal_Green)){
                console.log('get into condition');
                    games.push(currentGame);
            }
                    



                currentGame = 0;
            color_Objects.blue = 0;
            color_Objects.green = 0;
            color_Objects.red = 0;
        }
    /*console.log(arrayMultidimensional);*/
    console.log(games);
    const sum = games.reduce((accumulator, newNum)=>{
        return accumulator + newNum;
      },0);
      console.log(sum);
  }
  main();
 