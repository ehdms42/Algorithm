import math
a,b = map(int,open(0))
a = math.ceil(math.sqrt(a))
b = int(math.sqrt(b))
sum = 0
for i in range(a,b+1):
  sum += i**2
if sum>0:
  print(sum)
  print(a**2)
else:
  print(-1)