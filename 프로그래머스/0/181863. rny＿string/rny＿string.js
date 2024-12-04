function solution(rny_string) {
    var answer = '';
    for(let i = 0; i<=rny_string.length; i++){
    answer = rny_string.replaceAll('m', 'rn')
    }
    return answer;
}