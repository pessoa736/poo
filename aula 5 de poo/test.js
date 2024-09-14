import { addProfessor, addTurma, getTurma, searchIndexTurma } from "./ambiente_do_sistema_desevolvido.js";

console.log("test de criação de turma: ")
addTurma("info-07", "turma1@gmai.com", "14:00", "sala03")

var turma = getTurma(searchIndexTurma("sala03", "14:00"))

console.log("\ntest de addiction professor:")
addProfessor(
    "colodoado valentim", 
    "todas as areas conhecidas pela a humanidade", 
    "101.010.101-01",
    "desconhecida",
    "AprendaAqui@gmail.com.br.aaaaa",
    turma
)