function solution(numbers) {
    var answer = numbers; // 초기값을 numbers로 설정
    const engNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (let i = 0; i < engNum.length; i++) { // i < engNum.length로 수정
        answer = answer.replaceAll(engNum[i], i); // answer에 결과를 저장
    }
    
    return +answer; // answer를 숫자로 변환하여 반환
}