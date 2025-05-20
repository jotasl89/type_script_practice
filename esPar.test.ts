import { esPar } from "./esPar";

xdescribe("esPar", () => {
  test("retorna true si el número es par", () => {
    expect(esPar(2)).toBe(true);
  });

  test("retorna false si el número es impar", () => {
    expect(esPar(3)).toBe(false);
  });
});
