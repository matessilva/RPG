function travaCd(){
    var retornoTurnos = returnTurnos();
     
    for (i=1;i<=5;i++){
        if (retornoTurnos['cd'+i].nome === 'Potion'){
            // document.getElementById('bag-' +retornoTurnos['cd'+i].camp).setAttribute("onclick", ";");
           document.getElementById(retornoTurnos['cd'+i].campo).setAttribute("onclick", ";");
        }
        if (retornoTurnos['cd'+i].nome != ''){
            var idcampo = retornoTurnos['cd'+i].campo
            document.getElementById(idcampo).disabled = true;
            

        }
    }
}
function destravaCd(retorno){
    document.getElementById(retorno).disabled = false;
}
function barravida(){
   
    var retornoPersonagem = returnPerso();
    //barra de vida
    var barravida = document.getElementById('barravida-tira');
    var barrashield = document.getElementById('barra-shield');
    document.getElementById('saudeprincipal').innerHTML = retornoPersonagem.vidaatual + ' / ' + retornoPersonagem.saude + '     ('+retornoPersonagem.Shield+')';
    
    var result = (retornoPersonagem.vidaatual * 100) / retornoPersonagem.saude;
    barravida.style.width = result + '%';
    barrashield.style.width = (retornoPersonagem.Shield /2) + '%';

    if (retornoPersonagem.vidaatual <=0){
        morte(retornoPersonagem);
    }
};

function morte(morto){
    alert(morto.Nome + ' Acabou de morrer');
}

function returnPerso(){
    var i = localStorage.getItem('Personagem');
    var retorno = JSON.parse(i);
    return retorno;
}

function returnAtaque(){
    var i = localStorage.getItem('Ataques');
    var retorno = JSON.parse(i);
    return retorno;
}
function returnInventario(){
    var i = localStorage.getItem('Inventario');
    var retorno = JSON.parse(i);
    return retorno;
}
function returnMob(){
    var i = localStorage.getItem('Mob');
    var retorno = JSON.parse(i);
    return retorno;
}
function returnTurnos(){
    var i = localStorage.getItem('Turnos');
    var retorno = JSON.parse(i);
    return retorno;
}
