import { enableDebug, addFuncionario, addProfessor, addTurma, getfuncionario, searchIndexfuncionario, addAlunos, curso, searchAluno, Exercicio, show_all_bancos, searchTurma, getAluno } from "./ambiente_do_sistema_desevolvido.js";

// Lembrando, aqui nao usei nenhum banco de dados. 
// Quando me refiro a banco e so uma table(array) onde guardo temporariamente dados
// durante a execucao do programa.

enableDebug()

let TI = new curso('TI')

console.log("\ntest de criação (e addiction ao banco) de/da turma: ")
addTurma("info-07", "turma1@gmail.com", "14:00", "sala03")


console.log("\ntest para pegar uma turma no banco turma:")
var turma = searchTurma("sala03", "14:00")

console.log("\nteste de addiction turma no curso:")
TI.add_turma(turma)


console.log("teste de criacao de fucionario e addiction ao banco de functionarios:")
addFuncionario(
    "davi do santos passos",
    "tudo que existe",
    "123.456.789-01",
    "20M",
    "robloxamongus@minecraft.sus",
    "secretario",
    900000000000000.00   
)
console.log("\ntest de addiction professor:")
addProfessor(
    "colodoado valentim", 
    "todas as areas conhecidas pela a humanidade", 
    "101.010.101-01",
    "desconhecida",
    "AprendaAqui@gmail.com.br.aaaaa",
    turma
)

console.log("\ntest de create um aluno:")
addAlunos("michael json", "119.400.289-22", "67", "annieAreYouOk@areYou.ok.annie", TI)

console.log("\ntest de pegar o aluno do banco dele:")
var aluno = searchAluno("119.400.289-22")

console.log("\ntest de pegar o funcionario do banco dele:")
var secretario  =   getfuncionario(searchIndexfuncionario("123.456.789-01"))
var professor   =   getfuncionario(searchIndexfuncionario("101.010.101-01"))

console.log("\ntest de cadastro do aluno com um funcionario:")
secretario.cadastro_de_aluno(aluno, TI, turma)


console.log("\ntest de passa exercicios")
professor.passarExercicios(
    new Exercicio(
        "fazer um sitema de gerenciamento geral escolar",
        "(poo) programacao orientada a objeto",
        turma
    )
)

console.log("\ntest de fazer exercicios")
var objaluno=getAluno(aluno)
objaluno.fazerTodasAtividades()

show_all_bancos()