s = input().upper()
list_s = list(set(s))
res = []
for i in list_s:
  res.append(s.count(i))
if res.count(max(res)) >1:
  print('?')
else:
  print(list_s[(res.index(max(res)))])