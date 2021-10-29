/**
 * variaveis
 * funções
 * loop
 * condicionais
 */
 
//variaveis
const meuNome = 'Jhorghelles';
let minhaIdade = 33;

//console.log(meuNome)
//console.log(minhaIdade)

minhaIdade = 61;
//console.log(minhaIdade)

//funções
function imprimeNome(){
 //   console.log(meuNome);
}

//loop
for(let i = 0; i < 5; i++ ){
  imprimeNome()
}
//condicionais
if(minhaIdade >= 18){
    var idadeAMais = minhaIdade - 18
  //  console.log('Cuidado!! você ja pode ser preso a mais de '+idadeAMais +' anos !!!')
}else { 
    var idadeAMenos = 18 - minhaIdade
 //   console.log('Ainda falta '+idadeAMenos+' anos para você completar 18 e ser preso!')
} 

/*----------------------------------------*/
const baseMusicas = [
    {
        'name': 'Anonymous Choir - Unus Ex Discipulis Meis',
        'artist': 'Anonymous',
        'path': './src/audio/Anonymous_Choir_-_Unus_Ex_Discipulis_Meis.mp3',
        'album': '1 Good Enough',
    },
    {
        'name': 'Felipe Sarro - C Schumann Scherzo in C minor Op 14',
        'artist': 'Anonymous',
        'path': './src/audio/Felipe_Sarro_-_11_-_C_Schumann_Scherzo_in_C_minor_Op_14.mp3',
        'album': '2 Good Enough',
    },
    {
        'name': 'James Scott - Frog Legs Rag 1906 piano roll',
        'artist': 'Anonymous',
        'path': './src/audio/James_Scott_-_01_-_Frog_Legs_Rag_1906_piano_roll.mp3',
        'album': '3 Good Enough',
    },
    {
        'name': 'Onze e Pouquinho',
        'artist': 'Dilsinho',
        'path': './src/audio/Dilsinho - Onze e Pouquinho.mp3',
        'album': 'As melhores de 2019',
    }
];
console.log(baseMusicas);

const listaMusicas = document.querySelector('.listaMusicas')
const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];

tagAudio.src = primeiraMusica.path;

atualizaPlay(baseMusicas[0].album, baseMusicas[0].name)

const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay');

let musicaAtual = 0;

function construirPlayList(musica, musicaId){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.addEventListener('click', tocarMusica)

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    listaMusicas.appendChild(musicaElemento);
}

for(let i = 0; i < baseMusicas.length; i++){
//console.log(baseMusicas[i]);
construirPlayList(baseMusicas[i], i)
}

function tocarMusica(evento){
    const elementoClicado = evento.currentTarget;

    if (elementoClicado.tagName === 'LI') {
        const musicaId = elementoClicado.dataset.id;
        const musicaSelecionada = baseMusicas[musicaId];

        tagAudio.src   = musicaSelecionada.path;
        musicaAtual = Number(musicaId);
        tagAudio.play();

        atualizaPlay(baseMusicas[musicaAtual].album, baseMusicas[musicaAtual].name)

        botaoPlay.classList.add('pause')

    }else{
        if (tagAudio.paused){
            tagAudio.play();
            botaoPlay.classList.add('pause')
        } else{
             tagAudio.pause();
             botaoPlay.classList.remove('pause')
        }
    }
}
botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica(){
    tagAudio.pause();
    botaoPlay.classList.remove('pause')

}
botaoPausar.addEventListener('click', pausarMusica)

function tocarProximaMusica(){
    if(musicaAtual === baseMusicas.length -1){
        musicaAtual = 0
    }else {
        musicaAtual++
    }
    console.log(musicaAtual);
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    atualizaPlay(nomeAlbum, nomeMusica)

    botaoPlay.classList.add('pause')
}
function tocarMusicaAnterior(){
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length -1;
    }else {
        musicaAtual--
    }
    console.log(musicaAtual);
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    atualizaPlay(nomeAlbum, nomeMusica)

    botaoPlay.classList.add('pause')

}

//NEXT
const btnControlnext = document.getElementById('btnControlnext');
btnControlnext.addEventListener('click', tocarProximaMusica);

//PREV
const btnControlPrev = document.getElementById('btnControlPrev');
btnControlPrev.addEventListener('click', tocarMusicaAnterior);

//VOLUME
const areaPlayerVolume = document.querySelector('.areaPlayerVolume input');

areaPlayerVolume.addEventListener('input', ()=>{

    tagAudio.volume = areaPlayerVolume.value
})
//INFO ABUM

function atualizaPlay(nome,musica,foto){

    //const fotoAlbum = document.getElementById('fotoAlbum');
    const nomeMusica = document.getElementById('nomeMusica');
    const nomeAlbum = document.getElementById('nomeAlbum');

    //fotoAlbum.src = foto
    nomeMusica.innerText = musica
    nomeAlbum.innerText = nome
}

function qtdMusicas(){
    let qtdMusicas = document.getElementById('totalMusicas');

    qtdMusicas.innerText = (baseMusicas.length+' songs')
}
qtdMusicas()