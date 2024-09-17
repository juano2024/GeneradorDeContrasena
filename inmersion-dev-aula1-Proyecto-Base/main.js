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
  //se llama a la funcion para validar en esta linea
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
