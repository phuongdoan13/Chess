import Parser  from './Parser';

describe('Parser', () => {
  test('should check if input is standardized', () => {
    const parser = Parser.getInstance();
    expect(parser.checkIfInputIsStandardized("")).toBe(false);
    expect(parser.checkIfInputIsStandardized("a")).toBe(false);
    expect(parser.checkIfInputIsStandardized("a1")).toBe(true);
    expect(parser.checkIfInputIsStandardized("ab1")).toBe(false);
    expect(parser.checkIfInputIsStandardized("Kb1")).toBe(false);
    expect(parser.checkIfInputIsStandardized("Kbb1")).toBe(true);
    expect(parser.checkIfInputIsStandardized("kbb1")).toBe(false);
  });
});