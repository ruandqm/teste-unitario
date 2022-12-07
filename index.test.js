const functions = require('./index.js')

test('testar rendimento do combustivel', () => {
    expect(functions.combustivelPorKm(20000, 'etanol')).toBe(1.82);
});