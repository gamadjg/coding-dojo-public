# X - Students will follow specifications for creating a class.
# X - Students will implement default arguments in parameters for attributes that can be assigned on instantiation.
# X - Students will use basic programmatic logic to implement the functionality of a bank account
# X - Students will handle edge-cases, such as insufficient funds, with the appropriate control structure (if-else, code flow, or early exit)
# X - Students will demonstrate proficiency in creating and update attributes of an object instance, from within the class using self .
# X - Students will thoroughly test the functionality of their class by creating instances and calling methods with different test data and scenarios.

class BankAccount:
    allAccounts = []

    def __init__(self, int_rate=0, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.allAccounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        # print(f"Withdraw request: ${amount}")
        if self.balance < amount:
            print(f"Insufficient funds: Charging a $5 fee.")
            self.balance -= 5
        else:
            self.balance -= amount
        return self
    def display_account_info(self):
        print(f"Balance: {self.balance}")
        
    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance + (self.balance*self.int_rate)
        return self

    @classmethod
    def getAllAccounts(cls):
        for acct in BankAccount.allAccounts:
            print(acct.balance)
        # print(cls.allAccountBalances)

ba1 = BankAccount(.01, 100)
ba2 = BankAccount(.01, 70)

ba1.deposit(2).deposit(2).deposit(2).withdraw(5).yield_interest().display_account_info()

ba1.display_account_info()
ba2.display_account_info()

ba1.yield_interest().display_account_info()
ba2.yield_interest().display_account_info()

BankAccount.getAllAccounts()
