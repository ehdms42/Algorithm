function solution(my_string) {
    return my_string.split('').filter(i => i !== 'a' && i !== 'e' && i !== 'i' && i !== 'o' && i !== 'u').join('');
}
