var debug_ = true

// semi-"bancos de dados" 
var Turmas=[]



// classes
class turma{
    constructor(serie = 0, email, horario = 0, sala = 0, alunos = {}){
        this.serie = serie;
        this.email = email;
        this.horario = horario;
        this.sala = sala;
        this.alunos = alunos;

        if (debug_){
            console.log("turma criada")
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
            console.log("funcionario "+nome+" no cargo de "+ cargo)
        }
    }
    cadastro_de_aluno(aluno, turma){
        turma.alunos.push(aluno)
    }
    
    baterPonto(horario){
        console.log("bateu o ponto")
    }
}

class professores extends funtionario{
    constructor(nome, formacao, cpf, idade, email, turma){
        super(nome, formacao, cpf, idade, email, "professor", 1900)
    }
}