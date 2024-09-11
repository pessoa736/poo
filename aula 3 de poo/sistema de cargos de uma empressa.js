

total_ganho_no_mes = 0
meta = Math.random(25, 70)*1000

functionarios_na_empresa = []

function calcular_numero_de_functionarios(){

}

class funcionario{
    #salario;
    #cargo;
    #bonus = 0;

    constructor(nome, salario, cargo){
        this.nome = nome;
        this.#salario = salario;
        this.#cargo = cargo;
    }

    set_bonus(bonus){
        this.#bonus = bonus
    }
    
}

class gerente extends funcionario{
    constructor(nome){
        super.constructor(nome, 3000.00, "gerente")
    }
    calcular_bonus(client_a_calcula){
        if (meta == total_ganho_no_mes){
            client_a_calcula.set_bonus(meta*0.01)
        }
    }
}

class atendente extends funcionario{
    constructor(nome){
        super.constructor(nome, 1400.00, "atendente")
        this.clientes_atendidos = 0
    }

    atender_client(){
        this.atender_client++;
        total+= 50
    }     
}

