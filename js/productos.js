let arreglo_productos =[];
class gestion_productos {

    inicio () {
        const url = './js/productos.json';
        fetch (url)
        .then( resp => resp.json())
        .then(resultado => {

          arreglo_productos = resultado.arreglo_productos;

            this.cargar_productos(arreglo_productos);
        })


        mostrar_carrito (arreglo_carrito);
        actualizar_contador ();
        suma_carrito ();

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
                                    <div><h3 class="text-m","padding" >${producto.producto}</h3><h4 class="text-s">Precio: $${producto.precio}</h4></div>
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
                    <div><h3 class="text-m","padding" >${producto.producto}</h3><h3 class="text-s">Precio: $${producto.precio}</h3></div>
                    <div><h4 class="text-s">Cantidad: ${producto.cantidad}</h4></div>
                    <a href="javascript:eliminar_carrito(${producto.codigo})"><div class="boton margin eliminar">ELIMINAR ARTICULO</div></a>`;
  
                    lista_carrito.appendChild (art);
  
        })

    }else {

        lista_carrito.innerHTML= `<h3 class="text-m" >Tu carrito esta vacio...</h3>`;

    }
    

}

// FUncion para agregar productos al carrito.
function agregar_carrito (cod) {

    let resultado = arreglo_carrito.some((art) => art.codigo ===cod);
    if (resultado == false) {
        let producto = arreglo_productos.find ((el) => el.codigo ===cod);
        producto.cantidad =1;
        arreglo_carrito.push(producto);
        sweet_alert("Producto agregado!");
        mostrar_carrito ();
        guardar_carrito ();
        actualizar_contador();
        suma_carrito ();

    }else{

        let i = arreglo_carrito.findIndex((object) => {
            return object.codigo === cod;
        });
        
        arreglo_carrito[i].cantidad ++;
        mostrar_carrito ();
        guardar_carrito ();
        actualizar_contador();
        sweet_alert("Cantidad de "+arreglo_carrito[i].producto+" actualizada!");
        suma_carrito ();
    }



}


function eliminar_carrito (cod) {
    Swal.fire({
        confirmButtonColor: "#a82492",
        cancelButtonColor: "#a82492",
        confirmButtonText: 'Si, eliminar',
        title: 'Desea eliminar este artículo?',
        background: 'rgb(58, 58, 58)',
        color: 'rgb(255, 255, 255)',
      }).then((result) => {
        if (result.isConfirmed) {
            let index = arreglo_carrito.findIndex((object) => {
            return object.codigo == cod;
            });
            arreglo_carrito.splice(index,1);
            mostrar_carrito ();
            guardar_carrito ();
            actualizar_contador();
            sweet_alert ("Articulo eliminado");
            suma_carrito ();
        }
    })

}

function guardar_carrito () {

    localStorage.setItem("arreglo_carrito", JSON.stringify(arreglo_carrito));

}

// Esta funcion y la siguiente se encargan de sumar la cantidad total de artiuclos en el carrito 
// y mostrarla en la parte inferior derecha de la página.

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
// creamos la funcion para cargar los productos en la página
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

function sweet_alert (texto) {

    Toastify({
        text: texto,
        duration: 1500,
        style: {
            background: "#a82492",
        }
        
      }).showToast();
}

function suma_carrito () {

    const suma_parcial = document.querySelector("#total_carrito");

    suma_parcial.innerHTML="";
    suma_parcial.classList.remove("total_carrito");

    /* creamos un apartado donde aparezca el total del carrito en pesos siempre que haya un articulo en el carrito */

    if (arreglo_carrito.length > 0) {

     const total_carrito =  arreglo_carrito.reduce ((acumulador, el) => acumulador + el.cantidad * el.precio, 0 );
     let suma_total= document.createElement("div");
     suma_parcial.classList.add("total_carrito");
     suma_total.innerHTML= `<h3 class="text-m" >Total carrito: $${total_carrito}</h3>`;
     
     suma_parcial.appendChild(suma_total);

    }

    


}