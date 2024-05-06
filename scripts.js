const fomr = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
   fomr.style.left = "50%"
   fomr.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible"
   
   
}

function esconderForm(){
   fomr.style.left = "-300px"
   fomr.style.transform = "translateX(0)"
   mascara.style.visibility = "hidden"
}