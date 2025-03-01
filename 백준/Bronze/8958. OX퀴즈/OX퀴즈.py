a = int(input())
for _ in range(a):
  s = input().split('X')
  sum = 0
  for i in s:
    n = len(i)
    if(n>0):
      sum += int(n*(n+1)/2)
  print(sum)