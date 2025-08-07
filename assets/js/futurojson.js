var monstros = {
    monstro1:{
        Nome: "Chorao",
        vida:20,
        vidaatual:20,
        img:'assets/img/chorao.png',
        dano: 3,
    },
    monstro2:{
        Nome: "Ciclope",
        vida:15,
        vidaatual:15,
        img:'assets/img/ciclope.png',
        marcado:0,
        dano: 2,
    },
    monstro3:{
        Nome: "Sedento",
        vida:25,
        vidaatual:25,
        img:'assets/img/sedento.png',
        marcado:0,
        dano: 4,
    },
    monstro4:{
        Nome: "Molusco",
        vida:30,
        vidaatual:30,
        img:'assets/img/molusco.png',
        marcado:0,
        dano: 5,
    },
}
// function listamobs(){
// var i = Math.floor(Math.random() * 4 + 1);
// var monstroo = 'monstro' + i;
// var numInimigos = d3();

// document.getElementById('vilaoprincipal1').style.display = 'flex';
// document.getElementById('vilaoprincipal1').innerHTML = monstros[monstroo].img + vilaoprincipal1.innerHTML ;
// document.getElementById('nomeVprincipal1').innerHTML = monstros[monstroo].Nome ;


// localStorage.setItem('Mob',JSON.stringify(monstros[monstroo]));
// vidaMob();
// }

function iniciarBatalha(){
    var monstroSpawn = {
        spawn1:{
            Nome: "",
            vida:0,
            vidaatual:0,
            img:'',
            marcado:0,
            dano: 0,
        },
        spawn2:{
            Nome: "",
            vida:0,
            vidaatual:0,
            img:'',
            marcado:0,
            dano: 0,
        },
        spawn3:{
            Nome: "",
            vida:0,
            vidaatual:0,
            img:'',
            marcado:0,
            dano: 0,
        },
    }
    var quantidade = d3();

    for (i=1; i<=quantidade;i++){
        var qualpegar = d3()+1;
        var vilao = 'vilaoprincipal' + i
        var monstroChamar = 'monstro'+qualpegar
        var nomeP = 'nomeVprincipal'+i
        var img = 'imgV'+i;
       var vidaPrinc = 'vidaVprincipal'+i
        
        document.getElementById([img]).src = monstros[monstroChamar].img ;
        document.getElementById([vilao]).style.display = 'flex';
        document.getElementById([nomeP]).innerHTML = monstros[monstroChamar].Nome;
        document.getElementById([vilao]).style.border= '5px double aqua';
        document.getElementById([vidaPrinc]).innerHTML = monstros[monstroChamar].vidaatual + ' / ' + monstros[monstroChamar].vida;

        
        var spawn = 'spawn' + i
        monstroSpawn[spawn].Nome = monstros[monstroChamar].Nome;
        monstroSpawn[spawn].vida = monstros[monstroChamar].vida;
        monstroSpawn[spawn].dano = monstros[monstroChamar].dano;
        monstroSpawn[spawn].vidaatual = monstros[monstroChamar].vidaatual;
        monstroSpawn[spawn].img = monstros[monstroChamar].img;

    }
    localStorage.setItem('Mob',JSON.stringify(monstroSpawn));

    retirarMobs()
    vidaMob()
}

function retirarMobs(){
    var retornoMob = returnMob();
    var quantidadeMob = 3;
    if (retornoMob.spawn3.Nome === ''){
        document.getElementById('vilaoprincipal3').style.display = 'none';
        quantidadeMob--
        if (retornoMob.spawn2.Nome === ''){
            document.getElementById('vilaoprincipal2').style.display = 'none';
            quantidadeMob--
        }
    }
    for (i=1;i<=quantidadeMob;i++){
        if (retornoMob['spawn'+i].vidaatual <= 0){
            document.getElementById('vilaoprincipal'+[i]).style.display = 'none';
        }
    }


}









function vidaMob(){
    var retornoMob = returnMob();
    for (i=1;i<=3;i++){
        var barravida = document.getElementById('barravida-tiraV'+i);
        var result = (retornoMob['spawn'+i].vidaatual * 100) / retornoMob['spawn'+i].vida;
        barravida.style.width = result + '%';
        document.getElementById('vidaVprincipal'+i).innerHTML = retornoMob['spawn'+i].vidaatual + ' / ' + retornoMob['spawn'+i].vida;
        if (retornoMob.vidaatual <=0){
            morte(retornoMob);
        }
    }
    
};

