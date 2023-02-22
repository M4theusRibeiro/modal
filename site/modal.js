function mostrarModal(){
    let overlay = document.querySelector('.overlay')
    let modal = document.querySelector('.modal')
    overlay.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(() => { document.addEventListener('click', cliqueFora, false) }, 200);
}

function fecharModal(){
    let overlay = document.querySelector('.overlay')
    let modal = document.querySelector('.modal')
    overlay.style.display = 'none';
    modal.style.display = 'none';
}

const cliqueFora = (event) => {
    let overlay = document.getElementById("overlay");
    let modal = document.getElementById("modal");

    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.removeEventListener('click', cliqueFora, false);
    }
}

function salvarEdicaoMaquina(){
    let unidade = document.getElementById('escolherUnidade').value;
    let numeroDeSerie = document.getElementById('numeroDeSerie').value;
    let processador = document.getElementById('processador').value;
    let memoriaRam = document.getElementById('memoriaRam').value;
    let escolherArmazenamento = document.getElementById('escolherArmazenamento').value;

        if(unidade != undefined && unidade != '' && numeroDeSerie != undefined && numeroDeSerie != '' && processador != undefined && processador != '' && memoriaRam != undefined && memoriaRam != '' && escolherArmazenamento != undefined && escolherArmazenamento != ''){
            alert("Dados alterados ")    
        }else{
            alert("Verifique os campos");
        }

}