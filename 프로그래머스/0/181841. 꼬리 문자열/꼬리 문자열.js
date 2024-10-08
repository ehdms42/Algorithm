function solution(str_list, ex) {
    return str_list.filter((v) => v.indexOf(ex) == -1).join("");
}