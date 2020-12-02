console.log("Hola desde index.js")

/* varables */


var x=10;
var y=55.55;
var nombre="pedro";
var text="mi nombre es pedro pérez";
console.log (y+x)
console.log (text)
var texto='hola a todos!\ soy pedro un estudiante que aprende a programar.\'';
document.write(texto);

/* operadores matematicos */
var x=10+5;
console.log (x)
var x=10;
var y =x+5+22+1000+50;
console.log (y)
var z=x*2;
console.log (z)
var y=y/4;
console.log(y)
var d=26%6;
console.log(d)

/*operadores de asignación*/
console.log (x-=y) 
console.log (4==10)

/*operadores de comparación "las variables deben ser el mismo tipo de dato"*/

/*operadores lógicos o booleanos "evaluan expresiones y retornan verdadero o falso"*/
console.log (4>2)&&(10<15);

/*operadores de cadena de texto*/
var texto1="Mi nombre es Pedro Pérez"
var texto2=" aprendo JavaScript"
document.write(texto1 + texto2);

var x="50";
var y="200";
document.write(x+y);

/*condicionales "if"*/
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
    alert("JavaScript is easy to learn.");
}
var myNum1 = 7;
var myNum2 = 10;
alert("JavaScript is easy to learn.");
    if (myNum1 > myNum2) {
}

/*condicionales "else"*/
var myNum1 = 7;
var myNum2 = 10;
alert("JavaScript is easy to learn.");
    if (myNum1 > myNum2) {
        alert("This is my first condition");
}
else{
    alert("This is my second condition");
}

var course = 3;
if (course ==1) {
document.write ("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write ("<h1>HTML CSS Tutorial</h1>");   
} else {
    document.write ("<h1>HTML JavaScript Tutorial</h1>");
}

/*switch "para evaluar multiples condiciones"*/
var day = 2;
switch (day) {
    case 1:
        document.write ("Monday");
        break;
    case 2:
        document.write ("Tuesday")
        break;
    case 3:
        document.write ("Wednesday");
        break;
    default:
        document.write ("Another day");           
}

/*bucles for "se usa para ejecutar varias veces el mismo código"*/
for (i=1; i<=5; i++) {
    document.write (i + "<br/>");
    }

/*While "mientras la condicion sea verdadera se repite el código"*/
var i=0;
while (i<=10) {
    document.write (i + "<br/>");
    i++;
}

/*Do while "Este bucle ejecuta el código una vez antes de evaluar si la condición es verdadera,
 y entonces el bucle se repetirá mientras esa condición sea verdadera."*/
 var i=20;
 do {
     document.write (i + "<br />");
     i++
 }
 while (i<=25);

 /*break "rompe el bucle. es decir sale o finaliza el bucle"*/
 for (i = 0; i <= 10; i++) {
     if (i == 5) {
         break;
     }
     document.write(i + "<br />");
 }

 /*Continue "El continue detiene solo una iteración del bucle y el bucle continua."*/
 for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}

/*Funciones -function- Una función es un bloque de código para ejecutar una tarea especifica.*/
function sayHello(name) {
    alert ("Hi, " + name);
}
     sayHello("David");
     //Alerts "Hi, David"
function sayHello(name, age ) {
    document.write(name + "is" + age + "years old.");
}
function myFunction(a, b){
    return a * b;
}
var x = myFunction(5,6);
//Return value will end up in x
//x equals 30

/*Ventanas Alert Ventana utilizada cuando quieres que la información llegue al usuario.*/
alert ("Do you really want to leave this page?");

/*Ventanas prompt "ventana de solicitud. Utilizada para pedir información 
al ususario y por ende él ingresa un valor."*/
var user = prompt("please enter your name");
alert(user);

/*Ventanas confirm "ventana de confirmación. Se utiliza para permitir al usuario validar o aceptar algo."*/
var result = confirm ("Do you really want to leave this page?");
if(result == true) {
    alert("tanks for visiting");
}
else {
    alert("thanks for staying with us");
}

/*Diferencia entre var y let*/
function varTest() {
    var p = 1;
    if (true) {
        var p = 2; // same variable
        console.log(p); // 2
    }
    console.log(p); // 2
}
varTest()

function letTest() {
    let p = 1;
    if (true) {
        let p = 2;  //different variable
        console.log(p);  // 2
    }
    console.log(p);  // 1
}
letTest()

/*let en bucles*/
for (let i = 0; i < 3; i++) {
    document.write(i);
}

/*Const "Tiene el mismo concepto de let, solo se diferencia es que son inmutables;
es decir, no perimiten que sean reasignadas."*/
const a="Hello";
document.write(a);
const b="bye";
document.write(b);

/*template literals "se utilizan para devolver variables en la cadena"*/
let name = 'David';
let msg = `Welcome ${name}`;
console.log(msg);
let c =8;
let e =34;
let msj = `the sum is ${c+e}`;
console.log(msj); 

/*bucles y funciones for...of*/
/*"en el siguiente ejemplo a la variable val se le asigna el
elemento correspondiente de la lista."*/
let list = ["x", "y", "z"];
for (let val of list){
    console.log(val);
}

/*funciones "Puedes no tener que escribir function y return, 
asi como algunos paréntesis y llaves."*/

/*Ahora conES6*/
const add = (x, y) => {
    let sum = x + y;
    console.log(sum);
}
add(2,4)

/*tambien se pueden colocar parámetros predeterminados en las funciones*/
const test = (a, b = 3, c =42) =>
{
    return a + b + c;
}
console.log (test(5)); //50

/*objetos*/
let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height); //12

let height = 5;
let health =100;
let athlete = {
    height,
    health
};

/*Nombres de propiedad calculados: usando [], podemos usar una expresión para
 un nombre de propiedad, incluyendo cadenas que se concatenan.*/
let promp = 'name';
let id = '1234';
let mobile ='08923';
let user2 = {
    [promp]: 'jack',
    [`user2_$(id)`]: `${mobile}`    
};
var i = 0;
var o = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};
var param = 'size';
var config = {
    [param]: 12,
    ['mobile' +
param.charAt(0).toUpperCase() +
param.slice(1)]: 4
};
console.log(config);
let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent = Object.assign({},
    person,student);

let persona = {
    name: 'Jose',
    age: 29
};
let newPersona = Object.assign({},
    persona);
newPersona.name = 'Froilan';
console.log(persona.name); //Jose
console.log(newPersona.name); //Froilan

/*Se muestra como asignar un valor a una propiedad de objeto
en la declaración*/
let personal = {
    name: 'jack',
    age: 18
};
let newPersonal = Object.assign({},
    person, {name:'Bob'});
    console.log(personal.name);
    console.log(newPersonal.name);

/*Desestructuración "se utiliza para descomponer un array
en diferentes variables"*/
let arr = ['1', '2','3'];
let [one, two, three] = arr;
console.log(one); //1
console.log(two); //2
console.log(three); //3
/*Descomponer un array devuelto por una función*/
let v = () => {
    return [1, 3, 2];
};
let [ones, , twos] = v();
console.log(v);
/*ejemplos descomponiendo objetos*/
let obj = {h:100, s: true};
let {h, s} = obj;
console.log(h); //10
console.log(s); //true
let m, n;
({m, n} = {m:'Hello', n:'Jack'});
console.log(m+n); //Hello Jack
/*Ejemplo sin utilizar paréntesis*/
let {f, g} = {f:'Hello', g:'Jose'};
console.log(f+g);
/*asignar el objeto a nuevos nombres de variables*/
var o = {h: 42, s: true};
var {h: foo, s: bar} = o;
//console.log(h);// error
console.log(foo); //42
/*Asignar valores predeterminados a variables*/
var objeto2 = {id: 43, name:"Jacks"};
let {ident = 10, age = 20}= objeto2;
console.log(age); //20
console.log(id) //42
/*Parametro Rest Usando un parámetro rest se puede pasar una cantidad de 
parámetros variables en una función.*/
function containsAll(arr, ...nums)
{
    for (let num of nums) {
        if (arr.indexof(num)=== -1)
        {
            return false;
        }
    }
    return true;
}
/*Parametro spread*/
/*antes*/
function myFunction(w,x,y,z){
    console.log (w+x+y+z);
}
var args = [1,2,3];
myFunction.apply(null, args.concat(4));
/*despues*/
const myFunction2 = (w,x,y,z) =>
{
    console.log = (w+x+y+z);
};
let args2 = [1,2,3];
myFunction2(...args2,4);

var dateFiels = [1970, 1, 1]; //1 Jan 1970
var date = new
date(...dateFiels);
console.log(date);

var arrdos = ["One", "Two", "five"];
arrdos.splice(2, 0, "Three");
arrdos.splice(3, 0, "Four");
console.log(arrdos);

let newArr = ['Three', 'Four'];
let arr3 = ['One', 
'Two', ...newArr, 'Five'];
console.log (arr3);

/*Spread en literals de objetos*/


let mergeObj =merge(obj1,obj2);
//{0: {foo: 'bar', x:42}, 1:{foo: 'baz', y:5 } }
let mergeObj2 = merge ({},obj1,obj2);
//{0: {}, 1: {foo: 'bar', x:42}, 2:{foo: 'baz', y:5}}

/*Clases "una clase es utilizada para crear multiples objetos"*/
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
//new
const square = new Rectangle (5,5);
const poster = new Rectangle (2,3);

var Square = class Rectangle {
    constructor (height, width){
        this.height = height;
        this.width = width;
    }

};

var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
/*método static, estos se utilizan para crear funciones 
de utilidad para una aplicación*/
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;

    }
    static distance (a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot (dx,dy);
    }
}
const p1 = new Point (7, 2);
const p2 = new Point (3, 8);
console.log (Point.distance(p1, p2));

/*Herencia "Utilizamos la palabra extends para crear un hijo de 
una clase o clase secundaria."*/
class Animal {
    constructor(name){
        this.name = name;
    }
    speak() {
        console.log(this.name + 'makes a noise.');
    }
}
class Dog extends Animal {
    speak() {
        console,log(this.name + 'barks.');
    }
}
let dog = new Dog ('Rex');
dog.speak();
/*Para utilizar los métodos del padre se utiliza la palabra super.*/
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + 'makes a noise.');
    }
}
class Dog1 extends Animal1 {
    speak() {
        super.speak(); //Super
        console.log(this.name + 'barks.');
    }
}
let Dog2 = new Dog1('Rex');
dog.speak();

/*Objeto map "Es utilizado para contener 
pares key/value (clave/valor)"*/
let Mapx = new Mapx ([['k1', 'v1'], ['k2', 'v2']]);
console.log(Mapx.size) //2
let Map3 = new Map3();
Map3.set('k1', 'v1').set('k2', 'v2');
console.log(Map3.get('k1')); //v1
console.log(Map3.has('k2')); //true
for (let kv of Map3.entries())
   console.log(kv[0] +":" + kv[0]);

//*Objeto set "Se utiliza para tener valores únicos*//
let set = new Set([1,2,4,2,59,9,4,9,1]);
console.log(set.size); //5

let setn = new setn();
setn.add(5).add(9).add(59).add(9);
console.log (setn.has(9));
for (let v of setn.values())
console.log(v);

/*Promises "es una mejora para la programacion asíncrona"*/
new Promise (function(resolve,reject) {
    //Work
    if (success)
         resolve(result);
    else
        reject(Error("failure"));     
});

function asyncFunc (work) {
    return new
    promise (function(resolve,reject)
    {
        if (work === "")
          reject(Error("nothing"));
        setTimeout(function() {
          resolve(work);
        }, 1000);
    });
}
asyncFunc("Work 1") //Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); //Task 2

}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result)
}, function(error) {
    console.log(error);
});
console.log("end");

/*Iteradores y generadores*/
let myIterableObj = {};
  myIterableObj[Symbol.iterator] = fuction* ('') 
  {
    yield (1); 
    yield (2); 
    yield (3);
    };
    console.log([...myIterableObj]);
function* idMaker (){
    let index = 0;
    while (index < 5)
    yield index++;
}    
var gen = idMaker ();
console.log(gen.next().value);
/*un objeto con 7 elementos usando Symbol.
 iterator y funciones generadoras.*/
const arr5 = ['0', '1','4','a','9','c','16'];
const my_obj = {
    [Symbol.interator] : function*()
{
    for(let index of arr) {
        yirld `${index}`;
    }
  }
};
const all = [...my_obj]
.map(i => parseInt(i, 10))
.map(Math.sqrt)
.filter((i) => i < 5)
.reduce((i, d) => i + d);
console.log(all);
/*modulos*/
//lib/math.js
export let sum = (x, y) =>
{ return x + y };
export let pi = 3.14;

//app.js
import * as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)

/*1 Metodos integrados*/
//antes
[4, 5, 1, 8, 2, 0].filter (function
    (x) {
    return x > 3;
}) [0];
//ahora
[4, 5, 1, 8, 2, 0].find(x => x > 3);
//obtener el indice del incremento

[4, 5, 1, 8, 2, 0].findIndex(x => x > 3);
/*2. repeticiones de strings*/
//antes
console.log(Array(3 + 1).join("foo")); // foofoofoo
//ahora
console.log("foo".repeat(3)); //foofoofoo
/*Busqueda de strings*/
//antes
"SoloLearn".indexOf("solo") === 0; //true
"SoloLearn".indexOf("solo") === (4 - "solo".length); //true
"SoloLearn".indexOf("lole") !== -1; //true
"SoloLearn".indexOf("olo", 1) !== -1; //true
"SoloLearn".indexOf("olo", 2) !== -1; //false
//ahora
"SoloLearn".startsWith("solo", 0); //true
"SoloLearn".endsWith("solo", 4); //true
"SoloLearn".includes("lole"); //true
"SoloLearn".includes("olo", 1); //true
"SoloLearn".includes("olo", 2); //false
