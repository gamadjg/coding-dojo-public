class User:
    allUsers = {}

    def __init__(self, name, email, accountName, int_rate=0, balance=0):
        self.name = name
        self.email = email
        self.userAccounts = {accountName: BankAccount(int_rate, balance)}
        User.allUsers[name] = self
    
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
        if account == 'all':
            for bank in self.userAccounts:
                print(f"{self.name}, {bank}: {self.userAccounts[bank].display_account_info()}")
        else:
            for bank in self.userAccounts:
                if bank == account:
                    print(f"{self.name}, {bank}: {self.userAccounts[bank].display_account_info()}")
        return self

    def create_new_bank_account(self, accountName, int_rate=0, balance=0):
        self.userAccounts[accountName] = BankAccount(int_rate, balance)

    def getAllAccounts(self):
        print(self.userAccounts.keys())

    def transfer_money(self, account, amount, otherUser, otherAccount):
        if account in self.userAccounts and otherUser in User.allUsers:
            if self.userAccounts[account].withdraw(amount):
                User.allUsers[otherUser].make_deposit(otherAccount, amount)
                print(f"{amount} withdrawn from {self.name}. Deposited into {otherUser}'s {otherAccount} account.")
            else:
                print('Could not complete transfer.')
        return self

    @classmethod
    def getAllUsers(cls):
        print(cls.allUsers)



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
        print(f"Withdrawing {amount}")
        if self.balance < amount:
            print(f"Insufficient funds: Charging a $5 fee.")
            self.balance -= 5
            return False
        else:
            self.balance -= amount
            return True

    def display_account_info(self):
        return self.balance
        # print(f"Balance: {self.balance}")
        
    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance + (self.balance*self.int_rate)
        return self

    @classmethod
    def getAllAccounts(cls):
        for acct in cls.allAccounts:
            print(f"Account: {acct.accountName}, Balance: {acct.balance}")


david = User('David', 'david@gmail.com', 'Wells', .01, 99)
david.create_new_bank_account('BOA', .001, 10000)
david.display_user_balance('all')

aaron = User('Aaron', 'aaron@gmail.com', 'Wells', .01, 90)
aaron.display_user_balance('all')

david.transfer_money('Wells', 5, 'Aaron', 'Wells')

david.display_user_balance('Wells')
aaron.display_user_balance('Wells')

david.transfer_money('Wells', 200, 'Aaron','Wells')

david.display_user_balance('Wells')
aaron.display_user_balance('Wells')