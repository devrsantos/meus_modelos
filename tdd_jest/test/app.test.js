const usuario = require("./../app");

test("Usuario é um Object", () => {
	expect.objectContaining(usuario);
});

test("Usuario tem propriedade nome e senha", () => {
	expect(usuario).toHaveProperty("nome");
	expect(usuario).toHaveProperty("senha");
});

test("usurio.['nome'] e usuario['senha'] é uma String", () => {
	expect.stringContaining(usuario["nome"]);
	expect.stringContaining(usuario["senha"]);
});

const mockCallback = jest.fn(x => 42 + x);
const login = jest.fn((nome, sobrenome) => `${nome} ${sobrenome}`);

mockCallback(0);
mockCallback(1);
mockCallback(2);
mockCallback(3);

login('Renan', 'Santos');

test("Testando Funções", () => {
	expect(mockCallback.mock.calls.length).toBe(4);
	// expect(mockCallback.mock.calls[value][position]).toBe(0);
	expect(mockCallback.mock.calls[0][0]).toBe(0);
	expect(mockCallback.mock.calls[1][0]).toBe(1);
	expect(mockCallback.mock.calls[2][0]).toBe(2);
	expect(mockCallback.mock.calls[3][0]).toBe(3);

	expect(login.mock.calls[0][0]).toBe('Renan');
	expect(login.mock.calls[0][1]).toBe('Santos');

	expect(login).toBeCalled();
	expect(login).toBeCalledWith('Renan', 'Santos');
	expect(login).toHaveReturnedWith('Renan Santos');
});