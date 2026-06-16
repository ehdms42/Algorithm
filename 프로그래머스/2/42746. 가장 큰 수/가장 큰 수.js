function solution(numbers) {
    let a = numbers.map(String);

    a.sort((x, y) => (y + x) - (x + y));

    let r = a.join('');

    return r[0] === '0' ? '0' : r;
}