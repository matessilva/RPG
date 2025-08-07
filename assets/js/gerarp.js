var Personagem = {
    Nome:"", 
    Classe:'' , 
    saude:0,
    Shield:0,
    vidaatual:0,
    Forca:0,
    Destreza:0,
    Agilidade:0,
    Carisma:0,
    Inteligencia:0,
    Percepcao:0,
    def:0,
    dano:0,
    img:'',
    move1:'',
    move2:'',
    move3:'',
};
var classes = {
    Guerreiro : {
        saude:100,
        Shield:20,
        Forca:20,
        Destreza:15,
        Agilidade:10,
        Carisma:5,
        Inteligencia:5,
        Percepcao:5,
        img: 'assets/img/Guerreiro.png'
    },
    Mago : {
        saude:50,
        Shield:0,
        Forca:5,
        Destreza:20,
        Agilidade:9,
        Carisma:9,
        Inteligencia:20,
        Percepcao:15,
        img: 'assets/img/Mago.png'
    },
  
    Ladrao : {
        saude:5,
        Shield:0,
        Forca:15,
        Destreza:10,
        Agilidade:20,
        Carisma:10,
        Inteligencia:3,
        Percepcao:20,
    },
    Cacador : {
        saude:15,
        Shield:0,
        Forca:5,
        Destreza:20,
        Agilidade:2,
        Carisma:1,
        Inteligencia:3,
        Percepcao:3,
},
    Necromante : {
        saude:1,
        Shield:0,
        Forca:5,
        Destreza:20,
        Agilidade:9,
        Carisma:9,
        Inteligencia:20,
        Percepcao:15,
    },
    Xama : {
        saude:2,
        Shield:0,
        Forca:1,
        Destreza:20,
        Agilidade:9,
        Carisma:9,
        Inteligencia:20,
        Percepcao:15,
    },
    Bardo : {
        saude:2,
        Shield:0,
        Forca:5,
        Destreza:1,
        Agilidade:9,
        Carisma:9,
        Inteligencia:20,
        Percepcao:15,
    },
};

const ataques={
    Guerreiro:{
       
        Estocar:{
            img:'',
            nome:'Estocar',
            desc:'Estocada com a espada',
            dano:5,
            cd:1,
            tipo: 'Target'
        },
        Rage:{
            img:'',
            nome:'Rage',
            desc:'Entra em Rage',
            dano:10,
            cd:3,
            tipo: 'Target',
        },
        Rodar:{
            img:'',
            nome:'Rodar',
            desc:'Causa dano em área',
            dano:4,
            cd:3,
            tipo: 'Area'
        },
        Escudo:{
            img:'',
            nome:'Escudo',
            desc:'Ganhha escudo',
            dano:50,
            cd:3,
            tipo: 'Shield'
        },
    },
    Mago:{
        Raio:{
            img:'',
            nome:'Raio',
            desc:'Lança um Raio',
            dano:15,
            cd:1,
            tipo: 'Target'
        },
        Fogo:{
            img:'',
            nome:'Fogo',
            desc:'Bola de fogo',
            dano:25,
            cd:3,
            tipo: 'Target',
        },
        Exploud:{
            img:'',
            nome:'Exploud',
            desc:'Causa dano em área',
            dano:15,
            cd:3,
            tipo: 'Area'
        },
        Escudo:{
            img:'',
            nome:'Escudo',
            desc:'Ganhha escudo',
            dano:150,
            cd:3,
            tipo: 'Shield'
        },
},
}

var botoes = {
        saude:0,
        Shield:0,
        Forca:0,
        Destreza:0,
        Agilidade:0,
        Carisma:0,
        Inteligencia:0,
        Percepcao:0,
};

function classe(clas){
    Personagem.Classe = clas;
    var bf = document.getElementById('boF');
    var bc = document.getElementById('boC');
    var ba = document.getElementById('boA');
    var bca = document.getElementById('boCa');
    var bd = document.getElementById('boD');
    var bi = document.getElementById('boI');
    var bp = document.getElementById('boP');

       bf.innerHTML =' + '+ classes[clas].Forca; 
       bc.innerHTML =' + '+ classes[clas].saude; 
       bd.innerHTML =' + '+ classes[clas].Destreza; 
       ba.innerHTML =' + '+ classes[clas].Agilidade; 
       bca.innerHTML =' + '+ classes[clas].Carisma; 
       bi.innerHTML =' + '+ classes[clas].Inteligencia;    
       bp.innerHTML =' + '+ classes[clas].Percepcao; 
    
      //var img = document.getElementById('imagemClasse').src = classes[clas].img;


      // Chama o Objeto de ataques e salva nos cookies
      salvarAtaques(clas);
};
function name(){
    var a = document.getElementById('nomeDigitado')
    Personagem.Nome = a.value;
    
};

function geradorAtributos(tipo){
    botoes[tipo] ++;
if (botoes[tipo]==2){
    document.getElementById("btn"+tipo).value = "Ultima chance";
}else if (botoes[tipo]>=3){
    document.getElementById("btn"+tipo).disabled = true;
  
}
};

function valoresAtributos(tipo){
    var valor = d20();
    geraratributos(tipo, valor);
    geradorAtributos(tipo);
    var mostra = document.getElementById(tipo);
    mostra.innerHTML = tipo + ': '+ valor
    
    
};

function salvarAtaques(retorno){
    localStorage.setItem('Ataques',JSON.stringify(ataques[retorno]));


   let retornoObj = Object.entries(ataques[retorno]);
   var tamanho = retornoObj.length;
   for (i=0; i<tamanho;i++){
    document.getElementById('nome-ataque'+(i+1)).innerHTML = retornoObj[i][1].nome
    document.getElementById('desc-ataque'+(i+1)).innerHTML = retornoObj[i][1].desc
    document.getElementById('cd-ataque'+(i+1)).innerHTML = 'CD: '+retornoObj[i][1].cd
    document.getElementById('dano-ataque'+(i+1)).innerHTML = 'Dano: '+retornoObj[i][1].dano
   }
}
   

let ataqueSelectados = [];
let realSelect = ['','',''];
let quantidade = 0;

function selectAtaques(retorno){

    if (ataqueSelectados[retorno] != undefined){
        document.getElementById("escolhido-ataque"+retorno).style.border = 'solid 1px black'
        ataqueSelectados[retorno] = undefined;
        quantidade--
    }
    else{
    if (quantidade <3){
        document.getElementById("escolhido-ataque"+retorno).style.border = 'solid 1px red';
        ataqueSelectados[retorno]= document.getElementById('nome-ataque'+retorno).innerHTML
        
        quantidade++
    }
    if(quantidade==3){
        var y=0;
        for (i=0;i<5;i++){
            if (ataqueSelectados[i] != undefined){
                realSelect[y] = ataqueSelectados[i]
                y++
            }
            
        }
        console.log(realSelect)
    }
}
    /*
    if (ataqueSelectados[retorno] != undefined){
        document.getElementById("escolhido-ataque"+retorno).style.border = 'solid 1px black'
        ataqueSelectados.splice(retorno)
        position--

    }else{
    document.getElementById("escolhido-ataque"+retorno).style.border = 'solid 1px red';

    if (position >2){
        document.getElementById("escolhido-ataque"+posianterior).style.border = 'solid 1px blue'
        ataqueSelectados.splice(posianterior)
        position--
      }

*/
   
    
    

  console.log(ataqueSelectados)
 

  
      
    
}

function geraratributos (tipo, valor){
        Personagem[tipo] = valor;
};






function salvarpersona(){
    var retornaclasse = Personagem.Classe;
 Personagem.Forca = Personagem.Forca + classes[retornaclasse].Forca; 
 Personagem.saude = Personagem.saude + classes[retornaclasse].saude; 
 Personagem.Agilidade = Personagem.Agilidade + classes[retornaclasse].Agilidade; 
 Personagem.Carisma = Personagem.Carisma + classes[retornaclasse].Carisma; 
 Personagem.Destreza = Personagem.Destreza + classes[retornaclasse].Destreza; 
 Personagem.Inteligencia = Personagem.Inteligencia + classes[retornaclasse].Inteligencia; 
 Personagem.Percepcao = Personagem.Percepcao + classes[retornaclasse].Percepcao; 
 Personagem.img = classes[retornaclasse].img; 
 Personagem.vidaatual = Personagem.saude;
 Personagem.Shield = classes[retornaclasse].Shield;
Personagem.move1 = realSelect[0];
Personagem.move2 = realSelect[1];
Personagem.move3 = realSelect[2];
Personagem.Nome = document.getElementById('nomePersonagem').value;
    localStorage.setItem('Personagem',JSON.stringify(Personagem));



    
};
