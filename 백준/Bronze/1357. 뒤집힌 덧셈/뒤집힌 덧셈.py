a,b = input().split()
res = int(a[::-1]) + int(b[::-1])
res = str(res)[::-1]
print(int(res))