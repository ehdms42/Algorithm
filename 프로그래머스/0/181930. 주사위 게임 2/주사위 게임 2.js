function solution(a, b, c) {
  const sum = a + b + c;
  const sum2 = a ** 2 + b ** 2 + c ** 2;
  const sum3 = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) return sum * sum2 * sum3;
  if (a === b || a === c || b === c) return sum * sum2;
  return sum;
}