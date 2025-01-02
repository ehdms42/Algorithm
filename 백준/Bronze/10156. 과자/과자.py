# 입력 받기
K, N, M = map(int, input().split())

# 총 필요한 금액 계산
total_cost = K * N

# 부족한 금액 계산
short = total_cost - M

# 부족한 금액이 0보다 작으면 0을 출력, 아니면 부족한 금액 출력
if short > 0:
    print(short)
else:
    print(0)
