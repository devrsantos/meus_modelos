import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export default class CarroDao implements DaoInterface<Carro> {
  nomeTabela: string = "Tabela_Concessionária";

  inserir(object: Carro): boolean {
    console.log("Cadastrar:", object);
    return true;
  }
  atualizar(object: Carro): boolean {
    console.log("Atualizar:", object);
    return true;
  }
  remover(id: number): Carro {
    console.log("Logica de Delete");
    return new Carro("", 0);
  }
  selecionar(id: number): Carro {
    console.log("Logica de Select");
    return new Carro("", 0);
  }
  selecionartodos(): [Carro] {
    console.log("Logica de Selet_All");
    return [new Carro("", 0)];
  }
}
