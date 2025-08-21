function aparecerPlaca(){
    var placa = document.getElementById('placa');
    console.log('placa')
    if (placa != null){
        placa.style.display = 'flex';
        Array.from(placa.children).forEach((el) => {
            el.style.display = 'inline';
        });
        placa.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}