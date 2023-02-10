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
//funcionamiento del chat

// conenction
let socket = io();

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function() {
  socket.emit('chat:message', {
    message: message.value,
    username: username.value
  });
});

message.addEventListener('keypress', function () {
  socket.emit('chat:typing', username.value);
});

socket.on('chat:message', function(data) {
  actions.innerHTML = '';
  output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
  </p>`
});

socket.on('chat:typing', function(data) {
  actions.innerHTML =  `<p><em>${data} Esta Escribiendo...</em></p>`
});
