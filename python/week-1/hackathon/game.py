from classes.ninja import Ninja
from classes.pirate import Pirate

class Game:
  def __init__(self, player1, player2):
    self.player1 = player1
    self.player2 = player2
  
  def display_stats(self):
    self.player1.show_stats()
    self.player2.show_stats()

  def display_winner(self):
    if self.player1.health <= 0:
      print(f"\nCongratulations {self.player2.name}, you won!")
    else:
      print(f"\nCongratulations {self.player1.name}, you won!")

  def get_first_attacker(self):
    player1_speed = self.player1.calculate_random() + self.player1.speed
    player2_speed = self.player2.calculate_random() + self.player2.speed

    if player1_speed > player2_speed:
      return self.player1
    else:
      return self.player2

  def play_game(self):
    while(self.player1.health > 0 and jack_sparrow.health > 0):
      firstAttacker = self.get_first_attacker()

      if firstAttacker == self.player1:
        self.player1.attack(self.player2)
        if self.player2.health <= 0:
          break
        self.player2.attack(self.player1)
      else:
        self.player2.attack(self.player1)
        if self.player1.health <= 0:
          break
        self.player1.attack(self.player2)
    

michelangelo = Ninja(name="Micheal Angelo", strength=10, speed=10)
jack_sparrow = Pirate(name="Jack Sparrow", strength=11, speed=3)

game = Game(michelangelo, jack_sparrow)
game.play_game()
game.display_winner()
game.display_stats()