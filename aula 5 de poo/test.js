import { enableDebug, addFuncionario, addProfessor, addTurma, getTurma, searchIndexTurma, getfuncionario, searchIndexfuncionario, addAlunos, curso, getAlunos, searchIndexAluno } from "./ambiente_do_sistema_desevolvido.js";

// Lembrando, aqui nao usei nenhum banco de dados. 
// Quando me refiro a banco e so uma table(array) onde guardo temporariamente dados
// durante a execucao do programa.

enableDebug()

let TI = new curso('TI')


console.log("teste de criacao de fucionario e addiction ao banco de functionarios:")
addFuncionario(
    "davi do santos passos",
    "tudo que existe",
    "123456789-01",
    "20M",
    "robloxamongus@minecraft.sus",
    "secretario",
    900000000000000.00   
)



console.log("\ntest de criação (e addiction ao banco) de/da turma: ")
addTurma("info-07", "turma1@gmail.com", "14:00", "sala03")


console.log("test para pegar uma turma no banco turma:")
var turma = getTurma(searchIndexTurma("sala03", "14:00"))

console.log("teste de addiction turma no curso:")
TI.add_turma(turma)

console.log("\ntest de addiction professor:")
addProfessor(
    "colodoado valentim", 
    "todas as areas conhecidas pela a humanidade", 
    "101.010.101-01",
    "desconhecida",
    "AprendaAqui@gmail.com.br.aaaaa",
    turma
)

console.log("test de create um aluno:")
addAlunos("michael json", "119.400.289-22", "67", "annieAreYouOk@areYou.ok.annie", TI)

console.log("test de pegar o aluno do banco dele:")
let aluno = getAlunos(searchIndexAluno("119.400.289-22"))

console.log("test de pegar o funcionario do banco dele:")
var secretario = getfuncionario(searchIndexfuncionario("123456789-01"))

console.log("test de cadastro do aluno com um funcionario:")
secretario.cadastro_de_aluno(aluno, TI, turma)