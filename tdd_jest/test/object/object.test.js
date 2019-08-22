const usuario = require("./../../app");

test("Usuario é um Object", () => {
    expect.objectContaining(usuario);
});

test("Usuario tem propriedade nome e senha", () => {
    expect(usuario).toHaveProperty("nome");
    expect(usuario).toHaveProperty("senha");
});

test("usuario['nome'] e usuario['senha'] é uma String", () => {
    expect.stringContaining(usuario["nome"]);
    expect.stringContaining(usuario["senha"]);
});
