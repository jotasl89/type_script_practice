export function calculateYears (poblacionInicial:number, percent:number, nuevosPobladores:number, objetivo:number): number {
  
    let years = 0;
    let poblacionFinal = poblacionInicial;
    let porcentajeIncremento = percent/100;
    while(poblacionFinal < objetivo) {
        poblacionFinal = poblacionFinal + (poblacionFinal * porcentajeIncremento) + nuevosPobladores;
        years ++;
    }
    
  return years;
}