'use strict';
// Coding Challenge #1
// We're building a football betting app
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
console.log('CODING CHALLENGE 1:');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1: Use of Destructuring the array:
const [players1, players2] = game.players;
//2: Use of Rest Pattern:
const [gk, ...fieldPlayers] = players1;
//3: Use of Spread Operator to join two arrays:
const allPlayers = [...players1, ...players2];
//4: Spread Operator to add new elements in the array:
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//5: Use of Nested destructuring of Object:
const { team1, x: draw, team2 } = game.odds;
//6: Use of Rest Parameters:
const printGoals = function (...khiladi) {
  console.log(`${khiladi.length} goals were scored!`);
  for (let i = 0; i < khiladi.length; i++) {
    console.log(khiladi[i]);
  }
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
//7: using And and OR:
console.log((team1 < team2 && 'team1') || (team2 < team1 && 'team2') || 'draw');

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the same property names
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
console.log('CODING CHALLENGE 2:');
//1: Using for-of loop and destructuring in arrays:
const scoringPlayers = game.scored;
for (const [goalNum, scorer] of scoringPlayers.entries()) {
  console.log(`Goal ${goalNum + 1}: ${scorer} `);
}
//2: Using for-of loop i Objects
const oddsArr = Object.entries(game.odds);
let avgOdd = 0;
for (const [team, odd] of oddsArr) avgOdd += odd;
console.log(`Average odd is: ${avgOdd / oddsArr.length}`);
//3:
for (const [team, odd] of oddsArr) {
  console.log(
    `Odd of ${game[team] ? 'Victory' : 'Draw'} ${game[team] ?? ''}: ${odd}`
  );
}
//4:
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? ++scorers[player] : (scorers[player] = 1);
}
console.log(scorers);

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened.
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);
console.log('CODING CHALLENGE 3:');
//1:Creating a set from the map values and then creating an array out of it:
const events = [...new Set(gameEvents.values())];
console.log(events);
//2:Deletion from Maps
gameEvents.delete(64);
//3:
const numEvents = gameEvents.size;
console.log(`An event happened, on average, every ${90 / numEvents} minutes.`);
//4:
for (const [time, event] of gameEvents) {
  console.log(
    `${
      (time < 45 && '[FIRST HALF]') || (time > 45 && '[SECOND HALF]')
    } ${time}: ${event}`
  );
}

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// 1) Remember which character defines a new line in the textarea
// 2) The solution only needs to work for a variable made out of 2 words, like a_b
// 3) Start without worrying about the ✅. Tackle that only after you have the variable name conversion working
console.log('CODING CHALLENGE 4:');
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const underscore_case = document.querySelector('textarea').value.split('\n');
  for (const [index, word] of underscore_case.entries()) {
    const [first, second] = word.toLowerCase().trim().split('_');
    const output = first + second.replace(second[0], second[0].toUpperCase());
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(index + 1)}`);
  }
});

//CODING CHALLENGE 5:
console.log('CODING CHALLENGE 5:');
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//Convert the above data into a nicely formated data as given below:
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const rows = flights.split('+');
for (const row of rows) {
  let [word1, word2, word3, word4] = row.split(';');
  word1 = word1.split('_').join(' ').trim();
  word1 = word1.startsWith('Delayed') ? '🔴 ' + word1 : word1;
  word2 = word2.slice(0, 3).toUpperCase();
  word3 = word3.slice(0, 3).toUpperCase();
  word4 = word4.replace(':', 'h');
  const output = word1 + ' from ' + word2 + ' to ' + word3 + ' (' + word4 + ')';
  console.log(output.padStart(44));
}
