class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
}

const user = new Pessoa("Caiox", 18, 1.8);
const user2 = new Pessoa("Enzo", 20, 1.2)

console.log(user, user2)
