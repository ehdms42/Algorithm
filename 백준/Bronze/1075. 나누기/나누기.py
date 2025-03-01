# a,b = map(int,open(0))
a = int(input())
b = int(input())
r = a%100
for i in range(a-r,a+b):
  if i % b == 0:
    print(str(i)[-2:])
    break