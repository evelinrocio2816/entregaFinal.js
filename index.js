

const header =document.getElementById("header");
console.log(header);

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



































































