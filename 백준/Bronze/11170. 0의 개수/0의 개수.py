n = int(input())
for _ in range(n):
  a,b = map(int,input().split())
  sum = 0
  for i in range(a,b+1):
    sum += str(i).count('0')
  print(sum)