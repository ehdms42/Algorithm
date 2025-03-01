import itertools
a,b = map(int,input().split())
l = sorted(map(int,input().split()))
r=[]
for i in itertools.combinations(l,3):
  r.append(sum(i))
new = max([x for x in r if x<=b])
print(new)