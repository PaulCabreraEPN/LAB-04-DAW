//OBJETOS
//Constricción de un Objeto
const articule1 = {
    name:"Amazon Echo Dot",
    description:"Parlante inteligente",
    generation:"5.ª generación",
    model:2022,
    score: 4.6,
    address:{
        city:"Quito",
        telephone:"0984622128",
        street:"Calle E3A"
    },
    color:["Blanco","Azul","Negro"],
    state:true,
    reviews: 128498,
    sendProduct (){
        return `send product to ${this.address.city}`
    },
    sendNotification: function (){
        return `send notification to ${this.address.telephone}`
    }
}

//Agragamos un nuevo par clave-valor
articule1.bluetooth = true;

//Eliminamos un par clave-valor
delete articule1.reviews;

//Imprimimos algúnos valores del objeto
console.log(articule1.name);
console.log(articule1.color[0]);
console.log(articule1.state);
console.log(articule1.sendProduct());
console.log(articule1.sendNotification());

//Desestructuración de un Objeto
const articule2 = {
    name: "Dorbell Video Camera ",
    audio: "Bidireccional",
    video: "HD",
    alexa: true,
    color: "Negro",
    address:{
        city:"CUENCA",
        telephone:"0984622128",
        streets:
        {
            principal: "E3A",
            secondary:"S43"
        }
    }
}

//const {name,audio,video,alexa,color,address} = articule2;
//console.log(name,audio,video,alexa,color,address);

//const {name,audio,video,alexa,color,address:{streets}} = articule2;
//console.log(name,audio,video,alexa,color,streets);

const {name,audio, ...rest} = articule2;
console.log(name,audio,rest);

//Congelar un Objeto
//Congelar
Object.freeze(articule1)
console.log(Object.isFrozen(articule1));
//Agregar un nuevo par clave-valor
articule1.price=58.10;
//Comprobar
console.log(articule1.price); //undifined

//Copiar 2 objetos
const allarticules = {...articule1,...articule2};
console.log(allarticules);

//Uso del this
const articule3 = {
    name:"Teclado Cimetech",
    description:"Juego de teclado compacto de tamaño completo",
    model:2022,
    score: 4.2,
    caracteristicas:{
        inalambrico:true,
        ultrafina:true,
        tipo:["pc","Portatil","Notebook"]
    },
    color:["Blanco","Azul","Negro"],
    state:true,
    //No se puede usar el this con arrow functions 
    ShowTypes (){
        return `El tecldo trabaja bien en :  ${this.caracteristicas.tipo}`
    }
}
console.log(articule3.ShowTypes());

//Metodos en Objetos
console.log("Obtener las claves:",Object.keys(articule3))
console.log("Obtener los valores:",Object.values(articule3))
console.log("Obtener las claves y valores en un array:",Object.entries(articule3))

//Nombres Abreviados con ES6
const nameP = "USB";
const priceP = 35;
const capacidad = 126;
const colores = ["Rojo","Azul","Negro","Verde"];

const newarticle = {
    nameP,
    priceP,
    capacidad,
    colores
};

console.log(newarticle);

//ARREGLOS
const categorias = ["Tecnología","Electrodomésticos","Ropa","Comida","Accesorios"];
const puntuaciones = [1,2,3,,4,5,6];
const características = ["Televisón Android TCL","Negro",657.25,70,"Plana",true];

console.log("Número de categorías:", categorias.length);
console.log("Número de características:", características.length);
puntuaciones.length > 0 ? console.log("Categoría Existente") : console.log("Categoría inexistente");

//Recorrer
//FOR
for (let i=0; i<categorias.length; i++ ){
    console.log(categorias[i]);
    
}

//FOREACH
categorias.forEach((e,i)=>console.log(`${i+1}- ${e}`));

//MAP
const newcategories = categorias.map((e)=>`click -${e}`)
console.log(newcategories);

//METODOS
//push Inserta un elemento al final del arreglo.
categorias.push("Hogar");
console.log(categorias);

//unshift Inserta un elemento al inicio del arreglo.
categorias.unshift("Todos");
console.log(categorias);

//pop Remueve un elemento del final del arreglo.
categorias.pop();
console.log(categorias);

//shift Remueve un elemento del principio del arreglo.
categorias.shift()
console.log(categorias);

//find comprueba existencia de un alemento en el arreglo
const existe = categorias.find((e)=>e==="Todo");
console.log(existe);

//findIndex Muestra la posicion del elemento encontrado
const encontrar = categorias.findIndex((f)=>f==="Accesorios");
console.log(encontrar);

//Concat concatena 2 arreglos
const newArray = categorias.concat(puntuaciones)
console.log(newArray);

//Filter Filtra los elementos de un arreglo
const newCategoriesOne = categorias.filter((e)=>e.startsWith('A'))
console.log(newCategoriesOne);

//Includes Verifica si un elemento esta incluido 
console.log(características.includes(70));

//every - some

const carritoCompras = [
    {   product: "phone",
        qty: 1,
        price: 500
    },
    {   product: "Screen Protector",
        qty: 1,
        price: 10,
    },
    {
        product: "Memory Card",
        qty: 2,
        price: 20,
    }
]
// Todos los elementos deben cumplir la condición
const result = carritoCompras.every(e=>e.price>=500)
console.log(result);
//  Al menos un elemento debe cumplir la condición
const response = carritoCompras.some(e=>e.price>=500)
console.log(response);

//Reverse revierte el arreglo
console.log(categorias.reverse());

//Sort se usa para ordenar los elementos
console.log(categorias.sort());

//Reduce actua como un acumulador en cuanto a cantidades recorridad de un elemento

const estudiantes = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
];



const resultado = estudiantes.reduce((pre, act) => pre + act.age, 0);
console.log("Edad de los estudiantes: ",resultado);

const totalProductos = carritoCompras.reduce((pre,act)=>pre+act.qty,0)
console.log("Total de productos: ",totalProductos);

const totalPagar = carritoCompras.reduce((pre,act)=>pre+act.price,0)
console.log("Total a pagar con IVA: ",totalPagar+(totalPagar*0.12))

//Desestructuración
const datosProducto = ["Audifonos","Apple",250,true,"Inalámbricos"];
const [nombre,marca,precio,disponible,cable] = datosProducto;

console.log(nombre);
console.log(marca);
console.log(precio);
console.log(disponible);
console.log(cable);

//REST - OTORGA VARIOS VARIABLES A UN OBJETO ITERABLE

const [tomate, hongo, ...res] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

console.log(tomate);
console.log(hongo);
console.log(res);

//Spread - jUNTA 2 aRREGLOS - LO EXPANDE
const nameFriends = ["Peter","Juan","Luisa","Anahi","Mateus",'Pablo']
const namePets = ["Puka","Chochitos","Peggy","Tobby","Blanqui",'Coffe']


// spread operator
const newNames = [...nameFriends,...namePets]
console.log(newNames);