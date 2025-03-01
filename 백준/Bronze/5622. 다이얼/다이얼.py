s = input()
sum = 0
for i in s:
  i = ord(i) - 65
  if i == 18:
    sum += 8
  elif 18 < i < 22:
    sum += 9
  elif i >= 22:
    sum += 10
  else:
    sum += i//3 + 3
print(sum)