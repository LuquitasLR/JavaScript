
const producto1 = {
    codigo: 1,
    producto: "buzo sin capucha",
    precio: 4000,
}
const producto2 = {
    codigo: 2,
    producto: "buzo con capucha",
    precio: 4500,
}
const producto3 = {
    codigo: 3,
    producto: "jogger",
    precio: 3000,
}
const producto4 = {
    codigo: 4,
    producto: "jean",
    precio: 4000,
}
const producto5 = {
    codigo: 5,
    producto: "remera negra lisa",
    precio: 2000,
}
const producto6 = {
    codigo: 6,
    producto: "remera blanca lisa",
    precio: 2000,
}

const arreglo_carrito = [];

let cantidad =1;

function agregar_al_carrito (cod,cantidad) {
    
    if (cantidad<1 || cantidad>10) {

        alert ("igrese una cantidad valida")
   
    }

    if (cod<1 || cod>6) {

        alert ("Ingrese un código válido")
    
    }

    switch (cod) {
        
        case 01: 
            producto1.cantidad = cantidad;
            arreglo_carrito.push(producto1);
            return arreglo_carrito;
        case 02: 
            producto2.cantidad = cantidad;
            arreglo_carrito.push(producto2);
            return arreglo_carrito;
        case 03: 
            producto3.cantidad = cantidad;
            arreglo_carrito.push(producto3);
            return arreglo_carrito;
        case 04: 
            producto4.cantidad = cantidad;
            arreglo_carrito.push(producto4);
            return arreglo_carrito;
        case 05: 
            producto5.cantidad = cantidad;
            arreglo_carrito.push(producto5);
            return arreglo_carrito;
        case 06: 
            producto6.cantidad = cantidad;
            arreglo_carrito.push(producto6);
            return arreglo_carrito;

    }

}

