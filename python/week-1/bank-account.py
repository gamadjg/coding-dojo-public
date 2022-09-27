# Students will follow specifications for creating a class.
# Students will implement default arguments in parameters for attributes that can be assigned on instantiation.
# Students will use basic programmatic logic to implement the functionality of a bank account
# Students will handle edge-cases, such as insufficient funds, with the appropriate control structure (if-else, code flow, or early exit)
# Students will demonstrate proficiency in creating and update attributes of an object instance, from within the class using self .
# Students will thoroughly test the functionality of their class by creating instances and calling methods with different test data and scenarios.


# from hashlib import new


class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        # your code here
    # def withdraw(self, amount):
    #     # your code here
    # def display_account_info(self):
    #     # your code here
    # def yield_interest(self):
    #     # your code here

test = BankAccount(.5, 5)
print(test.int_rate)