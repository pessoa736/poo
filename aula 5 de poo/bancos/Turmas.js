import { addTurma, getTurma, searchIndexTurma } from "../ambiente_do_sistema_desevolvido.js"
import { INIT_Cursos } from "./cursos.js"

export function init_Turmas(){
    var sala = "sala03"

    var TI=INIT_Cursos()

    addTurma("info-01", "turma1@gmail.com", "08:00-11:00", sala)
    addTurma("info-02", "turma2@gmail.com", "14:00-17:00", sala)
    addTurma("info-03", "turma3@gmail.com", "17:00-20:00", sala)

    var turmas=[]
    for (let i = 0; i < 2; i++) {
        turmas[i] = getTurma(i);
        TI.add_turma(turmas[i])
    }

    return turmas
}