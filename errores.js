/*error en la linea 368*/
var dateFiels = [1970, 1, 1]; //1 Jan 1970
var date = new
date(...dateFiels);
console.log(date);

//console.log no es una funcion
var arrdos = ["One", "Two", "five"];
arrdos.splice(2, 0, "Three");
arrdos.splice(3, 0, "Four");
console.log(arrdos);

let myIterableObj = {};
  myIterableObj[Symbol.iterator] = fuction*() 
  {
    yield 1; 
    yield 2; 
    yield 3;
    };
    console.log([...myIterableObj]);


    //no funciona, pegar en linea 559
    export let sum = (x, y) =>
{ return x + y; }
export let pi = 3.14;