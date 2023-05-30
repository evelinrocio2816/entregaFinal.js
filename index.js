
console.log("Hola");
const header =document.getElementById("header");
console.log(header);






class Medico{
    constructor(id,nombre, especialidad, img,turnos){
        this.id=id;
        this.nombre=nombre;
        this.especialidad=especialidad;
        this.img=img;
        this.turnos=turnos;
    }
}
const medico1 = new Medico(1, "Matias Solari", "Neurocirugia","./img/solari.jpg",true);
const medico2 = new Medico(2,"Jose Bulacio", "Neurocirugia", "./img/Bulacio.jpg",true);
const medico3 = new Medico(3,"Maximiliano Gimenez"," Neurocirugia","./img/maxi.jpg",false);
const medico4 = new Medico(4,"Andres Moine","Neurocirugia","./img/moine.avif",true);
const medico5 = new Medico(5, "Angeles casale","Neurocirugia","./img/casale.jpg",true);
const medico6 =new Medico(6,"Agustina Pico","Neurocirugia","img/fondo1.avif",true);
const medico7 = new Medico(7,"Esteban Palazzolo","Neurocirugia","./img/palazzolo.avif",true);
const medico8 = new Medico(8,"Eduardo Seoane","Jefe Neurocirugia","./img/seoane.webp",false);
const medico9 = new Medico(9,"Cecilia Valdes Hidalgo", "Neurocirugia","./img/cecilia.jpg",true);
const medico10 = new Medico(10,"Dimitra Farace", "Orl","./img/farace.jpg",true);
const medico11= new Medico(11,"Daniela Rodriguez","Fonoaudiologia","./img/daniela.jpg",true);
const medico12 = new Medico(12,"Veronica Martinez","Orl","./img/veronicaMartinez.jpg",false);
const medico13 = new Medico(13,"Agustin Dorman","Neurocirugia","./img/imagenInicio.jpg",false);
const medico14=new Medico(14, "Miguel Amor", "Cardiologo","./img/miguel.jpg",true);
const medico15 = new Medico(15,"Florencia Scheraglio", "Neurocirugia","./img/scheraglio.jpg", false);
const medico16 =new Medico(16,"Mariano Marrodan","Neurologia","./img/fondo1.avif",true);
const medico17=new Medico(17,"Mariana Thea","oftalmogia","./img/marianaThea.jpg",true);
const medico18 = new Medico(18,"Carlos Lopez","Kinesiologia","./img/kinesio.png",false);

const medicos=[medico1,medico2,medico3,medico4,medico5,medico6,medico7,medico8,medico9,medico10,medico11,medico12,medico13,medico14,medico15,medico16,medico17,medico18];
//console.log(medicos);

 //Json
    localStorage.setItem("medicos",JSON.stringify(medicos));
    const objetoMedicos = JSON.parse(localStorage.getItem('medicos'));
   // console.log(objetoMedicos);

const misTurnos=[];
let   html ="";

medicos.forEach(el =>{
    //utilizo un operador TERNARIO//si esta rojo no hay turnos
    const classCard = el.turnos ? "card": "redCard"
    html +=`
    
    <div class=${classCard}>
    <img class="imgMedicos" src=${el.img}>
    <ul>    
    <h1 class="titulo-card">MEDICO</h1>
 <p><b>Nombre:</b>  ${el.nombre}</p>
 <p><b>Especialidad:</b> ${el.especialidad}</p>
 <button id="${el.id}" class="Button" onclick=sacarTurno('${encodeURIComponent(JSON.stringify(el))}')>Sacar Turno</button>
 <button id="${el.id}" class="Button" onclick=cancelarTurno('${encodeURIComponent(JSON.stringify(el))}')>Cancelar Turno</button>
 </ul>

 </div>
 `
}) 

const contenedorMedicos= document.getElementById("contenedorMedicos").innerHTML= html
function sacarTurno(medicos) {
let m=JSON.parse(decodeURIComponent(medicos))
console.log("Turno Asignado para el Dr: "+ m.nombre + ", Especialidad: " + m.especialidad); 
Swal.fire({
    title:"En Hora Buena",
    text:("Turno Asignado para el Dr: "+ m.nombre + ", Especialidad: " + m.especialidad),
    icon: "success",
    confirmButtonText:"Aceptar",
})
misTurnos.push(m);
console.log(misTurnos);
}


function cancelarTurno(idACancelarTurno) {
let id= JSON.parse(decodeURIComponent(idACancelarTurno))
console.log("Turno con el Dr: " + id.nombre +", especialidad: " + id.especialidad + " Ah sido Cancelado" );  
Swal.fire({
    title:"¿Estas seguro que quieres cancelar el turno?",
    text:("Turno con el Dr: " + id.nombre +", especialidad: " + id.especialidad + " va a ser Cancelado" ),
    icon: "warning",
    confirmButtonText:"Yes!",
    showCancelButton:true,
    cancelButtonText:"No"
}).then((result)=>{
    if(result.isConfirmed){
misTurnos.pop();
console.log(misTurnos);
Swal.fire({
    title:"Turno cancelado",
    icon:"success",
    confirmButtonText:"Aceptar",
})
 }
})

} 

//FORMULARIO

const  container=document.getElementById("container");
console.log(container);

class paciente{
    constructor(nombre, apellido, dni, email,date){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.email=email;
        this.date=date;
    }
}
const arrayPaciente=[];
const formulario=document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    Swal.fire({
        icon: "success",
        title:"Formulario Enviado",
        confirmButtonText:"Ok!"
    })
    e.preventDefault();

    const nombre= document.getElementById("nombre");
    const apellido= document.getElementById("apellido");
    const dni = document.getElementById("dni");
    const telefono=document.getElementById("telefono");
    const email= document.getElementById("email");
    const date = document.getElementById("date");
    
    const Paciente=  new paciente(nombre.value, apellido.value, dni.value, telefono.value,email.value, date.value );

    arrayPaciente.push(Paciente)
    console.log(Paciente);
})

localStorage.setItem("arrayPacinte",JSON.stringify(arrayPaciente));
const objetoPaciente = JSON.parse(localStorage.getItem('arrayPaciente'));
// console.log(objetoPaciente);


const btn = document.getElementById('button');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_os577xj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Toastify({
        text:"Formulario Enviado",
        gravity:"bottom",
        position:"right",
        duration:"4000",
        style:{background:"linear-gradient(green)"},
      }).showToast();
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});


const footer=document.getElementById("footer");
console.log(footer);









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


















































































