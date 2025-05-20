import { calculateYears } from "./population";

describe('pupulation',() => {
    it('deberia tardar 15 anios', () => {

        let result = calculateYears(1500, 5, 100, 5000);
        expect(result).toBe(15);
    });

    it('deberia tardar 10 anios', () => {

        let result = calculateYears(1500000, 2.5, 10000, 2000000);
        expect(result).toBe(10);
    });

    it('deberia tardar 1 anio', () => {

        let result = calculateYears(1500000, 2.5, 10000, 1505000);
        expect(result).toBe(1);
    });

})