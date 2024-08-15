class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura}m de altura`);
    }
}

const user = new Pessoa("Caiox", 18, 1.8);
const user2 = new Pessoa("Enzo", 20, 1.2)

user.seApresentar()
user2.seApresentar()