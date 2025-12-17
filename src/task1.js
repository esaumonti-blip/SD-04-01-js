const arr = []

// Escribe tu codigo por debajo de esta linea

let j = 0;
for(let i=0; i<20; i++)
  {
    j++;
    arr.push(j);
    console.log(arr[i]);
  }

// Escribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
