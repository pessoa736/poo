debug_ = true


class turma{
    constructor(serie, email, horario, sala, alunos){
        this.serie = serie;
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
    cadastro_de_aluno(){

    }
}