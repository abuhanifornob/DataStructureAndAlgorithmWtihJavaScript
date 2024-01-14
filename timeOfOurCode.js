function sumOfAllUseForLoop(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
}

function sumOfAllUseMathFormula(n) {
  const total = (n * (n + 1)) / 2;
  return total;
}
const time1 = performance.now(); // node a karone performance a kaj kore na .

console.log(sumOfAllUseForLoop(1000));
const time2 = performance.now();

console.log(`Performance time is: ${(time2 - time1) / 1000}`); // milisecond thake second a conver korte hoy

console.log(`Sume all Number use Math Formula:${sumOfAllUseMathFormula(10)}`);
