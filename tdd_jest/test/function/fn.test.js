const mockCallback = jest.fn(x => 42 + x);
const login = jest.fn((nome, sobrenome) => `${nome} ${sobrenome}`);

mockCallback(0);

login('Renan', 'Santos');

test("Testar número de chamada", () => {   
    expect(mockCallback.mock.calls.length).toBe(1);
});

test("Verifica se o Parametro da Função é igual", () => {
    // expect(mockCallback.mock.calls[value][position]).toBe(0);
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 1º Parametro
    expect(login.mock.calls[0][0]).toBe('Renan');

    // 2º Parametro
    expect(login.mock.calls[0][1]).toBe('Santos');
});

test("Se a Função foi Chamada", () => {
    expect(login).toBeCalled();

    // Chamada com os Parametros
    expect(login).toBeCalledWith('Renan', 'Santos');

    // Chamada retorna esse resultado
    expect(login).toHaveReturnedWith('Renan Santos');
});
