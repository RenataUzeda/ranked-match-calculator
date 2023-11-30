# Ranked Match Calculator

## Description

This simple JavaScript function calculates the rank of a hero based on the number of wins and losses in ranked games. It was developed to meet the project challenge "Calculadora de Partidas Rankeadas" of the Bootcamp 'Programando do Zero' taught by DIO in partnership with Potência Tech By iFood.

## Usage

1. **Clone the repository:**
   - `git clone https://github.com/RenataUzeda/writing-the-classes-of-a-game`

2. **Navigate to the project directory:**
   - `cd your-repository` 

3. **Open the `index.js` file and customize the values of `wins` and `losses` in the `calculateRank` function.**

4. **Run the script:**
   - `node src/index.js`

## Function Explanation

The `calculateRank` function takes the number of wins and losses as parameters and calculates the hero's rank based on predefined conditions. It then prints a message indicating the hero's balance and level.

### Rank Levels

- Iron: 0-10 wins
- Bronze: 11-20 wins
- Silver: 21-50 wins
- Gold: 51-80 wins
- Diamond: 81-90 wins
- Legendary: 91-100 wins
- Immortal: 101 or more wins

## Note

Ensure that you input positive integer values for wins and losses. If an invalid number is detected, the function will display a message prompting you to enter valid input.

Feel free to customize the function and conditions based on your preferences.

Happy gaming!
