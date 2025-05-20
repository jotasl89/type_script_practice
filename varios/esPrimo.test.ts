import { esPrimo } from "./esPrimo";

describe('esPrimo', () => {
    it('deberia indicar si el numero es primo', () => {
        const isPrime = esPrimo(1);

        expect(isPrime).toBeTruthy();
    });

    it('deberia indicar si el numero no es primo', () => {
        const isPrime = esPrimo(4);

        expect(isPrime).toBeFalsy();
    });

    it('deberia indicar si el numero no es primo', () => {
        const isPrime = esPrimo(8);

        expect(isPrime).toBeFalsy();
    });

    it('deberia indicar si el numero si es primo', () => {
        const isPrime = esPrimo(29);

        expect(isPrime).toBeTruthy();
    });
})