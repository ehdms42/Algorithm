from collections import Counter

T = int(input())
for _ in range(T):
    text = input().replace(' ', '')
    count = Counter(text)
    max_freq = max(count.values())
    most_frequent = [char for char, freq in count.items() if freq == max_freq]

    print(most_frequent[0] if len(most_frequent) == 1 else '?')
