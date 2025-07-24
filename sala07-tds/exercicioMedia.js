function media(){
    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    nota3 = parseFloat(document.getElementById('nota3').value);
    nota4 = parseFloat(document.getElementById('nota4').value);
    nota5 = parseFloat(document.getElementById('nota5').value);
    acima = document.getElementById.innerHTML('');
    var media = document.getElementById('media');

    media.innerHTML = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
    innerHTML(media);
    if(media > 7){
        document.getElementById('acima') = innerHTML('Acima da  média');
    }
    else{

    }
}