let video = document.getElementById('video-luffy')
let info_mugiwaras = document.getElementById('info_mugiwaras')
let name_modal= document.getElementById('name_information')
let close_video = document.getElementById('close-video')
let btn_close_information = document.querySelector('.close_information')
let characters = document.getElementsByTagName('li');
let clickedButtonIndex = -1; // Começar em -1 é uma CONVENÇÃO para mostrar que o botão ainda não foi clicado uma vez que os vetores começam em 0;
let modal_text_information = document.getElementById('modal_text_information')
let img_information = document.getElementById('img_information')
let img_reward = document.getElementById('img_reward')

// Pausando vídeo e reiniciando
close_video.addEventListener("click",()=>{
    video.pause()
    video.currentTime = 0
    video.poster = "img/gear-5-in-anime-1.webp"
})


//ARRAY.FROM(...) = Transforma uma coleção em um array possível de se trabalhar
Array.from(characters).forEach( character => { // Aqui estamos adicionando um evento de click para cada uma das li´s
  character.addEventListener('click', (event) => {
    // Obtém o índice do botão clicado
    clickedButtonIndex = Array.from(characters).indexOf(event.currentTarget);
    console.log(event)
    modal_information()
    show_hidden()
  });
});

// Função para retornar o índice do botão clicado, essa função está sendo usada mais abaixo
function getClickedButtonIndex() {
  return clickedButtonIndex;
}

// Função para mostrar o Modal
function show_hidden(){
  info_mugiwaras.style.display = "block"
}

// Fechando o Modal 
btn_close_information.addEventListener("click",()=>{
  info_mugiwaras.style.display = "none"
})


// Aplicando conceitos de POO (Programação Orientada a Objeto)
// Mostrando as informações dos personagens como nome, imagem etc com POO
function modal_information(){
  
  let info // Variavel para guardar as informações dos personagens
  
  // Criando a class
  class mugiwaras{
    constructor(name,info,img,origin,reward){
      this.name = name;
      this.info = info;
      this.img = img;
      this.origin = origin
      this.reward = reward
    }
  }

  let enredo_personagens = {

    luffy: 'Luffy nasceu na Vila Foosha, é filho do revolucionário Monkey D. Dragon e neto do Vice-Almirante Monkey D. Garp, fazendo parte da Família dos D. e sonha tornar-se o rei dos piratas!',

    zoro:  'Zoro é um pirata e ex-caçador de recompensas, e um dos dois espadachins do bando dos Piratas do Chapéu de Palha.',

    nami:  'Anteriormente membro dos Piratas do Arlong e juntou-se inicialmente aos Chapéus de Palha com a intenção de roubá-los, mas se tornou de fato um dos Chapéus de Palha depois que eles se rebelaram e derrotaram Arlong.',

    usopp: 'Ele nasceu e foi criado na Vila Syrup, e era o "capitão" dos Piratas Usopp, Após colaborar com os Chapéus de Palha para derrotar Kuro e os Piratas do Gato Preto, ele foi convidado a se juntar à tripulação.',

    sanji: 'Vinsmoke Sanji, faz parte da família real do reino de Germa. Seu pai, Vinsmoke Judge, planejava modificar geneticamente todos os seus filhos, para que eles tivessem força sobre-humana e nenhuma emoção, os tornando, eventualmente, “soldados perfeitos”',

    chopper: 'Chopper inicialmente era uma rena comum que tinha o nariz azul, o que fez com que ele fosse tratado como um estranho até mesmo pela sua família. Então ele encontrando a Hito Hito no Mi, fruta do humano, fazendo ele ser expulso de seu grupo de renas',

    robyn: 'Nico Robin é a arqueóloga dos piratas do Chapéu de Palha. Ela foi introduzida com uma inimiga do bando fazendo parte da Baroque Works, e após os eventos de Alabasta decide se unir ao grupo',

    franky: 'Franky foi permitido se juntar aos Chapéu de Palha para realizar seu sonho de criar e dirigir um navio capaz de dar a volta ao mundo, o Thousand Sunny. Franky é o oitavo membro da tripulação dos Chapéus de Palha e o sétimo a se juntar ao bando de Luffy',

    brook: 'Ele morreu com seus Companheiros dos Piratas Rumba quando foram aniquilados, mas foi revivido pelo poder da Yomi Yomi no Mi (Fruta da Ressurreição) que comeu durante sua vida. No entanto, como sua alma demorou para se reencarnar, seu corpo se decompôs e se tornou um esqueleto vivo.',

    jinbe: 'Jinbe é um homem-peixe sendo um tubarão-baleia e um poderoso mestre do karatê Homem-Peixe. Seu sonho é realizar o desejo moribundo de seu ex-capitão Fisher Tiger de coexistência e igualdade entre humanos e homens-peixe.'
    
  }

  // Guardando os valores dentro da class e exibindo na tela
  switch(getClickedButtonIndex()){
    case 0: info = new mugiwaras('Luffy', enredo_personagens.luffy, 'video/luffy.gif','Ilha Dawn','img/recompensa-luffy.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 1: info = new mugiwaras('Zoro',enredo_personagens.zoro,'video/zoro.gif','Vila Shimotsuki','img/recompensa-zoro.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 2: info = new mugiwaras('Nami',enredo_personagens.nami,'video/nami.gif','Vila Cocoyasi','img/recompensa-nami.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 3: info = new mugiwaras('Usopp',enredo_personagens.usopp,'video/usopp.gif','xxx','img/recompensa-God-Usopp.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 4: info = new mugiwaras('Sanji',enredo_personagens.sanji,'video/sanji.gif','xxx','img/recompensa-sanji.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 5: info = new mugiwaras('Chopper',enredo_personagens.chopper,'video/chopper.gif','xxx','img/recompensa-chopper.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 6: info = new mugiwaras('Robyn',enredo_personagens.robyn,'video/robyn.gif','xxx','img/recompensa-robyn.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 7: info = new mugiwaras('Franky',enredo_personagens.franky,'video/franky.gif','xxx','img/recompensa-franky.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 8: info = new mugiwaras('Brook',enredo_personagens.brook,'video/brook.gif','xxx','img/recompensa-brook.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break

    case 9: info = new mugiwaras('Jinbe',enredo_personagens.jinbe,'video/jinbe.gif','xxx','img/recompensa-jinbe.jpg')
            name_modal.innerText = info.name;
            modal_text_information.innerText = info.info
            img_information.src = info.img
            img_reward.src = info.reward
            break
  }
  
}