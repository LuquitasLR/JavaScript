const todos_los_usuarios = [];
let i = 0;
let usuario2= " ";

// Creamos la clase usuario con el constructor.

class usuario {


    constructor (user, mail, password) {    

        this.user = user; 
        this.mail = mail;
        this.password= password;
    
    }

    bienvenida () {

        alert("Bienvenido "+this.user+ "!\n"
        +"Te enviamos un mail a "+this.mail+" para que puedas activar tu cuenta!")

    }

}
// Este va a ser el usuario registrado en la pagina, con el cual se puede acceder.
const usuario1 = new usuario ("Lucas","Lucas@gmail.com","123456");
todos_los_usuarios.push(usuario1);


//cree la siguiente funcion para simular un creador de usuarios, aunque me gustaria saber como hacer para
//crear usuarios constantemente y que el id de usuario sea "usuarioi+1" y que vaya subiendo solo
//el numero.

creador_de_usuarios = (user,mail,password) => {

    return usuario2 = new usuario (user,mail, password)

}