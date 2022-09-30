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

    def enroll_self(self):
        self.is_rewards_member = True
        self.gold_card_points = 200
        return self

    def spend_points(self, amount):
        if not self.is_rewards_member:
            print("You are not a member. No points to spend.")
        else:
            if self.gold_card_points < amount:
                print("Not enough points to complete transaction.")
            else:
                self.gold_card_points -= amount
                print("Transaction complete.")
        return self


person1 = User("David", "Gama", "david@gmail.com", 30)
person2 = User("Aaron", "Zama", "aaron@gmail.com", 21)
person3 = User("Darren", "Mama", "darren@gmail.com", 50)

person1.display_info()
person2.display_info()
person3.display_info()

# user not enrolled, spending points
person1.spend_points(50)

# user enrolled, spending points
person2.enroll_self()
person2.spend_points(80)

# user enrolled, spending more points than what's available
person3.enroll_self()
person3.spend_points(210)
person3.spend_points(40)

person1.display_info()
person2.display_info()
person3.display_info()
