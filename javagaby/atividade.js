//atividade 1
var horarioAcordar = "7"
var horarioSair = "8"
if (horarioAcordar < horarioSair){
  console.log("Esta tudo certo com os horarios");
} else {
  console.log("Nao esta certo com o horario");
}


// alert("oi")
// alert("oi")
// alert("oi")

//atividade 2
let visitante = {
nome: "Gabriel",
idade: 20,
documento: 123456,
}
console.log (visitante.nome, "com", visitante.idade, "anos", "portador do documento", visitante.documento );


//atividade 3
var senhaCorreta = 1
var senhaDigitada = 1
if(senhaDigitada = senhaCorreta){
  console.log("acesso permitido");
} else {
  console.log("acesso negado");
}


// //atividade 4
var precoOriginal = 113
var desconto = 11
var final = precoOriginal * desconto;
console.log (final)


//atividade 5
class Livro {
  constructor(titulo, autor, ano){
this.titulo = titulo;
this.autor = autor;
this.ano = ano;
  }
    detalhes() {
      console.log(
        `O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}.`
      );
    }

}

let Livro1 = new Livro("O estranho mundo de Jack", "Gabriel Model", 1998);

Livro1.detalhes();