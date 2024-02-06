/* const perguntas = [
    {
        pergunta: "Pergunta 01",
        respostas: [
          "Resposta A",
          "Resposta B",
          "Resposta C",
        ],
        correta: 2
    },
    
] */


const perguntas = [
    {
        pergunta: "O que a palavra-chave 'let' é usada para declarar em JavaScript?",
        respostas: [
            "Variável global",
            "Variável local",
            "Constante",
        ],
        correta: 1
    },
    {
        pergunta: "Qual operador é usado para comparar valores e tipos sem fazer coerção em JavaScript?",
        respostas: [
            "===",
            "==",
            "!==",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é utilizado para selecionar um elemento pelo seu ID?",
        respostas: [
            "getElementById()",
            "querySelector()",
            "selectById()",
        ],
        correta: 0
    },
    {
        pergunta: "Como se declara uma função anônima em JavaScript?",
        respostas: [
            "() => {}",
            "function minhaFuncao() {}",
            "const minhaFuncao = function() {}",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'forEach' faz em um array?",
        respostas: [
            "Mapeia cada elemento para um novo array",
            "Executa uma função para cada elemento do array",
            "Filtra os elementos do array",
        ],
        correta: 1
    },
    {
        pergunta: "O que significa a sigla 'DOM' em JavaScript?",
        respostas: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Output Module",
        ],
        correta: 1
    },
    {
        pergunta: "Como se verifica se uma variável é um array em JavaScript?",
        respostas: [
            "typeof minhaVariavel === 'array'",
            "Array.isType(minhaVariavel)",
            "Array.isArray(minhaVariavel)",
        ],
        correta: 2
    },
    {
        pergunta: "Qual evento é acionado quando um botão do mouse é clicado?",
        respostas: [
            "mouseClick",
            "clickEvent",
            "click",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do método 'JSON.parse' em JavaScript?",
        respostas: [
            "Converter uma string JSON em um objeto JavaScript",
            "Converter um objeto JavaScript em uma string JSON",
            "Filtrar elementos de um array",
        ],
        correta: 0
    },
    {
        pergunta: "O que é 'hoisting' em JavaScript?",
        respostas: [
            "Elevar elementos da página no momento do carregamento",
            "Elevar a declaração de uma variável ou função no início do seu contexto de execução",
            "Elevar eventos de clique",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//loop ou laço de repetição

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
   

 for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
     
     corretas.delete(item)
     if(estaCorreta){
      corretas.add(item)
     }
     //alert(corretas.size)
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    }

    quizItem.querySelector('dl').appendChild(dt)
 }

    quizItem.querySelector('dl dt').remove()
  
   //coloca a pergunta na tela
    quiz.appendChild(quizItem)

    }

    




