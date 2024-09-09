// 2 Atividade do curso Tecnico em Informatica do GRAU TECNICO
// 2° questão proposta: "criar uma classe aluno, com atributos protegidos e que de para fazer uma media"

var alunos_matriculados=[];

function matricular_aluno(aluno){
    alunos_matriculados.push(aluno)
}


class aluno{

    // criação dos atributos protegidos
    #nome;
    #matricula;
    #notas=[];

    // função de crianção
    constructor(nome = "aluno", materia = "disciplina não expecificada"){
        this.#nome = nome;
        this.#matricula = alunos_matriculados.length+1
        this.materia = materia;
    }

    set_notas(bimestre, nota = 0){
        this.#notas[bimestre+1] = nota;
        console.log("a nota do "+bimestre+"° bimestre de " + this.#nome + " é: " + nota)
    } 

    get get_matricula(){
        return this.#matricula
    }

    //function protegida
    #media(){
        let sum = 0
        let inte = 0
        for (i in this.#notas){
            sum += this.#notas[i]
            inte++
        }
        return sum/inte
    }

    mostrar_situação_do_aluno(){

        console.log("\n aluno: " + this.#nome)
        console.log("   matricula: " + this.#matricula)
        console.log("   materias: " + this.materia)
        console.log("   notas: ")
        for (i in this.#notas){
            console.log("       "+i + "° bimestre " + this.#notas[i]+"; ")
        }
        console.log("   media: " + this.#media())

        console.log("----------------------------------------------------------------")
    }
}


function show_alunos(){
    for (i in alunos_matriculados){
        alunos_matriculados[i].mostrar_situação_do_aluno()
    }
}

function colocar_nota_em_deteminados_alunos(matricula, bimestre, nota){
    for(i in alunos_matriculados){
        if (alunos_matriculados[i].get_matricula == matricula){
            alunos_matriculados[i].set_notas(bimestre, nota)
        }
    }
}


//adicionando 2 alunos, 1 colocado corretamente e outro não
matricular_aluno(new aluno("davi dos santos passos", "POO (programação orientada a objetos)"))
matricular_aluno(new aluno())

colocar_nota_em_deteminados_alunos(1, 1, 10)
colocar_nota_em_deteminados_alunos(1, 2, 10)
colocar_nota_em_deteminados_alunos(1, 3, 10)
colocar_nota_em_deteminados_alunos(1, 4, 10)

console.log("\n")
colocar_nota_em_deteminados_alunos(2, 1, 2)
colocar_nota_em_deteminados_alunos(2, 2, 3)
colocar_nota_em_deteminados_alunos(2, 3, 1)
colocar_nota_em_deteminados_alunos(2, 4, 9)

show_alunos()