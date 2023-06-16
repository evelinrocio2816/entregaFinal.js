

const header =document.getElementById("header");
console.log(header);

//setInterval
const titulo=document.getElementById("titulo");

const letras= ["B","Bi","Bie","Bien","Bienv","Bienve","Bienven","Bienveni","Bienvenid","Bienvenido","Bienvenidos",
"Bienvenidos a"," Bienvenidos a T","Bienvenidos a Tu","Buenvenidos a Tur","Bienvenidos a Turn","Bienvnidos a Turno",
"Bienvenidos a Turnos","Bienvenidos a Turnos o","Bienvenidos a turnos on","Bienvenidos a Turnos onl","Bienvenidos a Turnos onli"
,"Bienvenidos a Turnos onlin","Bienvenidos a Turnos online","Bienvenidos a Turnos online .","Bienvenidos a Turnos online.c"
,"Bienvenidos a Turnos online.co","Bienvenidos a Turnos online.com",];

let index=0;
setInterval(() => {
   titulo.textContent = letras[index];
   index = (index + 1) % letras.length;
 }, 50);
 
//Login

const btnDos=document.getElementById("btnDos");
 
const usuarioAutorizado="admin";
const passwordAutorizado="1234";
btnDos.addEventListener("click", () =>{
Swal.fire({
    title:"inicio de sesión",
    imageUrl:"/img/imagenInicio.jpg",
    html:`<input class="m2" type="text" id="usuario" placeholder="usuario">
    <input class="m2" type="password" id="password" placeholder="password">`,
    confirmButtonText:"Enviar",
    showCancelButton:true,
    cancelButton:"Cancelar",
}).then((result)=>{
    if(result.isConfirmed) {
        let usuario=document.getElementById("usuario").value;
        let password=document.getElementById("password").value;
        //ENVIO A OTRA PAGINA
        if(usuario===usuarioAutorizado && password===passwordAutorizado){
            window.location.href = "contactos.html";
            
            
        }
        
    }
})
})


const fondo2=document.getElementById("fondo2");
console.log(fondo2);


const footer=document.getElementById("footer");
console.log(footer);



































































