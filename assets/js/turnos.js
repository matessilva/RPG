var TurnosObj ={
    cd1:{
        nome: '',
        cd: 0,
        cdatual:0,
        campo:''
    },
    cd2:{
        nome: '',
        cd: 0,
        cdatual:0,
        campo:''
    },
    cd3:{
        nome: '',
        cd: 0,
        cdatual:0,
        campo:''
    },
    cd4:{
        nome: '',
        cd: 0,
        cdatual:0,
        campo:''
    },
    cd5:{
        nome: '',
        cd: 0,
        cdatual:0,
        campo:''
    },
}
function turnos(ataque, btnAtaque){
    var retornoAtaque = returnAtaque();

    if (ataque === 'Potion'){
        for (i=1;i<=5;i++){
            if (TurnosObj['cd'+i].nome ===''){
                TurnosObj['cd'+i].nome = 'Potion';
                TurnosObj['cd'+i].cd = 2;
                TurnosObj['cd'+i].campo = 'bag-'+ btnAtaque;
                i=6;
            }
        }

        
    }else {
    for (i=1;i<=5;i++){
        if (TurnosObj['cd'+i].nome !=''){
            TurnosObj['cd'+i].cdatual++
            if (TurnosObj['cd'+i].cdatual == TurnosObj['cd'+i].cd){
                destravaCd(TurnosObj['cd'+i].campo);
                TurnosObj['cd'+i].nome = '';
                TurnosObj['cd'+i].campo = '';
                TurnosObj['cd'+i].cd = 0;
                TurnosObj['cd'+i].cdatual = 0;
            }
        }
        }
    if (retornoAtaque[ataque].cd >0){
        var y =1;
        for (i=1;i<=5;i++){
            if (TurnosObj['cd'+i].nome === ''){
                TurnosObj['cd'+i].nome = retornoAtaque[ataque].nome;
                TurnosObj['cd'+i].campo = 'btn-ataque'+btnAtaque;
                TurnosObj['cd'+i].cd = retornoAtaque[ataque].cd;
                i=6;
            }
        }
    }
}
    localStorage.setItem('Turnos',JSON.stringify(TurnosObj));
    travaCd()
}