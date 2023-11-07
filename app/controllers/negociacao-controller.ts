import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
        private inputData: HTMLInputElement;
        private inputQuantidade: HTMLInputElement;
        private inputValor: HTMLInputElement;
        private negociacoes = new Negociacoes();

        constructor(){
            this.inputData  = document.querySelector('#data');
            this.inputQuantidade = document.querySelector('#quantidade');
            this.inputValor = document.querySelector('#valor');

        }

        adiciona() : void { //deixando explicito que esse metodo não retorna nada através da palavra void
            const negociacao = this.criaNegociacao();
            negociacao.data.setDate(12);        
           this.negociacoes.adiciona(negociacao);
           console.log(this.negociacoes.lista())
            this.limparForm()
        }

        criaNegociacao(): Negociacao{//deixando explicito que esse método deve retornar neogicacao

            const regex = /-/g;
            const date = new Date(this.inputData.value.replace(regex, ","));
            const quantidade = parseInt(this.inputQuantidade.value);
            const valor = parseFloat(this.inputValor.value);
            
            const negociacao = new Negociacao(date,quantidade, valor)
            
            
             return negociacao;
        }

        limparForm(): void{
            this.inputData.value = "";
            this.inputQuantidade.value = "";
            this.inputValor.value = "";
             this.inputData.focus();
        }

}