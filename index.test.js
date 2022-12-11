const functions = require('./index.js')

test('testar rendimento do combustivel', () => {
    expect(functions.combustivelPorKm(20000, 'etanol')).toBe(1.82);
});

test('testar numero de paradas', () => {
    expect(functions.numParadas(["adulto", "crianca", "crianca"], 4.0)).toBe(6);
});
test('testar gasto com as refeicoes', () => {
    expect(functions.refeicoes(4, ["adulto", "crianca", "crianca"])).toBe(340);
});