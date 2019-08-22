import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import PessoaDao from "./PessoaDao";
import MotoDao from "./MotoDao";
import CarroDao from "./CarroDao";
import Moto from "./Moto";

const daoPessoa: PessoaDao = new PessoaDao();
const daoMoto: MotoDao = new MotoDao();
const daoCarro: CarroDao = new CarroDao();

const newCarro_01 = new Carro("Fusca", 2);
const newCarro_02 = new Carro("Kombi", 3);
const newCarro_03 = new Carro("Gol", 4);
const newMoto_01 = new Moto("Suzuki");
const newMoto_02 = new Moto("Kawasaki");
const newMoto_03 = new Moto("Honda");

const listaDeCarros: Carro[] = [newCarro_01, newCarro_02, newCarro_03];
const listaDeMotos: Moto[] = [newMoto_01, newMoto_02, newMoto_03];

const newConcessionaria = new Concessionaria(
  "Avenida Paulista",
  listaDeCarros,
  listaDeMotos
);
const newPessoa_01 = new Pessoa("Cliente_01", "Kombi");
daoPessoa.inserir(newPessoa_01);

const newPessoa_02 = new Pessoa("Cliente_02", "Kawasaki");
daoPessoa.inserir(newPessoa_02);

newConcessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (carro["modelo"] === newPessoa_01.dizerCarroPreferido()) {
    newPessoa_01.comprarCarro(carro);
    daoCarro.inserir(carro);
    carro.acelerar();
  }
});

newConcessionaria.mostrarListaDeMotos().map((moto: Moto) => {
  if (moto["modelo"] === newPessoa_02.dizerMotoPreferido()) {
    newPessoa_02.comprarMoto(moto);
    daoMoto.atualizar(moto);
    moto.acelerar();
  }
});

console.log(newPessoa_01.dizerCarroQueTem());
console.log(newPessoa_02.dizerMotoQueTem());
