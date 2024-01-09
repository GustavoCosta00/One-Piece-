let video = document.getElementById("video-luffy")

let close_video = document.getElementById("close-video").addEventListener("click",()=>{
    video.pause()
    video.currentTime = 0
    video.poster = "img/gear-5-in-anime-1.webp"
})

let show_information = document.getElementById("info_mugiwaras")

let characters = document.getElementsByTagName("li");

let clickedButtonIndex = -1; // Começar em -1 é uma CONVENÇÃO para mostrar que o botão ainda não foi clicado uma vez que os vetores começam em 0;

//ARRAY.FROM(...) = Transforma uma coleção em um array possível de se trabalhar

Array.from(characters).forEach( character => { // Aqui estamos adicionando um evento de click para cada uma das li´s
  character.addEventListener('click', (event) => {
    // Obtém o índice do botão clicado
    clickedButtonIndex = Array.from(characters).indexOf(event.currentTarget);

    console.log('Índice do botão clicado:', clickedButtonIndex);
  });
});

// Função para retornar o índice do botão clicado
function getClickedButtonIndex() {
  return clickedButtonIndex;
}