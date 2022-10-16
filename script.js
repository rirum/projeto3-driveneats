


function clicaPrato(selecionaPrato) {
    
    let pai = selecionaPrato.parentElement;
    if(pai.querySelector('.ativo')) {
        pai.querySelector('.ativo').classList.remove("ativo");
        pai.querySelector('.seta-ativo').classList.remove("seta-ativo");
    }

    selecionaPrato.classList.add('ativo');
    selecionaPrato.querySelector('.seta').classList.add("seta-ativo");

botaoAtivo();
}


function botaoAtivo(){
    let pratos = document.querySelector('.container-pratos');
    let bebidas = document.querySelector('.container-bebidas');
    let sobremesas = document.querySelector('.container-sobremesas');
    if(pratos.querySelector('.ativo') 
    && bebidas.querySelector('.ativo')
    && sobremesas.querySelector('.ativo')) {
        let botao = document.querySelector('.button');
        botao.classList.add("button-ativo");
        botao.onclick=fecharPedido;
     document.querySelector('#button-text').innerHTML="Fechar pedido";

    }

}

function fecharPedido() {
    let pratos = document.querySelector('.container-pratos');
    let pratoSelecionado = pratos.querySelector('.ativo');
    let bebidas = document.querySelector('.container-bebidas');
    let bebidaSelecionado = bebidas.querySelector('.ativo');
    let sobremesas = document.querySelector('.container-sobremesas');
    let sobremesaSelecionado = sobremesas.querySelector('.ativo');


    let nomePratoSelecionado = pratoSelecionado.getElementsByClassName('nome-prato')[0].innerHTML;
    let valorPratoSelecionado = pratoSelecionado.getElementsByClassName('valor-prato')[0].getAttribute('value');
    
    let nomeBebidaSelecionado = bebidaSelecionado.getElementsByClassName('nome-prato')[0].innerHTML;
    let valorBebidaSelecionado = bebidaSelecionado.getElementsByClassName('valor-prato')[0].getAttribute('value');

    let nomeSobremesaSelecionado = sobremesaSelecionado.getElementsByClassName('nome-prato')[0].innerHTML;
    let valorSobremesaSelecionado = sobremesaSelecionado.getElementsByClassName('valor-prato')[0].getAttribute('value');

    
    let valorTotal = Number(valorPratoSelecionado) + Number(valorBebidaSelecionado) + Number(valorSobremesaSelecionado);

    let whatsApp = `Olá, gostaria de fazer o pedido:\n
    - Prato: ${nomePratoSelecionado}
    - Bebida: ${nomeBebidaSelecionado}
    - Sobremesa: ${nomeSobremesaSelecionado}
    - Total: ${valorTotal.toFixed(2)} `;

    whatsApp = encodeURIComponent(whatsApp);
    window.open("https://wa.me/5541999245138?text=" + whatsApp);
}

