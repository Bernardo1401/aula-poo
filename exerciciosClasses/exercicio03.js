class Pizza {
    constructor(base, molho, cobertura, queijo){
        this.base = base
        this.molho = molho
        this.cobertura = cobertura
        this.queijo = queijo
    }
    preparar(){
        console.log(`Para preparação da pizza você deve primeiramente aquecer a ${this.base} logo após colocar o molho de ${this.molho} depois rechear com queijo ${this.queijo} e por fim terminar com o recheio de ${this.cobertura}`)
    }
}

const pizza1 = new Pizza("massa fina", "tomate", "calabresa", "prato")

pizza1.preparar()