function aparecerPlaca(){
    var placa = document.getElementById('placa');
    var btnEscondido = document.getElementById('botaoEscondido');
    var textoEscondido = document.getElementById('textoEscondido');
    btnEscondido.style.display = "inline";
    textoEscondido.style.display = "inline";
    console.log('placa')
    if (placa != null){
        placa.style.display = 'flex';
        Array.from(placa.children).forEach((el) => {
            el.style.display = 'inline';
        });
        btnEscondido.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
}

function redirecionarLink() {
  window.location.href = "https://open.spotify.com/playlist/7tKTN9aKMCH6tjXMAkCkrm?si=c05ec34f4eaf4c47&pt=64103f2d4e86177afbef0481c2995d6d"; // Redireciona para a nova URL
}