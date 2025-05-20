export function esPrimo(numberToTest: number): boolean {
    if (numberToTest < 2) {
        return true;
    }

    let count = 0;
    for (let i = 1; i <= numberToTest; i++) {
        let modal = numberToTest % i;
        if (modal == 0) {
            count++;
        }
    }
    
    console.log('✌️count --->', count);
    return count == 2;
}