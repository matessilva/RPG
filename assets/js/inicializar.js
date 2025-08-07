window.onload = function()
{
    //PERSONAGEM
        
        var retornoPersonagem = returnPerso();

    //adiciona componentes dos herois
    
     
    
    document.getElementById('imgprincipal').src = retornoPersonagem.img;
    document.getElementById('nomeprincipal').innerHTML = retornoPersonagem.Nome + ' / ' + retornoPersonagem.Classe;
    
    
    
    
   
    barravida();    
};

