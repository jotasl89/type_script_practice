import { secuencefizzBuzz, fizzBuzz } from './fizzBuzz';

xdescribe('fizzBuzz', () => {
    it('debería retornar "Fizz" para múltiplos de 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('debería retornar "Buzz" para múltiplos de 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('debería retornar "FizzBuzz" para múltiplos de 3 y 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });


    it('debería retornar la secuencia de FizzBuzz', () => {
        expect(secuencefizzBuzz(15)).toBe('1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz');
    });
})