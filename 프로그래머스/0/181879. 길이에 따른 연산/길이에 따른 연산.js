function solution(num_list) {
    if (num_list.length >= 11) {
        return num_list.reduce((sum, element) => sum + element);
    } else {
        return num_list.reduce((product, element) => product * element);
    }
}

