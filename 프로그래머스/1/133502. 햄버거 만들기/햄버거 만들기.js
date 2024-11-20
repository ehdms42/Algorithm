function solution(ingredient) {
    let burger = 0;
    const stack = [];

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        // 스택의 마지막 4개 요소를 확인
        if (stack.length >= 4 && 
            stack[stack.length - 4] === 1 && 
            stack[stack.length - 3] === 2 && 
            stack[stack.length - 2] === 3 && 
            stack[stack.length - 1] === 1) {
            // 버거를 만들 수 있을 경우
            burger += 1;
            // 마지막 4개 요소 제거
            stack.splice(stack.length - 4, 4);
        }
    }

    return burger;
}

