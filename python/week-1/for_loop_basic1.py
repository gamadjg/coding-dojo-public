# 1 Basic
for i in range(0, 151):
    print(i)

# 2 Multiples of five
for i in range(5, 1005, 5):
    print(i)

# 3 Counting, the dojo way
for i in range(1, 101):
    if i % 10 == 0: 
        print('Coding Dojo')
    elif i % 5 == 0:
        print('Coding')
    else:
        print(i)

# 4 Whoa. That suckers huge
sm = 0
for i in range(0, 500001):
    sm += i
print(sm)

# 5 Countdown by fours
for i in range(2018, 0, -4):
    print(i)

# 6 Flexible counter
lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum, highNum+1):
    if i % mult == 0:
        print(i)
