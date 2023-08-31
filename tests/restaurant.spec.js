const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` possui a chave fetchMenu', () => {
    expect(createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })).toHaveProperty(fetchMenu);
  });
  it('Verifica se a chave `fetchMenu`da função `createMenu` retorna uma função', () => {
    expect(typeof createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })).fetchMenu().toBe('function');
  });
  it('Verifica se a chave `fetchMenu`da função `createMenu` retorna uma função', () => {
    expect(createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })).fetchMenu().toHaveProperty('food');
    expect(createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })).fetchMenu().toHaveProperty('drinks');
  });
  it('Verifica se a função `createMenu` possui a chave fetchMenu', () => {
    expect(createMenu({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90},
    })).fetchMenu.toEqual({
      food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90}
    });
  });
});
