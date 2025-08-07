//Abaixo retorna o localstorage em um objeto armazenando na variavél "i"
function teste(){
    var i = localStorage.getItem('Personagem');
    var retornoPersonagem = JSON.parse(i);
    console.log(retornoPersonagem);
//adiciona componentes dos herois

 

document.getElementById('imgprincipal').src = retornoPersonagem.img;
document.getElementById('nomeprincipal').innerHTML = retornoPersonagem.Nome + ' / ' + retornoPersonagem.Classe;






//barra de vida
var barravida = document.getElementById('barravida-tira');


var result = (retornoPersonagem.vidaatual * 100) / retornoPersonagem.saude;
barravida.style.width = result + '%';
console.log(result);
};


//DIV Á BAIXO CRIA OS CAMPOS DO TABULEIRO
function criadora(){
var camp = document.getElementById('tabelinha')
    for (i = 1; i <=30; i++){
console.log(i);
var divnova = document.createElement("div");
let id = document.createAttribute('id');
id.value = 'div-' + i;
divnova.innerHTML = i;
divnova.setAttributeNode(id);
camp.appendChild(divnova);
    }


};



function andarTabuleiro(){
   
    var andar = d3();
    var camposandar = 1+(andar*2)  
    var localTabu = [5,5]
    console.log(andar)
    var linha = localTabu[0] - andar;
    var contarAndar = 1;
    for (i=1;i<=camposandar;i++){
        var coluna = localTabu[1] - andar;
        for (y=1;y<=camposandar;y++){
            document.getElementById('l'+linha+'c'+coluna).setAttribute('onclick', "fazerAndar("+linha+coluna+")");
            document.getElementById('l'+linha+'c'+coluna).setAttribute('style',  'background-color:blue;');
            
            contarAndar++
            coluna++
       
        }
        linha++
    }
}
function fazerAndar(a){
 var i = localStorage.getItem('LocalPersonagem');
    var LocalPersonagem = JSON.parse(i);
        const numeroComoString = a.toString();
        const digitos = numeroComoString.split('');
        linha= parseInt(digitos[0]),
        coluna= parseInt(digitos[1]),
  console.log(LocalPersonagem)
if (LocalPersonagem[0]>=1){
    if (linha<5){
    LocalPersonagem[0] = LocalPersonagem[0] + (linha-5);
  }
}
if (LocalPersonagem[0]<=20){
if(linha>5){
    LocalPersonagem[0] = LocalPersonagem[0] - (5-linha);
  }
}
if (LocalPersonagem[1]>=1){
if (coluna<5){
    LocalPersonagem[1] = LocalPersonagem[1] + (coluna-5);
  }
}
if (LocalPersonagem[1]<=20){
if(coluna>5){
    LocalPersonagem[1] = LocalPersonagem[1] - (5-coluna);
  }
}
  
console.log(LocalPersonagem)
localStorage.setItem('LocalPersonagem',JSON.stringify(LocalPersonagem));
}