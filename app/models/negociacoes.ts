import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //private negociacoes: Array<Negociacao> = []; esse código é a mesma coisa do declarado abaixo, porém esse se trata de uma forma antiga de se fazer
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista() : ReadonlyArray<Negociacao>{ //Evita alterar o array (ReadonlyArray)
        return this.negociacoes
        //return [...this.negociacoes] // Spread operator colocar cada item da lista dentro do array
    }
}
