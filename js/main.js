
let gestor;
let arreglo_carrito =[];

// Evento que inicia cuando se carga la pagina
document.addEventListener('DOMContentLoaded', () => {

    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    arreglo_carrito = JSON.parse( localStorage.getItem('arreglo_carrito') ) || [];

    gestor = new gestion_productos();
    gestor.inicio();
    

})



let boton = document.getElementById("boton_buscar");

boton.addEventListener("click",buscar);

function buscar () {
    value = document.querySelector("#serch_value").value;
    let resultado = arreglo_productos.filter ((art) => art.producto.toLowerCase().includes(value.toLowerCase()));
    cargar_productos (resultado);
}


