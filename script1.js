
let registrado = confirm ("Bienvenido a MoonLight!\nDesea iniciar sesión?");
let nuevo_usuario = false;
let carrito = false;

if (registrado) {

    let user = prompt ("Ingrese nombre de usuario.");
    let password= prompt("Ingrese una contraseña.");

    if (user === "Lucas" && password === "123456") {

        alert ("Bienvenido "+user+"!");
        carrito = confirm("Desea iniciar un nuevo carrito?");
        
        if (!carrito) {
    
            alert ("Cuando lo desee puede volver a ingresar para realizar una compra.");
        
        }

    }else {

        alert ("El usuario y/o contraseña ingresados son incorrectos.");

    }


}

if (!registrado) {

    nuevo_usuario = confirm ("Desea crear un nuevo usuario?");

}

if (nuevo_usuario) {

    let user = prompt ("Ingrese nombre de usuario.");
    let mail= prompt("Ingrese un mail.");
    let password= prompt("Ingrese una contraseña.");
    creador_de_usuarios (user, mail, password);
    
    if (user && password && mail){ 

        usuario2.bienvenida();
        todos_los_usuarios.push(usuario2);        
        carrito = confirm("Desea iniciar un nuevo carrito?");
        
        if (!carrito) {
    
            alert ("Cuando lo desee puede volver a ingresar para realizar una compra.");
        
        }
        
    }
    
    else{ 
    
        alert("Debe completar correctamente todos los datos antes de continuar.");
    
    }

}

if (!registrado && !nuevo_usuario){

    alert("Actualice la página!");

}

if (carrito) {

    let cod=parseInt(prompt("ingrese el código del porducto que desea agregar al carrito:"));
    let cantidad=parseInt(prompt("ingrese la cantidad que desea agregar de este producto (máximo 10 unidades):"));
    
    agregar_al_carrito (cod,cantidad);          
        
    let agregar_producto = confirm("Desea agregar otro producto?");
    
    while (agregar_producto) {
        let cod=parseInt(prompt("ingrese el código del porducto que desea agregar al carrito:"));
        let cantidad=parseInt(prompt("ingrese la cantidad que desea agregar de este producto (máximo 10 unidades):"));
        agregar_al_carrito (cod, cantidad);
        agregar_producto = confirm("Desea agregar otro producto?");

    }
    
    if (!agregar_producto) {

        arreglo_carrito.forEach(
            (el) => {
                alert ("Su carrito esta integrado por los siguientes productos:\n Producto: "+el.producto+" Precio: "+el.precio+" Cantidad: "+el.cantidad);
            }
        )


    }  
   
    let eliminar = confirm ("Desea quitar algun producto del carrito?");

    while (eliminar) {

        quitar_producto ();
        eliminar = confirm ("Desea quitar otro producto del carrito?");

    }

    if (!eliminar) {

    arreglo_carrito.forEach(
        (el) => {
            alert ("Su carrito esta integrado por los siguientes productos:\n Producto: "+el.producto+" Precio: "+el.precio+" Cantidad: "+el.cantidad);
        }
        )
        alert ("El costo total de su carrito es:\n$"+arreglo_carrito.reduce((acumulador, el)=> acumulador + el.precio * el.cantidad, 0));

    }

}





    
    


    


