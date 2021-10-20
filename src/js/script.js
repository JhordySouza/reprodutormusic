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
const listaMusicas = document.querySelector('.listaMusicas');


function construirPlayList(){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = 'Good Enough';
    nomeArtista.innerText = 'MeiaUm';
    nomeAlbum.innerText = 'Good Enough';

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    listaMusicas.appendChild(musicaElemento);
}
construirPlayList();
