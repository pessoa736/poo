// 3 Atividade do curso Tecnico em Informatica do GRAU TECNICO
// 1° questão proposta: "criar 1 classe funcionario e 2 subclasses gerente e atendente"

var total_ganho_no_mes = 0
var meta = 0

var functionarios_na_empresa = []

function random(min, max) {
    return Math.random() * (max - min) + min;
}
  

class funcionario{
    #salario;
    #cargo;
    #bonus = 0;

    constructor(nome, salario = 1400, cargo){
        this.nome = nome;
        this.#salario = salario;
        this.#cargo = cargo;

        console.log("O(A) "+ nome + " foi contrado para o cargo de " + cargo + " recebendo "+salario + "\n")
    }

    set_bonus(bonus){
        this.#bonus += bonus;
        console.log("O(A) "+ this.nome + "recebeu um bonus de: "+ bonus)
    }

    receber_salario(){
        console.log("O(A) "+ this.nome + " recebeu um salario de:" + (this.#salario+this.#bonus))
        this.#bonus = 0
    }
    
}

class gerente extends funcionario{
    
    constructor(nome){
        super(nome, 3000.00, "gerente");
    }

    #calcular_bonus(){
        if (meta == total_ganho_no_mes){

            console.log("meta batida!!!")

            for (let funcionario_ of functionarios_na_empresa){
                
                let bonus = meta*0.01;
                funcionario_.set_bonus(bonus);
            
            }

        }
    }
    working(i){
        if (i>29){
            this.#calcular_bonus(i);
        }
    }
}

class atendente extends funcionario{
    
    constructor(nome){
        
        super(nome, 1400.00, "atendente");
        this.clientes_atendidos = 0;
    
    }

    #atender_client(){
    
        this.atender_client++;
        total_ganho_no_mes += random(50, 250);
    
    }
    
    working(dia){
    
        this.#atender_client();
    
    }
}



export function working(){
    for (let i=1; i<30; i++){    
        for (let j=8; j<=17; j++){
            for (let funcionario_ of functionarios_na_empresa){
                if (random(10, 1) > 4){
                    funcionario_.working(i);
                }
            }
        }
        console.log("\n\n\n um dia se passou")

    }
}
export function add_atendente(nome){
    functionarios_na_empresa.push(new atendente(nome));
}

export function add_gerente(nome){
    functionarios_na_empresa.push(new gerente(nome));
}

export function set_meta(n){
    meta = n;
    console.log("meta para esse mês: "+n)
}

