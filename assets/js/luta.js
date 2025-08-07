function luta(i){
    var retornoPersonagem = returnPerso();
    var retornoAtaque = returnAtaque();
    var retornoMob = returnMob();
    
    var move = 'move'+i;
    var danoAtaque = retornoAtaque[retornoPersonagem[move]]

    if(danoAtaque.tipo == "Shield"){
        buffs(danoAtaque, i)
    }else{
    for (y=1;y<=3;y++){
        if (retornoMob['spawn'+y].marcado ===1){
            heroApanha(retornoPersonagem, retornoMob);
            turnos(retornoAtaque[retornoPersonagem[move]].nome, i);
            mobDano(danoAtaque, retornoMob);
            console.log('Entrou')
        }

    }
}
    };

    function buffs(buff, i){
        var retornoAtaque = returnAtaque();
        var retornoPersonagem = returnPerso();
        var retornoMob = returnMob();
        if (buff.tipo === 'Shield'){
            retornoPersonagem.Shield = retornoPersonagem.Shield + buff.dano;
            
        }
        
        localStorage.setItem('Personagem',JSON.stringify(retornoPersonagem));
        barravida();
        turnos(retornoAtaque[retornoPersonagem['move'+i]].nome, i);
        heroApanha(retornoPersonagem, retornoMob);
    }

    function heroApanha(retornoPersonagem, retornoMob){
        for (i=1;i<=3;i++){
            var danoMob = retornoMob['spawn'+i].dano
        var dado = d20();
        if (dado <=9){
                
        }else if(retornoMob['spawn'+i].dano!=0){
            var resto = 0;
            var dano = d20() + danoMob;               
            if (retornoPersonagem.Shield>0){
                retornoPersonagem.Shield = retornoPersonagem.Shield - dano
                console.log(dano)
                if (retornoPersonagem.Shield<0){
                    resto = retornoPersonagem.Shield;
                    perdevida = retornoPersonagem.vidaatual + resto;
                    retornoPersonagem.vidaatual = perdevida;
                    retornoPersonagem.Shield = 0;
                }
                }else{

                    perdevida = retornoPersonagem.vidaatual - dano;
            
                    retornoPersonagem.vidaatual = perdevida;
                    console.log(retornoMob['spawn'+i].Nome + '  /Bateu = ' +dano )
            }
            }
            
            localStorage.setItem('Personagem',JSON.stringify(retornoPersonagem));
            barravida();
        }
    }


    // function heroDano(retornoPersonagem, retornoMob){
    //     var Personagem = returnPerso();
    //     var dado = d20();
    //     if (dado <=9){
    //     }else{
    //         var resto = 0;
    //         dano = d20();               
    //         if (Personagem.Shield>0){
    //             Personagem.Shield = Personagem.Shield - dano
    //             if (Personagem.Shield<0){
                    
    //                 resto = Personagem.Shield;
    //                 perdevida = Personagem.vidaatual + resto;
    //                 Personagem.vidaatual = perdevida;
    //                 Personagem.Shield = 0;
    //             }

    //         }else{

    //         perdevida = Personagem.vidaatual - dano;
            
    //         Personagem.vidaatual = perdevida;
    //         }
            
    //         localStorage.setItem('Personagem',JSON.stringify(Personagem));
    //         barravida();
    //     }
    
    // };

    function marcarAtaqueMob(campo){
        var retornoMob = returnMob();
        var mobmarcado = 'spawn' + campo;
        for (i=1;i<=3;i++){
            retornoMob['spawn'+i].marcado = 0;
                document.getElementById('vilaoprincipal'+i).style.border= '5px double aqua';
            }
        
        document.getElementById('vilaoprincipal'+campo).style.border= '5px double red'
        retornoMob[mobmarcado].marcado = 1;
        localStorage.setItem('Mob',JSON.stringify(retornoMob));
        vidaMob()

    }
    function mobDano(ataque, retornoMob){
        var dado = d20();
      
        if (dado <=9){
        }else{
            var danoDado = d20();
            dano = danoDado + ataque.dano
            if (danoDado === 20){
                alert('Dano Critico')
                dano = dano*2
            }
            if (ataque.tipo == 'Area'){
                for (i=1;i<=3;i++){
                    retornoMob['spawn'+i].vidaatual = retornoMob['spawn'+i].vidaatual - dano;
                }
                
                
            }else if(ataque.tipo == "Target"){
                for (i=1;i<=3;i++){
                    if (retornoMob['spawn'+i].marcado){
                        retornoMob['spawn'+i].vidaatual = retornoMob['spawn'+i].vidaatual - dano;
                    }
                }
            }

        }
        localStorage.setItem('Mob',JSON.stringify(retornoMob));
        vidaMob()
        retirarMobs()
    }


    //fazer inicar junto com o jogo 
    function colocarAataques(){
        var retornoAtaque = returnAtaque();
        var retornoPersonagem = returnPerso();
      
      
           
            document.getElementById('nome-ataque1').innerHTML = retornoAtaque[retornoPersonagem.move1].nome
            document.getElementById('dano-ataque1').innerHTML = retornoAtaque[retornoPersonagem.move1].dano
            document.getElementById('nome-ataque2').innerHTML = retornoAtaque[retornoPersonagem.move2].nome
            document.getElementById('dano-ataque2').innerHTML = retornoAtaque[retornoPersonagem.move2].dano
            document.getElementById('nome-ataque3').innerHTML = retornoAtaque[retornoPersonagem.move3].nome
            document.getElementById('dano-ataque3').innerHTML = retornoAtaque[retornoPersonagem.move3].dano
         

        
    }