a,b = map(int,input().split())
x = max(a,b)
y = min(a,b)
print(int((x+y)*(x-y+1)/2))