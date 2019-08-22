import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export default class MotoDao implements DaoInterface<Moto> {
  nomeTabela: string = "Tabela_Concessionária";

  inserir(object: Moto): boolean {
    console.log("Cadastrar:", object);
    return true;
  }
  atualizar(object: Moto): boolean {
    console.log("Atualizar:", object);
    return true;
  }
  remover(id: number): Moto {
    console.log("Logica de Delete");
    return new Moto("");
  }
  selecionar(id: number): Moto {
    console.log("Logica de Select");
    return new Moto("");
  }
  selecionartodos(): [Moto] {
    console.log("Logica de Selet_All");
    return [new Moto("")];
  }
}
