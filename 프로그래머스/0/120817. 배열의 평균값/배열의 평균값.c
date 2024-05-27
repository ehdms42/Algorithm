#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

double solution(int numbers[], size_t numbers_len) {
    double answer = 0;    
    int sum = 0;
    for(int i = 0; i < numbers_len; i++){
        sum += numbers[i];
    }
    answer = (double) sum / numbers_len;
    return answer;
}