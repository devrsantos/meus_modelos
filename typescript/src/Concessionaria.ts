import Carro from "./Carro";
import Moto from "./Moto";

export default class Concessionaria {
  private endereco: string;
  private listaDeCarros: Carro[];
  private listaDeMotos: Moto[];
  constructor(
    endereco: string,
    listaDeCarros: Array<Carro>,
    listaDeMotos: Array<Moto>
  ) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
    this.listaDeMotos = listaDeMotos;
  }

  public fornecerEndereco(): string {
    return this.endereco;
  }
  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros;
  }
  public mostrarListaDeMotos(): Array<Moto> {
    return this.listaDeMotos;
  }
}
