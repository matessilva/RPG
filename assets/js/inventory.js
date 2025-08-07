

    var retornoinv = returnInventario();
 

var itens ={
    potionCura:{
        nome:'Potion',
        poder:20,
        img: 'assets/img/potionProvisoria.png',
        quantidade:3,
        att: 'vidaatual'
    },
    potionAgi:{
        nome:'Potion',
        poder:20,
        img: 'assets/img/potionProvisoria.png',
        quantidade:3,
        att: 'Agildiade'
    },
    potionShield:{
        nome:'Potion',
        poder:30,
        img: 'assets/img/potionProvisoria.png',
        quantidade:3,
        att: 'Shield'
    },
    potionDan:{
        nome:'Potion',
        poder:20,
        img: 'assets/img/potionProvisoria.png',
        quantidade:3,
        att: 'Dano'
    },
  
    colar1:{
        nome:'colar',
        dano: 10,
        defesa: 5,
        vida:25,
        sorte:5,
    },
    colar2:{
        nome:'colar jade',
        dano: 5,
        defesa:15,
        vida:5,
        sorte:25,
    }
};

function inventoryitens(){
    var retornoinv = returnInventario();
    for (i=1; i<=9; i++){
        var slot = 'slot' + i;
        if (retornoinv[slot] != ''){
        var bagid = 'bag-slot'+i;
        var element = document.getElementById(bagid);
        element.setAttribute("onclick","activeItem('"+retornoinv[slot].nome+"','"+slot+"');")
        element.children[0].src = retornoinv[slot].img;
        element.children[1].innerHTML = retornoinv[slot].nome + ' / ' + retornoinv[slot].att;
        }
    }
}

function activeItem(item, slot){
  
var retornaPersonagem =returnPerso();
    var retornoinv = returnInventario();
    
    if (item === 'Potion'){
        potando(slot);
    }

}
function potando(slot){
  
    var retornaPersonagem = returnPerso();
var atributo = retornoinv[slot].att;
var poder = retornoinv[slot].poder;
var quantidade = retornoinv[slot].quantidade
if (quantidade >0){
retornaPersonagem[atributo] = retornaPersonagem[atributo] + poder;
retornoinv[slot].quantidade--

if(retornaPersonagem.vidaatual > retornaPersonagem.saude){
    retornaPersonagem.vidaatual = retornaPersonagem.saude;
}
//Chamar a função do travar 
turnos('Potion', slot)
localStorage.setItem('Inventario',JSON.stringify(retornoinv));
localStorage.setItem('Personagem',JSON.stringify(retornaPersonagem));
barravida();
}
}


function inventarioabre(){
   let a= document.getElementById('inventariosome').style.display;

    if (a=== "none"){
        document.getElementById('inventariosome').style.display = "flex"
        inventoryitens()
    }else{
        document.getElementById('inventariosome').style.display = "none"
    }
    
}



//adicionar uma potion no inventário
function adcpot(){
var inventario={
    slot1: '',
    slot2: '',
    slot3: '',
    slot4: '',
    slot5: '',
    slot6: '',
    slot7: '',
    slot8: '',
    slot9: '',
}
inventario.slot1 = itens.potionCura
inventario.slot2 = itens.potionShield
localStorage.setItem('Inventario',JSON.stringify(inventario));

};


//vai usar a potion
function potar(){

var retornaPersonagem = returnPerso();


//confere se pode usar potion e retira uma quantidade das potions
if (retornaPersonagem.vidaatual < retornaPersonagem.saude){
    let curar = retornaPersonagem.saude - retornaPersonagem.vidaatual
    if (curar >= 20 ){
        retornaPersonagem.vidaatual = retornaPersonagem.vidaatual + 20;
        localStorage.setItem('Personagem',JSON.stringify(retornaPersonagem));
        barravida();
        
    }else{
retornaPersonagem.vidaatual = retornaPersonagem.vidaatual + potion.cura;
localStorage.setItem('Personagem',JSON.stringify(retornaPersonagem));
}}else{
    alert("vida cheia seu fdp")
};


};


