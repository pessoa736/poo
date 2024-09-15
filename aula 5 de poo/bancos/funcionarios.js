import { addFuncionario, addProfessor, getfuncionario } from "../ambiente_do_sistema_desevolvido.js";
import { init_Turmas } from "./Turmas.js";

export function init_funcionarios(){
    var turmas = init_Turmas()

    addFuncionario("davi dos santos",   "tudo que existe",              "000.000.000-01", "20M",    "robloxamongus@minecraft.sus",      "secretario", 2500.00)
    addFuncionario("noob roblox",       "pedagogia",                    "000.000.000-01", "69",     "noobMasterroblox88@baller.lua",    "diretor", 2500.00)

    // abaixo foi gerado pelo chtgpt
    addFuncionario("ana silva",         "ciências ocultas",             "000.000.000-02", "50M",    "ana.magica@darkvoid.myst",         "mago", 3000.00)
    addFuncionario("carlos pereira",    "engenharia do caos",           "000.000.000-03", "33M",    "carlos.c@chaoslab.tech",           "engenheiro", 4000.00)
    addFuncionario("joana santos",      "matemática bizarra",           "000.000.000-04", "88",     "joana.pi@mathhorror.net",          "professora", 3500.00)
    addFuncionario("pedro oliveira",    "filosofia do abismo",          "000.000.000-05", "100M",   "pedro.abismo@darkthoughts.org",    "pensador", 4500.00)
    addFuncionario("marina costa",      "literatura interdimensional",  "000.000.000-06", "7M",     "marina.books@parallelworlds.io",   "autora", 5000.00)
    addFuncionario("felipe mendes",     "programação espacial",         "000.000.000-07", "42",     "felipe.space@galacticcode.com",    "desenvolvedor", 4200.00)
    addFuncionario("lucas nogueira",    "história alternativa",         "000.000.000-08", "77M",    "lucas.time@timeloop.net",          "historiador", 3700.00)
    addFuncionario("fernanda lopes",    "biologia alienígena",          "000.000.000-09", "99M", "  fernanda.bio@extraterrestres.org",  "cientista", 5200.00)
    addFuncionario("daniel rodrigues",  "economia apocalíptica",        "000.000.000-10", "666",    "daniel.dinheiro@doomfinance.biz",  "economista", 4600.00)
    addFuncionario("rafaela almeida",   "linguística digital",          "000.000.000-11", "3M", "   rafaela.words@netlingua.com",       "linguista", 3800.00)
    addFuncionario("bruno teixeira",    "psicologia do surreal",        "000.000.000-12", "90M",    "bruno.psic@bizarrobrain.org",      "psicólogo", 5300.00)
    addFuncionario("julia martins",     "artes do absurdo",             "000.000.000-13", "1M",     "julia.paint@impossibleart.space",  "artista", 4700.00)

    addProfessor("colodoado valentim", "todas as areas conhecidas pela a humanidade", "101.010.101-01", "desconhecida", "AprendaAqui@gmail.com.br.aaaaa", turmas[1])
    addProfessor("victor barros",     "astronomia oculta",                            "000.000.000-15", "500M",         "victor.stars@darksky.univ",      turmas[2])
    addProfessor("mariana ferreira",  "física do impossível",                         "000.000.000-16", "60",           "mariana.phys@quantumlogic.net",  turmas[3])
    
    // daqui para baixo fui eu
    var funcionario=[]
    for (var i=0; i<16; i++){
        funcionario[i] = getfuncionario(i)
    }
    return funcionario
}