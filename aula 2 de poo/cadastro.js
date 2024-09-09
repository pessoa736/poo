// 2 Atividade do curso Tecnico em Informatica do GRAU TECNICO
// 1° questão proposta: "cria uma classe usuario, com os atributos: cpf; nome; password. "

class user{
    // criando os atibutos privados/protegidos   
    // create private/protect atributes 

    #cpf; 
    /* 
    The CPF number (Cadastro de Pessoas Físicas; Portuguese for "Natural Persons Register") 
    is the Brazilian individual taxpayer registry, since its creation in 1965.
    */

    #name;
    #password;
    
    constructor(name = "", cpf = 0, email = "", telephone = 0, password = ""){
        this.#name = name;
        this.#cpf = cpf;
        this.#password = password;
        this.email = email;
        this.telephone = telephone;
    }
}

//tabela de usuarios
//user table
users = []

function show_users(){
    for (index in users){
        // se eu colocase ".#name" ele iria dar erro, pois esses atributos com "#" estao protegidos
        console.log("user " + index)
        console.log("   name: " + users[index].name)
        console.log("   cpf: " + users[index].cpf)
        console.log("   email: " + users[index].email)
        console.log("   telephone: " + users[index].telephone)
        console.log("   password: " + users[index].password)
    }
}

// criando usuario
// create user
users.push(new user("Davi dos Santos Passos", 12345678901, "email@email.com", 84912345678, "senha1234"))
users.push(new user("roblox", 12345678901, "email1@email.com", 84987654321, "senha1234"))

show_users()
