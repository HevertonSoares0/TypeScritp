export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = []; esse código é a mesma coisa do declarado abaixo, porém esse se trata de uma forma antiga de se fazer
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
        //return [...this.negociacoes] // Spread operator colocar cada item da lista dentro do array
    }
}
