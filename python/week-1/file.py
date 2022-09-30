num1 = 42  # variable declaration # single line comment, primitive numbers
num2 = 2.3  # variable declaration, primitive numbers
boolean = True  # variable declaration, primitive boolean
string = "Hello World"  # variable declaration, primitive strings
pizza_toppings = [
    "Pepperoni",
    "Sausage",
    "Jalepenos",
    "Cheese",
    "Olives",
]  # List initialization
person = {
    "name": "John",
    "location": "Salt Lake",
    "age": 37,
    "is_balding": False,
}  # Dictionary initialization
fruit = ("blueberry", "strawberry", "banana")  # tuple initialization
print(type(fruit))  # log statement, type check
print(pizza_toppings[1])  # log statement, list access values
pizza_toppings.append("Mushrooms")  # list, add value
print(person["name"])  # log statement, dictionary access value
person["name"] = "George"  # Dictionary, adding a value
person["eye_color"] = "blue"  # Dictionary, adding a value
print(fruit[2])  # log statement, access tuple value

if num1 > 45:  # Conditional, if
    print("It's greater")  # log statement
else:  # Condition, else
    print("It's lower")  # log statement

if len(string) < 5:  # Conditional if, length check
    print("It's a short word!")  # log statement
elif len(string) > 15:  # Conditional else if, length check
    print("It's a long word!")  # log statement
else:  # Conditional else
    print("Just right!")  # log statement

for x in range(5):  # for loop start
    print(x)  # log statement
for x in range(2, 5):  # for loop start, stop
    print(x)  # log statement
for x in range(2, 10, 3):  # for loop start, stop, increment
    print(x)  # log statement
x = 0  # Variable declaration
while x < 5:  # While loop start, stop
    print(x)  # log statement
    x += 1  # While loop increment

pizza_toppings.pop()  # List, delete value
pizza_toppings.pop(1)  # List, delete value

print(person)  # log statement
person.pop("eye_color")  # Dictionary, delete value
print(person)  # log statement

for topping in pizza_toppings:  # for loop start
    if topping == "Pepperoni":  # Conditional, if
        continue  # While loop continue
    print("After 1st if statement")  # log statement
    if topping == "Olives":  # Conditional, if
        break  # While loop break


def print_hello_ten_times():  # funciton
    for num in range(10):  # for loop start, stop
        print("Hello")  # log statement


print_hello_ten_times()  # function call


def print_hello_x_times(x):  # funciton
    for num in range(x):  # for loop start, stop
        print("Hello")  # log statement


print_hello_x_times(4)  # function call, argument


def print_hello_x_or_ten_times(x=10):  # function declaration, parameter
    for num in range(x):  # for loop start, stop
        print("Hello")  # log statement


print_hello_x_or_ten_times()  # function call
print_hello_x_or_ten_times(4)  # function call, argument


""" # comment, multiline
Bonus section
"""

print(num3) # NameError: name <variable name> is not defined
num3 = 72 # Variable declaration
fruit[0] = 'cranberry' # TypeError: 'tuple' object does not support item assignment
print(person['favorite_team']) # KeyError: 'favorite_team'
print(pizza_toppings[7]) # IndexError: list index out of range
  print(boolean) # IndentationError: unexpected indent
fruit.append('raspberry') # AttributeError: 'tuple' object has no attribute 'append'
fruit.pop(1) # AttributeError: 'tuple' object has no attribute 'pop'
