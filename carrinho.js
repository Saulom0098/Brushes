
  let carrinho = [];
  
  function selecionarProduto(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
    alert(`${nome} adicionado ao carrinho!`);
  }

  function atualizarCarrinho() {
    const contador = document.querySelector('.absolute span');
    contador.innerText = carrinho.length;
  }