export function secuencefizzBuzz(n: number): string {
    let valies: string[] = [];
    for(let i = 1; i <= n; i++) {
        valies.push(fizzBuzz(i));
    }

    return valies.join(", ");
}

export function fizzBuzz(n: number): string {
    if (n % 3 === 0 && n % 5 === 0)
            return "FizzBuzz";
        else if (n % 3 === 0)
            return "Fizz";
        else if (n % 5 === 0)
            return "Buzz";
        else    
            return n.toString();
}