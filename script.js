var valor = 0;

function confirmacao(produto, preco) {
    valor = valor + preco;
    alert(valor);
}




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
        document.querySelector('.button').classList.add("button-ativo");
    document.querySelector('#button-text').innerHTML="Fechar pedido";
    }

}








