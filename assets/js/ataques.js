
var divpai = document.createElement('div');
var div;
function ataquesPrincipal(){
    let populacaoArr = Object.entries(ataques.Guerreiro);
    var tamanho = populacaoArr.length;
    for (i=0; i<tamanho;i++){

        div = document.createElement('div'); 
        nome = document.createElement('label');
        desc = document.createElement('label');
        dano = document.createElement('label');
        img = document.createElement('img');

        nome.innerHTML  = populacaoArr[i][1].nome;
        desc.innerHTML  = populacaoArr[i][1].desc;
        img.src = populacaoArr[i][1].img;
        dano.innerHTML = populacaoArr[i][1].dano;

        div.appendChild(nome);
        div.appendChild(desc);
        div.appendChild(dano);

        divpai.appendChild(div);
    
    }
    

   var teste = document.getElementById('list-ataq').appendChild(divpai);
   
}