
# ---------- PART 1: Update Values in Dictionaries and Lists ----------

x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# 1: Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15
print(x)

# 2: Change the last_name of the first student from 'Jordan' to 'Bryant'
for student in students:
    if student['first_name'] == 'Michael':
        student['last_name'] = 'Bryant'
print(students)

# 3: In the sports_directory, change 'Messi' to 'Andres'
location = sports_directory['soccer'].index('Messi')
sports_directory['soccer'][location] = 'Andres'
print(sports_directory)

# 4: Change the value 20 in z to 30 
z[0]['y'] = 30
print(z)

print("==============================================")
# ---------- PART 2: Iterate Through a List of Dictionaries ----------
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'},
    {'first_name' : 'Mark', 'last_name' : 'Guillen'},
    {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDictionary(some_list):
    for item in some_list:
        dictStr = ''
        for key in item:
            dictStr  += key + " - " + item[key]
            if(key != list(item.keys())[-1]):
                dictStr += ", "
        print(dictStr)

iterateDictionary(students)

print("==============================================")
# ---------- PART 3: Get Values From a List of Dictionaries ----------
def iterateDictionary2(key_name, some_list):
    for listItem in some_list:
        if key_name in listItem:
            print(listItem[key_name])

iterateDictionary2('last_name', students)

print("==============================================")
# ---------- PART 4: Iterate Through a Dictionary with List Values ----------
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    for entry in list(some_dict):
        print(str(len(some_dict[entry])) + " " + entry.upper())
        for item in some_dict[entry]:
            print(item)
        print('')

printInfo(dojo)