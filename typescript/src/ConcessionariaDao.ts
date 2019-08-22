import { DaoInterface } from "./DaoInterface";
import Concessionaria from "./Concessionaria";

class ConcessionariaDao implements DaoInterface {
  nomeTabela: string = "Tabela_Concessionária";

  inserir(object: Concessionaria): boolean {
    console.log("Logica de Insert");
    return true;
  }
  atualizar(object: Concessionaria): boolean {
    console.log("Logica de Update");
    return true;
  }
  remover(id: number): Concessionaria {
    console.log("Logica de Delete");
    return new Concessionaria("", [], []);
  }
  selecionar(id: number): Concessionaria {
    console.log("Logica de Select");
    return new Concessionaria("", [], []);
  }
  selecionartodos(): [Concessionaria] {
    console.log("Logica de Selet_All");
    return [new Concessionaria("", [], [])];
  }
}
