const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea

let j=1;
for(let i=0;i<arr.length;i++)
  {
    if(j===arr[i])
      {
        console.log(arr[i]);
      }
    else
      {
        arr.length=14;
        arr.splice(i, 1, j);
        console.log(arr[i]);
        
      }
      j++;
  }

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
