# 1: Countdown
def countdown(num):
    countList = []
    for count in range(num, -1, -1):
        countList.append(count)
    print(countList)
countdown(5)

# 2: 
def printAndReturn(arr):
    print(arr[0])
    return arr[1]
printAndReturn([1, 2])

# 3: 
def firstPlusLength(arr):
    print(arr[0]+ len(arr))
firstPlusLength([1, 2, 3, 4, 5])

# 4: 
def valuesGreaterThanSecond(arr):
    returnList = []
    if len(arr) <= 1:
        return False
    else:
        for value in arr:
            if value > arr[1]:
                returnList.append(value)
        return returnList
print(valuesGreaterThanSecond([5, 2, 3, 1, 4]))
print(valuesGreaterThanSecond([3]))

# 5
def thisLengthThatValue(size, value):
    newList = []
    for i in range(0, size, 1):
        newList.append(value)
    return newList
print(thisLengthThatValue(3, 5))
