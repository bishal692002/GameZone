# Read the array elements in one line (no need to input n)
arr = list(map(int, input("Hi").split()))

a = []
b = []
c = []

for num in arr:
    if num == 0:
        a.append(num)
    elif num == 1:
        b.append(num)
    elif num == 2:
        c.append(num)

arr = a + b + c

print(" ".join(map(str, arr)))
