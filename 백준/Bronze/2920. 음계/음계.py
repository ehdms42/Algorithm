l = list(map(int,input().split()))
a = sorted(l)
d = sorted(l,reverse=True)
if(l == a):
  print('ascending')
elif(l == d):
  print('descending')
else:
  print('mixed')