function solution(a, d, included) {
  let sum = 0;

  included.forEach((isIncluded, i) => {
    if (isIncluded) {
      sum += a + d * i;
    }
  });

  return sum;
}