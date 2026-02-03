function solution(progresses, speeds) {
    const days = progresses.map((progress, i) => 
        Math.ceil((100 - progress) / speeds[i])
    );

    const answer = [];
    let currentDay = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentDay) {
            count++;
        } else {
            answer.push(count);
            currentDay = days[i];
            count = 1;
        }
    }
    answer.push(count);

    return answer;
}