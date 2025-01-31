function solution(date1, date2) {
    // 연도를 비교
    if (date1[0] < date2[0]) return 1;
    if (date1[0] > date2[0]) return 0;

    // 월을 비교
    if (date1[1] < date2[1]) return 1;
    if (date1[1] > date2[1]) return 0;

    // 일을 비교
    if (date1[2] < date2[2]) return 1;
    if (date1[2] > date2[2]) return 0;

    // 날짜가 같은 경우
    return 0;
}
