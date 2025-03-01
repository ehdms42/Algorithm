n = int(input())
score = list(map(int,input().split()))
max = max(score)
sum = 0
for i in score:
  sum += i/max*100
print(sum/n)