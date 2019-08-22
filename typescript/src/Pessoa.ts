import Carro from "./Carro";
import Moto from "./Moto";

export default class Pessoa {
  private nome: string;
  private carroPreferido: string;
  private carro: Carro;
  private moto: Moto;

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
  }

  public dizerName(): string {
    return this.nome;
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido;
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro;
  }

  public dizerCarroQueTem(): Carro {
    return this.carro;
  }

  public dizerMotoPreferido(): string {
    return this.carroPreferido;
  }

  public comprarMoto(moto: Moto): void {
    this.moto = moto;
  }

  public dizerMotoQueTem(): Moto {
    return this.moto;
  }
}
