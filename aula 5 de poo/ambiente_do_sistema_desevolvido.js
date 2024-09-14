var debug_ = true


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
export function addTurmas(serie, email, horario, sala, alunos){
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

    getTarefasPendetes(assunto){
        for (const tarefas of this.tarefas_pendetes) {
            if (tarefas.assunto == assunto){
                
            }
        }
    }
    setTarefasPendetes(tarefas){
        this.tarefas_pendetes.push(tarefas)
    }
}


export class Exercicio{
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

export class turma{
    constructor(serie = 0, email, horario = 0, sala = 0){
        this.serie = serie;
        this.email = email;
        this.horario = horario;
        this.sala = sala;
        this.alunos = [];

        if (debug_){
            console.log("turma criada")
        }
    }
    set_exercicios(Exercicios){
        for (const alunos of this.alunos) {
            alunos.setTarefasPendetes(Exercicios)
        }
    }
}


export class funtionario{
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
            console.log("funcionario "+nome+" no cargo de "+ cargo)
        }
    }
    cadastro_de_aluno(aluno, turma){
        turma.alunos.push(aluno)
    }
    
    baterPonto(horario){
        console.log("bateu o ponto")
    }
    get get_cpf(){
        return this.#cpf
    }
    get get_email(){
        return this.#email
    }
}

export class professores extends funtionario{
    constructor(nome, formacao, cpf, idade, email, sala, horario){
        super(nome, formacao, cpf, idade, email, "professor", 1900)
        this.sala = sala
        this.horario = horario
    }
    passarExercicios(tarefas){
        let indexTurma = searchIndexTurma(this.sala, this.horario)
        Banco_de_turmas[indexTurma].set_exercicios(tarefas)
    }
}