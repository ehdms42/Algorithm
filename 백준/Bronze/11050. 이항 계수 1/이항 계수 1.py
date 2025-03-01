a,b = map(int,input().split())
s1 = s2 = 1
for i in range(1,a+1):
  s1 *= i
for j in range(1,b+1):
  s2 *= j
for k in range(1,a-b+1):
  s2 *= k
print(int(s1/s2))