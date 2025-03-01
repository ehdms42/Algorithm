n = int(input())
for _ in range(n):
  a,b = input().split()
  for j in b:
    print(j*int(a),end='')
  print()
