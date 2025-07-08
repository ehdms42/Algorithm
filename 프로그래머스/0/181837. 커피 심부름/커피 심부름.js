function solution(order) {
    let answer = 0;
    
    for (let item of order) {
        if (item === "iceamericano" || item === "americanoice") {
            answer += 4500;
        }
        else if (item === "hotamericano" || item === "americanohot") {
            answer += 4500;
        }
        else if (item === "icecafelatte" || item === "cafelatteice") {
            answer += 5000;
        }
        else if (item === "hotcafelatte" || item === "cafelattehot") {
            answer += 5000;
        }
        else if (item === "americano") {
            answer += 4500;
        }
        else if (item === "cafelatte") {
            answer += 5000;
        }
        else if (item === "anything") {
            answer += 4500;
        }
    }
    
    return answer;
}