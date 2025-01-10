max_people = 0  # 최대 인원
people = 0  # 현재 탑승 인원

for _ in range(4):
    a, b = map(int, input().split())
    people += b - a  # 현재 인원
    max_people = max(max_people, people)  # 최대 인원 갱신

print(max_people)  # 최대 인원 출력
