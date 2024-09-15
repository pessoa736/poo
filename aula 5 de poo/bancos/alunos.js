import { addAlunos, getAlunos } from "../ambiente_do_sistema_desevolvido.js";
import { INIT_Cursos } from "./cursos.js";
import { init_funcionarios } from "./funcionarios.js";


var fun=init_funcionarios()
var cursos=INIT_Cursos()

export function init_alunos(){
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
    
    var alunos = []
    //// daqui para baixo fui eu
    for(var i=0; i<9; i++){
        alunos[i] = getAlunos(i)
    }
    return alunos
}