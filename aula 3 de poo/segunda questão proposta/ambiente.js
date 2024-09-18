
export class banco{
    #contas=[];

    get quantidadesDeContas(){
        return this.#contas.length
    }
    add_Contas(conta){
        this.#contas.push(conta.titular)
    }

    show_all_titulares(){
        for (const titular of this.#contas) {
            console.log(titular)
        }
    }
}


class contaBancaria{
    #saldo;
    #tipo
    constructor(titular, tipo, banco){
        this.id_banco = banco.quantidadesDeContas
        this.titular = titular;
        this.#saldo = 0;
        this.#tipo = tipo;

        banco.add_Contas(this)
    }
    depositar(valor){
        this.#saldo += valor;
    }
    sacar(valor){
        this.#saldo -= valor;
    }
    get Obter_saldo(){
        return this.#saldo;
    }
}

export class contaCorrente extends contaBancaria{
    constructor(titular){
        super(titular, "corente")

    }
    calcularTaxa(){
        return this.Obter_saldo*0.2
    }
}

export class contaPoupança extends contaBancaria{
    constructor(titular){
        super(titular, "poupança")

    }
    geraJuros(){
        return this.Obter_saldo*1.01
    }

}