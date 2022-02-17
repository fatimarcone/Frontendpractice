function myFunction() {
    var x = document.getElementById("naveM");
    if (x.className === "nave") {
      x.className += " responsive";
    } else {
      x.className = "nave";
    }
  }


var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
  }


function validacion(){
  var name = document.getElementById("nombre").value;
  var apellido = document.getElementById("surname").value;
  var mail = document.getElementById("mail").value;
  var telefono = document.getElementById("phone").value;
  var mensaje = document.getElementById("texto").value;
  var error = document.getElementById("ErrorM");
  var text;

  error.style.padding= "15px";
  
  if (name.length <2){
    text = "Por favor, ingrese su nombre";
    error.innerHTML= text;
    return false
  }
  if (apellido.length <2){
    text = "Por favor, ingrese su Apellido";
    error.innerHTML= text;
    return false
  }
  if (mail.indexOf("@")== -1 || email.length <4){
    text = "Por favor, ingrese su direccion de email valida";
    error.innerHTML= text;
    return false
  }
  if (isNaN(telefono) || telefono.length <8){
    text = "Por favor, ingrese un numero telefonico valido";
    error.innerHTML= text;
    return false
  }
  if (mensaje.length < 8){
    text = "Por favor, ingrese un mensaje";
    error.innerHTML= text;
    return false
  }
  alert("Formulario Enviado!Muchas gracias")
  return true
}
