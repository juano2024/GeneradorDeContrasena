//creacion de variables primera clase

//para declarar variables se usa const (no cambia), let (si permite cambios) o var (no se usa casi :( )

let cantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let botonBorrar = document.getElementById('borrar');
let contrasena = document.getElementById('contrasena');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

//creacion de funciones

function generar() {
  let numeroDigitado = parseInt(cantidad.value);
  if (numeroDigitado < 8) {
    alert("Tienes que escribir mas de 8 caracteres");
  }
  let password= '';
  for(let i = 0; i < numeroDigitado; i++){
    let caracterAleatorio = cadenaCaracteres[Math.floor((Math.random() * cadenaCaracteres.length))];
    console.log(caracterAleatorio);

    password+=caracterAleatorio;
    
  }
  contrasena.value = password;
  //se llama a la funcion en esta linea
  validarContrasena();
}

//funcion para borrar

function borrar(){
    document.getElementById('cantidad').value= '';
    document.getElementById('contrasena').value='';
}

//funcion para validar

function validarContrasena(){
    const contrasena = document.getElementById('contrasena').value;
    const validacionMensaje = document.getElementById('validacion');

    const Longitud = contrasena.length >= 8;
    const Mayus = /[A-Z]/.test(contrasena);
    const Minus = /[a-z]/.test(contrasena);
    const Num = /[0-9]/.test(contrasena);
    const Especial = /[@#$%]/.test(contrasena);

    if(Longitud&&Mayus&&Minus&&Num&&Especial){
        validacionMensaje.textContent = 'Contraseña fuerte';
        validacionMensaje.style.color = 'green';
    }else{
        validacionMensaje.textContent = 'Contraseña debil';
        validacionMensaje.style.color = 'red';
    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//APUNTES 

//SOBRE EL FOR
//los bucles for usan 3 parametros inicializador, condicion y el contador
//en los () se pone la condicion que se quiere que se cumpla 
//en el bucle for.
//en este caso se dice que i se inicia en 0 indicando que inicia en A
//luego se dice hasta cuando se va realizar el bucle por eso i < numeroDigitado
//finalmente se cierra con un contador

//SOBRE EL CONSOLE.LOG()
//el sintaxis console.log() sirve mucho para verificar si se ha creado una variable
//o para probar un codigo

//typeof es un metodo nativo de js
//el metodo typeof me dice que tipo de dato esta recibiendo el compilador

//let texto = "texto";
//console.log(typeof texto);

//SOBRE EL MATH.RANDOM Y MATH.FLOOR
//Math.random es una funcion por eso se pone ()
//Math.floor redondea todos los valores

//SOBRE PARSEINT
//parseInt convierte todo lo que sea un numero a un string tambien es una funcion en este caso
//va convertir el valor de cantidad el cual es un numero a un string