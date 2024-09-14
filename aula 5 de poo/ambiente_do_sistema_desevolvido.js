var debug_ = true

function debugPrint(text){
    let color = "\x1b[32;40m"
    let reset = "\x1b[0m"
    console.log( `${color}` + text + `${reset}`)
}



//for me: table = array
// semi-"bancos de dados" (tabelas) 

var Banco_de_turmas = [];
var Banco_de_professores = [];


//funções de object adictions in "tables"
export function addProfessor(nome, formacao, cpf, idade, email, turma){
    Banco_de_professores.push(
        new professores(nome, formacao, cpf, idade, email, turma)
    )

}

export function searchIndexProfessor(cpf){
    for (const index in Banco_de_professores) {
        
        let prof = Banco_de_professores[index]

        if (cpf == prof.get_cpf){
            return index
        }
    }
}

export function getProfessor(index){
    return Banco_de_professores[index]
}

export function addTurma(serie, email, horario, sala, alunos){
    Banco_de_turmas.push(
        new turma(serie, email, horario, sala, alunos)
    )

}

export function searchIndexTurma(sala, horario){
    for (const index in Banco_de_turmas) {
        
        let turm = Banco_de_turmas[index]

        if (sala == turm.sala && horario == turm.horario){
            return index
        }
    }
}
export function getTurma(index){
    return Banco_de_turmas[index]
}


// classes
export class aluno{
    #cpf;
    #email;
    #matriculas;
    constructor(nome, cpf, idade, email, matricula=0){
        this.nome = nome
        this.#cpf = cpf
        this.idade = idade
        this.#email = email
        this.#matriculas = matricula
        this.tarefas_pendetes = []
    }

    setTarefasPendetes(tarefas){
        this.tarefas_pendetes.push(tarefas)
    }
}


class Exercicio{
    #nome_do_aluno="";
    constructor(assunto, diciplina, turma, professor){
        this.assuto = assunto
        this.diciplina = diciplina
        this.turma = turma
        this.professor = professor
    }

    assinar_nome(nome){
        this.#nome_do_aluno = nome
    }
}

class turma{
    constructor(turma, email, horario = 0, sala = 0){
        this.turma = turma;
        this.email = email;
        this.horario = horario;
        this.sala = sala;
        this.alunos = [];

        if (debug_){
            debugPrint("turma "+turma+" criada para "+sala)
        }
    }
    set_exercicios(Exercicios){
        for (const alunos of this.alunos) {
            alunos.setTarefasPendetes(Exercicios)
        }
    }
}


class funtionario{
    #cpf=0;
    #email="";
    #salario="";
    
    constructor(nome, formacao, cpf, idade, email, cargo, salario){
        this.nome = nome;
        this.formacao = formacao;
        this.#cpf = cpf;
        this.idade = idade;
        this.#email = email;
        this.cargo = cargo;
        this.#salario = salario;
        if (debug_){ 
            debugPrint("funcionario "+nome+" no cargo de "+ cargo)
        }
    }
    cadastro_de_aluno(aluno, turma){
        turma.alunos.push(aluno)
    }
    
    baterPonto(horario){
        debugPrint("bateu o ponto")
    }
    get get_cpf(){
        return this.#cpf
    }
    get get_email(){
        return this.#email
    }
}

class professores extends funtionario{
    constructor(nome, formacao, cpf, idade, email, turma = new Turma()){

        super(nome, formacao, cpf, idade, email, "professor", 1900)
    
        this.sala = turma.sala
        this.horario = turma.horario
        this.turmaName = turma.turma
    
        if (debug_){
            debugPrint(this.nome + "agora da aula a turma " + this.turmaName + " na sala "+this.sala +" no horario "+ this.horario)
        }
    }
    passarExercicios(tarefas){
        let indexTurma = searchIndexTurma(this.sala, this.horario)
        Banco_de_turmas[indexTurma].set_exercicios(tarefas)
    }
}

class curso{
    constructor(){}
}

