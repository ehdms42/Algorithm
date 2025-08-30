function solution(my_string) {
    let suffixes = [];
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.slice(i));
    }
    return suffixes.sort();
}