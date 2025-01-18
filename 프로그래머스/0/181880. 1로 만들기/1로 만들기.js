function solution(num_list) {
    let totalOperations = 0;

    num_list.forEach(num => {
        while (num > 1) {
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num = (num - 1) / 2;
            }
            totalOperations++;
        }
    });

    return totalOperations;
}
