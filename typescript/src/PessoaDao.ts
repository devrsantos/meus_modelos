import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export default class PessoaDao implements DaoInterface<Pessoa> {
  nomeTabela: string = "Tabela_Concessionária";

  inserir(object: Pessoa): boolean {
    console.log("Cadastrar:", object);
    return true;
  }
  atualizar(object: Pessoa): boolean {
    console.log("Atualizar:", object);
    return true;
  }
  remover(id: number): Pessoa {
    console.log("Deletar");
    return new Pessoa("", "");
  }
  selecionar(id: number): Pessoa {
    console.log("Selecionar");
    return new Pessoa("", "");
  }
  selecionartodos(): [Pessoa] {
    console.log("Logica de Selet_All");
    return [new Pessoa("", "")];
  }
}
