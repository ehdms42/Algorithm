sum = int(input())
cnt = int(input())

total = 0

for i in range(cnt):
    data = input().split()
    a = int(data[0])
    b = int(data[1])
    total += a * b

if total == sum:
    print("Yes")
else:
    print("No")
