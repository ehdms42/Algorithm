a,b = input().split()
sum = res = 0
for i in a:
  sum += int(i)
for i in b:
  res += sum * int(i)
print(res)