import { produtos } from "./produtos.js";

const elemento = {
  btnCurva: document.querySelectorAll(".btnCurva"),
  containerDisplay: document.querySelector("#containerDisplay"),
  btnListarTodos: document.getElementById('listarTodos'),
};

// console.log(elemento.btnListarTodos);

elemento.btnCurva.forEach((item) => {
  item.addEventListener("click", (evento) => {
    // console.log(evento.target.id);
    listarProdutosPorCurvaABC(evento.target.id);
  });
});

function listarProdutosPorCurvaABC(curva) {
  let produtosFiltrados = produtos.filter((produto) => produto.curva_abc === curva);
  //   console.table(produtosFiltrados);
  inserirDadosCurvaABC(produtosFiltrados);
}

function inserirDadosCurvaABC(dados) {
  // Cria um objeto para gerar os paragrafos (Ainda sem dados - PURO!)
  let colunasGRID = {
    id: document.createElement("p"),
    nome: document.createElement("p"),
    preco_venda: document.createElement("p"),
    estoque: document.createElement("p"),
  };

  // Definindo o valor que cada paragrafo terá (Exemplo: ID, NOME, PREÇO, ESTOQUE)
  colunasGRID.id.innerText = "ID";
  colunasGRID.nome.innerText = "NOME";
  colunasGRID.preco_venda.innerText = "PREÇO VENDA";
  colunasGRID.estoque.innerText = "ESTOQUE";

  elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque);

  // Variavel 

console.table(dados);

let dadosFiltrados = dados

// Metodo para listar

dadosFiltrados.forEach((item) => {
  let produto = {
id: item.id,
nome: item.nome,
preco_venda: item.preco_venda,
estoque: item.estoque,
  };
  // Criação dos paragrafos das colunas
let id = document.createElement("p");
let nome = document.createElement("p");
let preco_venda = document.createElement("p");
let estoque = document.createElement("p");
//Definição de texto de cada coluna
id.innerText = produto.id;
nome.innerText = produto.nome;
preco_venda.innerText = produto.preco_venda;
estoque.innerText = produto.estoque;
})

}


let listarProdutos = produtos.map((produto) => {
  return {
    id: produto.id,
    nome: produto.nome,
  };
});
