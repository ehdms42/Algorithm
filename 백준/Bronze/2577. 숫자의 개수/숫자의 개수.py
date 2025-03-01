a,b,c = map(int,open(0))
cnt = [0,0,0,0,0,0,0,0,0,0]
res = str(a*b*c)
for i in res:
  cnt[int(i)] += 1
for i in cnt:
  print(i)