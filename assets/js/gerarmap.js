//Ta bugando o Projeto... Pensar em outra forma de gerar um mapa pixelado que não exiga tanto da máquina


function gerarMapa(){

  var coluna = 21;
  var linha = 21;
  var matriz = new Array(coluna);


for (var i = 0; i<coluna; i++){
  matriz[i] = new Array (linha);
  for (var y = 0 ;y<linha;y++){
    matriz[i][y] = Math.floor(Math.random() * 3);
  }
}
var local= [10,10]

localStorage.setItem('Mapa',JSON.stringify(matriz));
localStorage.setItem('LocalPersonagem',JSON.stringify(local));

}


function miniMapp(){
  var teste = '';
  
  
  var i = localStorage.getItem('Mapa');
  var retorno = JSON.parse(i);
if (document.getElementById('campo-map').style.display == 'block'){
  document.getElementById('campo-map').style.display = 'none';
}else {
  for (i=0;i<=20;i++){
    for (y=0;y<=20;y++){
      if (i==10 && y==10){
        teste = teste + i+'em ' + y +'em ' + 'black,'
      }else{
      if (retorno[i][y] == 0){
        teste = teste + i+'em ' + y +'em ' + 'green,'
        
      }else if(retorno[i][y] == 1){
        teste = teste + i+'em ' + y +'em ' + 'blue,'
        
      }else if(retorno[i][y] == 2){
        teste = teste + i+'em ' + y +'em ' + 'yellow,'
        
      }
    }
    }
  }
  teste = teste + 10+'em ' + 10 +'em ' + 'black'
  teste = 'box-shadow: ' + teste
  document.getElementById('campo-map').style.display = 'block'
  document.getElementById('id-pixel').style = teste
}
}