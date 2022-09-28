import json


class User:
    def __init__(self, name, email, accountName, int_rate=0, balance=0):
        self.name = name
        self.email = email
        self.userAccounts = {accountName: BankAccount(int_rate, balance)}
    
    def make_deposit(self, account, amount):
        if account in self.userAccounts.keys():
            self.userAccounts[account].deposit(amount)
        else:
            print(f"{account} does not exist.")
        return self

    def make_withdrawl(self, account, amount):
        if account in self.userAccounts.keys():
            self.userAccounts[account].withdraw(amount)
        else:
            print(f"{account} does not exist.")
        return self

    def display_user_balance(self, account):
        self.userAccounts[account].display_account_info()
        return self

    def create_new_bank_account(self, accountName, int_rate=0, balance=0):
        self.userAccounts[accountName] = BankAccount(int_rate, balance)

    def getAllAccounts(self):
        print(self.userAccounts.keys())

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
        for acct in cls.allAccounts:
            print(f"Account: {acct.accountName}, Balance: {acct.balance}")

usr1 = User('David', 'david@gmail.com', 'Wells')
usr1.create_new_bank_account('BOA')

usr1.display_user_balance('Wells')
usr1.make_deposit('Wells', 99)
usr1.make_deposit('BOA', 99)
usr1.make_withdrawl('Wells', 30)
usr1.display_user_balance('Wells')
usr1.display_user_balance('BOA')