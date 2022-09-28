import random as rand

class Character:
  def __init__( self , name, strength, speed ):
        self.name = name
        self.strength = strength
        self.speed = speed
        self.health = 100

  def show_stats( self ):
        print(f"\nName: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

  def attack( self , enemy ):
        hit = self.calculate_random() > 50
        if hit:
          enemy.health -= self.strength
          print("The attack landed!")
        else:
          print("The attack was dodged!")
          
        return self

  def calculate_random(self):
      return rand.randrange(0, 100)    