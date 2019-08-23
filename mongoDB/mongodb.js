const { MongoClient } = require('mongodb');
const config = require('./../modules/informacoesPrivadas');

const url = `mongodb://${config.acessoMongoLab.usuario}:${config.acessoMongoLab.senha}@ds155714.mlab.com:55714/controle_financeiro_usuario`;
const dbName = 'controle_financeiro_usuario';
const collectionName = 'usuario';

const mongo = {};
mongo.user = {};

mongo.user.cadastrar = (dados) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    collection.insertOne(dados, (error, success) => {
      if (!error && success) {
        console.log({ Success: 'Documento inserido com sucesso' });
      } else {
        console.log({ Error: 'Falha ao inserido o documento' });
      }
      client.close();
    });
  });
};

mongo.user.atualizar = (parametro, dados) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    collection.updateOne({ email: parametro }, { $set: dados }, (error, success) => {
      if (!error && success) {
        console.log({ Success: 'Documento atualizado com sucesso' });
      } else {
        console.log({ Error: 'Falha ao atualizar o documento' });
      }
      client.close();
    });
  });
};

mongo.user.deletar = () => {};

mongo.user.obter = () => {};

mongo.user.validar = (usuario, senha) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    console.log(usuario);
    collection.find(usuario).toArray((error, success) => {
      if (!error && success) {
        if (success[0] !== undefined) {
          if (success[0].senha === senha) {
            console.log({ Success: 'Usuário Autenticado' });
          } else {
            console.log({ Error: 'Falha ao autenticar o usuário' });
          }
        } else {
          console.log({ Error: 'Usuário não cadastrado' });
        }
      }
      if (error && !success) {
        console.log({ Error: 'Não foi possivel conectar ao Banco de Dados' });
      }
      client.close();
    });
  });
};

module.exports = mongo;
