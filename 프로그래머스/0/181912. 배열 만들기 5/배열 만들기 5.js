function solution(intStrs, k, s, l) {
	return intStrs.map((int) => +int.slice(s, s + l)).filter(n => n > k);
}
