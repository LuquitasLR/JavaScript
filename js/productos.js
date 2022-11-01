const arreglo_productos = [
    {   codigo: 1,
        producto: "Buzo con capucha",
        precio: 4500,
        imagen:"./imagenes/buzo.png",
        cantidad:1,
    },
    {
        codigo: 2,
        producto: "Jogger",
        precio: 3000,
        imagen:"./imagenes/jogger.png",
        cantidad:1,
    },
    
    {
        codigo: 3,
        producto: "Remera blanca",
        precio: 2000,
        imagen:"./imagenes/remera-blanca.jpg",
        cantidad:1,
    },
    {
        codigo: 4,
        producto: "Remera negra",
        precio: 2000,
        imagen:"./imagenes/remera-negra.jpg",
        cantidad:1,
    }
]

class producto {

    constructor (codigo,producto,precio,imagen,cantidad) {

        this.codigo=codigo;
        this.producto=producto;
        this.precio=precio;
        this.imagen=imagen;
        this.cantidad=cantidad;

    }


}

class gestion_productos {

    inicio () {
    
        this.cargar_productos (arreglo_productos);
        mostrar_carrito (arreglo_carrito);
        actualizar_contador ();

    }
    cargar_productos (productos) {

        const lista_productos= document.querySelector("#articulos")

        lista_productos.innerHTML="";

        if (productos.length !=0) {

            lista_productos.classList.add("section_catalogo","article_box");
        
            productos.forEach ( (producto) => {
                let art = document.createElement("article");
                art.classList.add("texto_articulos", "article_style");
                art.setAttribute("id","art"+producto.codigo);
        
                art.innerHTML =    `<div class="imagen_producto padding"><img src=${producto.imagen} width="200" ></div>
                                    <div><h3 class="text-m","padding" >${producto.producto}</h3><h4 class="text-s">Precio: ${producto.precio}</h4></div>
                                    <a href="javascript:agregar_carrito(${producto.codigo})"><div class="boton margin">AGREGAR AL CARRITO</div></a>`;
        
            
            lista_productos.appendChild (art);
            }
            )
        }else{
            alert ("No se encontraron productos disponibles")
        }
    }
    
}

function mostrar_carrito () {

    const lista_carrito = document.querySelector("#carrito");

    lista_carrito.innerHTML="";

        if (arreglo_carrito.length != 0) {

            arreglo_carrito.forEach((producto) => {
                let art = document.createElement("article");
                art.classList.add("texto_articulos", "article_style");
                art.setAttribute("id","cart"+producto.codigo);
  
                    art.innerHTML= `<div class="imagen_producto padding"><img src=${producto.imagen} width="100" ></div>
                    <div><h3 class="text-m","padding" >${producto.producto}</h3><h3 class="text-s">Precio: ${producto.precio}</h3></div>
                    <div><h4 class="text-s">Cantidad: ${producto.cantidad}</h4></div>
                    <a href="javascript:eliminar_carrito(${producto.codigo})"><div class="boton margin eliminar">ELIMINAR ARTICULO</div></a>`;
  
                    lista_carrito.appendChild (art);
  
            })

        }else {

            lista_carrito.innerHTML= `<h3 class="text-m" >Tu carrito esta vacio...</h3>`;

        }
    
      


}


function agregar_carrito (cod) {

    let resultado = arreglo_carrito.some((art) => art.codigo ===cod);
    if (resultado == false) {
        let producto = arreglo_productos.find ((el) => el.codigo ===cod);
        arreglo_carrito.push(producto);
        alert("Producto agregado!");
        mostrar_carrito ();
        guardar_carrito ();
        actualizar_contador();

    }else{

        // No encontre la manera de tomar el objeto del array y modificarle su cantidad, asique opte por eliminarlo y agregar un objeto nuevo con la cantidad aumentada.
        
        let resultado = arreglo_carrito.find((producto) => producto.codigo == cod);
        let producto_actualizado = new producto (resultado.codigo, resultado.producto, resultado.precio, resultado.imagen, resultado.cantidad+1);
        let index = arreglo_carrito.findIndex((object) => {
            return object.codigo == cod;
          });
        arreglo_carrito.splice(index,1);
        arreglo_carrito.push (producto_actualizado);
        mostrar_carrito ();
        guardar_carrito ();
        actualizar_contador();
        alert("Cantidad de "+resultado.producto+" actualizada!")
    }



}


function eliminar_carrito (cod) {
    let confirmar = confirm("Desea eliminar este producto?")
    if (confirmar) {

        let index = arreglo_carrito.findIndex((object) => {
            return object.codigo == cod;
          });
        arreglo_carrito.splice(index,1);
        mostrar_carrito ();
        guardar_carrito ();
        actualizar_contador();
 
    }
    
}

function guardar_carrito () {

    localStorage.setItem("arreglo_carrito", JSON.stringify(arreglo_carrito));

}

function actualizar_contador () {

    let total = contador_carrito ();

    let contador = document.querySelector("#boton_carrito");

    contador.innerHTML= "VER CARRITO ("+total+")";



}
function contador_carrito () {

    let cantidad_total = 0;
    arreglo_carrito.forEach ((producto) => {

        cantidad_total = cantidad_total + producto.cantidad;

    })

    return cantidad_total;

}

function cargar_productos (productos) {

    const lista_productos= document.querySelector("#articulos")

    lista_productos.innerHTML="";

    if (productos.length !=0) {

        lista_productos.classList.add("section_catalogo","article_box");
    
        productos.forEach ( (producto) => {
            let art = document.createElement("article");
            art.classList.add("texto_articulos", "article_style");
            art.setAttribute("id","art"+producto.codigo);
    
            art.innerHTML =    `<div class="imagen_producto padding"><img src=${producto.imagen} width="200" ></div>
                                <div><h3 class="text-m","padding" >${producto.producto}</h3><h4 class="text-s">Precio: ${producto.precio}</h4></div>
                                <a href="javascript:agregar_carrito(${producto.codigo})"><div class="boton margin">AGREGAR AL CARRITO</div></a>`;
    
        
        lista_productos.appendChild (art);
        }
        )
    }else{
        lista_productos.innerHTML=`<h3>No se encotraron productos con esas caracteristicas.</h3>`;
    }
}