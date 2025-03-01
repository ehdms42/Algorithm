l = [int(input()) for _ in range(9)]
l.sort()
s = sum(l)
bpoint = False

for i in l:
  for j in l:
    if i!=j:
      k = s-i-j
      if k == 100:
        l.remove(i)
        l.remove(j)
        bpoint = True
        break
  if bpoint:
    break
for i in l:
  print(i)