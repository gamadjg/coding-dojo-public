class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        valuesList = [
            self.first_name,
            self.last_name,
            self.email,
            self.age,
            self.is_rewards_member,
            self.gold_card_points,
        ]
        for value in valuesList:
            print(value)
        print("")
        return self

    def enroll_self(self):
        if not self.is_rewards_member:
            self.is_rewards_member = True
            self.gold_card_points = 200
            print("User has been enrolled.\n")
        else:
            print("You are already a user.\n")
        return self

    def spend_points(self, amount):
        if not self.is_rewards_member:
            print("You are not a member. No points to spend.\n")
        else:
            if self.gold_card_points < amount:
                print("Not enough points to complete transaction.\n")
            else:
                self.gold_card_points -= amount
                print("Transaction complete.\n")
        return self


person1 = User("David", "Gama", "david@gmail.com", 30)
person2 = User("Aaron", "Zama", "aaron@gmail.com", 21)
person3 = User("Darren", "Mama", "darren@gmail.com", 50)


# person 1 not enrolled, spending points
person1.display_info().spend_points(50).display_info()

# person 2 enrolled, spending points
person2.display_info().enroll_self().spend_points(80).display_info()

# person 3 enrolled, spending more points than what's available
person3.display_info().enroll_self().spend_points(210).spend_points(40).display_info()
