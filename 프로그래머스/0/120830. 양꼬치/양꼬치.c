#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n, int k) {
    int answer = 0;
    int ser=0;
    
    ser= n/10;
    
    answer = n*12000 + k*2000 -ser*2000;
    
    return answer;
}