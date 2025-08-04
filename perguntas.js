// Função para criar um cartão
function criaCartao(categoria, pergunta, resposta) {
    // Criação dos elementos HTML do cartão
    const cartao = document.createElement('article');
    cartao.classList.add('cartao');
  
    const conteudo = document.createElement('div');
    conteudo.classList.add('cartao__conteudo');
    
    const frente = document.createElement('div');
    frente.classList.add('cartao__frente');
    
    const verso = document.createElement('div');
    verso.classList.add('cartao__verso');
    
    const categoriaElem = document.createElement('h3');
    categoriaElem.textContent = categoria;
    
    const perguntaElem = document.createElement('p');
    perguntaElem.classList.add('cartao__pergunta');
    perguntaElem.textContent = pergunta;
  
    const respostaElem = document.createElement('p');
    respostaElem.classList.add('cartao__resposta');
    respostaElem.textContent = resposta;
  
    // Montagem do conteúdo do cartão
    frente.appendChild(categoriaElem);
    frente.appendChild(perguntaElem);
    verso.appendChild(respostaElem);
    
    conteudo.appendChild(frente);
    conteudo.appendChild(verso);
    
    cartao.appendChild(conteudo);
  
    // Adiciona o cartão no container
    document.getElementById('container').appendChild(cartao);
  }
  
  // Criando os cartões dinamicamente
  criaCartao(
    'Programação',
    'O que é JavaScript?',
    'O JavaScript é uma linguagem de programação.'
  );
  
  criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris.'
  );
  
  criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa.'
  );