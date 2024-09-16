import { addAlunos, addFuncionario, addProfessor, addTurma, curso, disableDebug, enableDebug, Get_numero_de_alunos, Get_numero_de_turmas, getAlunos, getTurma } from "../ambiente_do_sistema_desevolvido.js";

var sala;
var TI;

export function init_banco(){
    //ABAIXO FEITO POR MIM
    sala = "sala03"

    TI = new curso("tecnco em informatica") 

    addTurma("info-01", "turma1@gmail.com", "08:00-11:00", sala)
    addTurma("info-02", "turma2@gmail.com", "14:00-17:00", sala)
    addTurma("info-03", "turma3@gmail.com", "17:00-20:00", sala)

    addFuncionario("davi dos santos",   "tudo que existe",              "000.000.000-00", "20M",    "robloxamongus@minecraft.sus",      "Diretor",      6000.00)
    addFuncionario("noob roblox",       "pedagogia",                    "000.000.000-01", "69",     "noobMasterroblox88@baller.lua",    "secretario",   2500.00)

    // abaixo foi gerado pelo chtgpt
    addFuncionario("ana silva",         "ciências ocultas",             "000.000.000-02", "50M",    "ana.magica@darkvoid.myst",         "mago",         3000.00)
    addFuncionario("carlos pereira",    "engenharia do caos",           "000.000.000-03", "33M",    "carlos.c@chaoslab.tech",           "engenheiro",   4000.00)
    addFuncionario("joana santos",      "matemática bizarra",           "000.000.000-04", "88",     "joana.pi@mathhorror.net",          "professora",   3500.00)
    addFuncionario("pedro oliveira",    "filosofia do abismo",          "000.000.000-05", "100M",   "pedro.abismo@darkthoughts.org",    "pensador",     4500.00)
    addFuncionario("marina costa",      "literatura interdimensional",  "000.000.000-06", "7M",     "marina.books@parallelworlds.io",   "autora",       5000.00)
    addFuncionario("felipe mendes",     "programação espacial",         "000.000.000-07", "42",     "felipe.space@galacticcode.com",    "desenvolvedor",4200.00)
    addFuncionario("lucas nogueira",    "história alternativa",         "000.000.000-08", "77M",    "lucas.time@timeloop.net",          "historiador",  3700.00)
    addFuncionario("fernanda lopes",    "biologia alienígena",          "000.000.000-09", "99M", "  fernanda.bio@extraterrestres.org",  "cientista",    5200.00)
    addFuncionario("daniel rodrigues",  "economia apocalíptica",        "000.000.000-10", "666",    "daniel.dinheiro@doomfinance.biz",  "economista",   4600.00)
    addFuncionario("rafaela almeida",   "linguística digital",          "000.000.000-11", "3M", "   rafaela.words@netlingua.com",       "linguista",    3800.00)
    addFuncionario("bruno teixeira",    "psicologia do surreal",        "000.000.000-12", "90M",    "bruno.psic@bizarrobrain.org",      "psicólogo",    5300.00)
    addFuncionario("julia martins",     "artes do absurdo",             "000.000.000-13", "1M",     "julia.paint@impossibleart.space",  "artista",      4700.00)
    
    //ABAIXO FEITO POR MIM
    addProfessor("colodoado valentim", "todas as areas conhecidas pela a humanidade", "101.010.101-01", "desconhecida", "AprendaAqui@gmail.com.br.aaaaa", getTurma(0))
    addProfessor("victor barros",     "astronomia oculta",                            "000.000.000-15", "500M",         "victor.stars@darksky.univ",      getTurma(1))
    addProfessor("mariana ferreira",  "física do impossível",                         "000.000.000-16", "60",           "mariana.phys@quantumlogic.net",  getTurma(2))

    addAlunos("michael json",   "119.400.289-22", "67", "annieAreYouOk@areYou.ok.annie",    TI)

    // abaixo foi gerado pelo chtgpt
    addAlunos("julia roberts",  "123.456.789-10", "21", "prettyWoman@hollywood.act",        TI)
    addAlunos("bruce wayne",    "987.654.321-00", "30", "darkKnight@gotham.bat",            TI)
    addAlunos("lara croft",     "111.222.333-44", "25", "tombRaider@adventure.quest",       TI)
    addAlunos("peter parker",   "789.101.112-13", "22", "spideySense@daily.bugle",          TI)
    addAlunos("sarah connor",   "555.666.777-88", "35", "terminator@future.war",            TI)
    addAlunos("walter white",   "444.555.666-77", "50", "heisenberg@chemistry.teacher",     TI)
    addAlunos("tony stark",     "888.999.000-11", "40", "ironMan@stark.ind",                TI)
    addAlunos("diana prince",   "333.222.111-00", "28", "wonderWoman@amazon.power",         TI)
    addAlunos("neo matrix",     "777.888.999-22", "35", "theOne@matrix.free",               TI)
    addAlunos("rick sanchez",   "999.888.777-11", "70", "rickC137@portal.science",          TI)
    
    //ABAIXO FEITO POR MIM
    console.log("banco gerado")
}


export function cadastro_de_todos_alunos(funcionario){
    console.log("------------cadastro de alunos------------")
    for (let i = 0; i < Get_numero_de_alunos(); i++ ){
        let j=0

        for(let h=0; h<Get_numero_de_turmas(); h++){
            if (getTurma(h).numero_de_vagas <= getTurma(h).alunos.length){
                j++
            }
        }
        funcionario.cadastro_de_aluno( 
            getAlunos(i), 
            TI, 
            j
        )
    }
}


export function passar_atividade_para_os_alunos(professor, atividade){

}