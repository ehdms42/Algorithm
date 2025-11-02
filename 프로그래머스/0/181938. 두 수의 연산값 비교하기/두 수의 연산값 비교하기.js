function solution(a, b) {
  const ab = Number(`${a}${b}`);
  const result = 2 * a * b;

  return ab >= result ? ab : result;
}