export class Negociacao{
    

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ){}

    //esse GETs(chamados getters) são para retornar o valor dos atributos da classe, visto que estão privados, indicado pelo #
    

    get volume():number{
        return this.quantidade * this.valor;
    }
    get data(): Date{
       const data = new Date(this._data.getTime());
        return data;
    }
}