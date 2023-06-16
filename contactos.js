
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
const arrayPaciente= JSON.parse(localStorage.getItem('arrayPaciente'))||[];
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
    pacienteLocal();
    console.log(Paciente);
})
const pacienteLocal=()=>{
   localStorage.setItem("arrayPacinte",JSON.stringify(arrayPaciente)); 
}

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