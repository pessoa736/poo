
// Lembrando, aqui nao usei nenhum banco de dados. 
// Quando me refiro a banco e so uma table(array) onde guardo temporariamente dados
// durante a execucao do programa.


var debug_ = false

export function enableDebug(){
    debug_ = true
    debugPrint("debug_mode_on\n\n", "\x1b[31m")
}


function debugPrint(text, color = "\x1b[32m"){
    let reset = "\x1b[0m"
    if (debug_){
        console.log( `${color}` + text + `${reset}`)
    }
}



//for me: table = array
// tabelas 

var Banco_de_turmas = [];
var Banco_de_funcionarios = [];
var Banco_de_alunos = [];


//funções de object adictions in "tables"
export function addProfessor(nome, formacao, cpf, idade, email, turma){
    Banco_de_funcionarios.push(
        new professores(nome, formacao, cpf, idade, email, turma)
    )
    debugPrint("o professor "+ nome + " foi addicionado ao banco de functionarios")
}
export function addFuncionario(nome, formacao, cpf, idade, email, cargo, salario){
    Banco_de_funcionarios.push(
        new funcionario(nome, formacao, cpf, idade, email, cargo, salario)
    )
    debugPrint("o "+cargo +" "+ nome + " foi addicionado ao banco de functionarios")
}

export function searchIndexfuncionario(cpf){
    for (const index in Banco_de_funcionarios) {
        
        let prof = Banco_de_funcionarios[index]

        if (cpf == prof.get_cpf){
            debugPrint("o funcionario com cpf " + cpf + " esta on index " + index + " no banco de funcionarios")
            return index
        }
    }
}

export function getfuncionario(index){
    let fun = Banco_de_funcionarios[index]
    debugPrint("o funcionario pego do index " + index + " foi: " + fun.nome)
    return fun
}

export function addTurma(serie, email, horario, sala, alunos){
    Banco_de_turmas.push(
        new turma(serie, email, horario, sala, alunos)
    )
    debugPrint("a turma " + serie + " foi addicionada ao banco de Turmas")
}

export function searchIndexTurma(sala, horario){
    for (const index in Banco_de_turmas) {
        
        let turm = Banco_de_turmas[index]

        if (sala == turm.sala && horario == turm.horario){
            debugPrint("a Turma da sala " + sala + " e do horario " + horario + " esta on index " + index + "no banco de funcionarios")
            return index
        }
    }
}
export function getTurma(index){
    let turm=Banco_de_turmas[index]
    debugPrint("a turma pega do index " + index + " foi: " + turm.turma)
    return turm
}

export function addAlunos(nome, cpf, idade, email, matricula){
    Banco_de_alunos.push(
        new aluno(nome, cpf, idade, email, matricula)
    )
    debugPrint("o aluno "+ nome + " foi addicionado ao banco de Alunos")
}

export function searchIndexAluno(cpf){
    for (const index in Banco_de_alunos) {
        
        var alun = Banco_de_alunos[parseInt(index)]

        if (cpf == alun.cpf){
            debugPrint("o aluno com cpf " + cpf + " esta on index " + index + " no banco de Alunos")
            return parseInt(index)
        }
    }
    return 0
}
export function getAlunos(index){
    var alu = Banco_de_alunos[index]
    debugPrint("a turma pega do index " + index + " foi: " + alu.nome)
    if (index!=null){
        return alu
    }
}

// classes
export class aluno{
    #cpf;
    #email;
    #matriculas;
    constructor(nome, cpf, idade, email, curso){
        this.nome = nome
        this.#cpf = cpf
        this.idade = idade
        this.#email = email
        this.#matriculas = curso.matriculas.length
        this.tarefas_pendetes = []
    }

    fazerTodasAtividades(){
        for (const ta of this.tarefas_pendetes) {
            ta.assinar_nome(this.nome)
            ta.concluir(this.nome)
        }
    }

    setTarefasPendetes(tarefas){
        this.tarefas_pendetes.push(tarefas)
    }

    get cpf(){
        debugPrint("o cpf do "+this.nome+" foi consutado" )
        return this.#cpf
    }
}


export class Exercicio{
    #nome_do_aluno="";
    constructor(assunto, diciplina, turma, professor){
        this.assuto = assunto
        this.diciplina = diciplina
        this.turma = turma
        this.professor = professor

        debugPrint("atividade '"+assunto+"' da diciplina de '"+ diciplina + "' para a turna" + turma.turma)
    }

    assinar_nome(nome){
        this.#nome_do_aluno = nome
        debugPrint(
            "o execicio da dicplina "+ this.diciplina + " do assulto "+ this.assuto+
            "foi assinada no nome de "+this.#nome_do_aluno 
        )
    }
    concluir(nome){
        debugPrint(
            "o execicio de "+nome+" da dicplina "+ this.diciplina + " do assulto "+ this.assuto+
            "foi concluida"
        )
    }
}

class turma{
    constructor(turma, email, horario = 0, sala = 0){
        this.turma = turma;
        this.email = email;
        this.horario = horario;
        this.sala = sala;
        this.alunos = [];

        debugPrint("turma "+turma+" criada para "+sala)
    }
    set_exercicios(Exercicios){
        for (const alunos of this.alunos) {
            alunos.setTarefasPendetes(Exercicios)
        }
        debugPrint("Exercicios para a turma" + this.turma + " foram adicionadas")
    }
}


class funcionario{
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
       
        debugPrint(
            "funcionario "+nome+
            " no cargo de "+ cargo+
            " com um salario de " + salario
        )
        
    }
    cadastro_de_aluno(aluno, curso, turma){
        curso.add_aluno(aluno, turma)
        debugPrint(this.nome + " adicionou o aluno " + aluno.nome + " na turma " + turma.turma + " do curso de "+ curso.nome)
    }
    
    baterPonto(horario){
        debugPrint("o "+ this.nome +"bateu o ponto")
    }
    get get_cpf(){
        debugPrint("o "+ this.nome + "teve o cpf consultado")
        return this.#cpf
    }
    get get_email(){
        debugPrint("o "+ this.nome + "teve o email consultado")
        return this.#email
    }
}

class professores extends funcionario{
    constructor(nome, formacao, cpf, idade, email, turma = new Turma()){

        super(nome, formacao, cpf, idade, email, "professor", 1900)
    
        this.sala = turma.sala
        this.horario = turma.horario
        this.turmaName = turma.turma
    
        debugPrint(
            this.nome + "agora da aula a turma " + 
            this.turmaName + " na sala "+this.sala +
            " no horario "+ this.horario 
        )
    }
    passarExercicios(tarefas){
        debugPrint("o "+this.nome+" passou exercicios para a sala "+ this.sala)
        let indexTurma = searchIndexTurma(this.sala, this.horario)
        Banco_de_turmas[indexTurma].set_exercicios(tarefas)
    }
}

export class curso{
    turmas = [];
    matriculas = [];
    constructor(nome){
        this.nome = nome;
        this.mediaNecessaria = 7;
        
    }
    add_turma(turma){
        this.turmas.push(turma)
        debugPrint("foi adicionado ao curso de "+ this.nome + " a turma " + turma.turma)
    }
    add_aluno(aluno, turma){
        for (const t of this.turmas) {
            if (turma.turma == t.turma) {
                t.alunos.push(aluno)
                debugPrint("adicionando o aluno" + aluno.nome + " na turma " + t.turma + "no curso de " + this.nome)
            }
        }
    }
}

