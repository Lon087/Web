//menu lateral
const $openClose = document.getElementById("open-close"),
      $aside = document.getElementById("aside");

$openClose.addEventListener("click",()=>{
    $aside.classList.toggle("desplegar")
})
//perfil
const $Perfil = document.getElementById("perfil"),
      $section = document.getElementById("aside2");

$Perfil.addEventListener("click",()=>{
    $section.classList.toggle("desplegar2")
})

//mostra chat
function mostrar(){
        document.getElementById('chat').style.display = 'block';
}
//ocultar chat
function ocultar(){
        document.getElementById('chat').style.display = 'none';
}