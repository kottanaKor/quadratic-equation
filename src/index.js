module.exports = function solveEquation(equation) {
  // your implementation
  equation = equation.replace(/\s/g, "");
  let a = equation.split('*x^2')[0];
  let b = equation.split('*x^2')[1];
  let c = equation.split('*x^2')[1].split('*x')[1];
  const a1 = parseInt(a);
  const b1 = parseInt(b);
  const c1 = parseInt(c);

  let dis = (b1 * b1) - 4 * a1 * c1;

  f1 = Math.sqrt(dis);
  f2 = 2 * a1;
  x1 = Math.round((-b1 - f1) / f2);
  x2 = Math.round((-b1 + f1) / f2);

  let coefficients = [];
  coefficients.push(x1);
  coefficients.push(x2);
  coefficients.sort((a, b) => a - b);

  return coefficients;
}
