// Part 1: Building the Object
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
        "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
        "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
        "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
        "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
        "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
      }
    }
  };
}

// Step 2: Building Functions
function numPointsScored(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName].points;
      }
    }
  }
  return null; // Player not found
}

function shoeSize(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName].shoe;
      }
    }
  }
  return null; // Player not found
}

function teamColors(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  return null; // Team not found
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      if (game[team].teamName === teamName) {
        const players = game[team].players;
        return Object.values(players).map(player => player.number);
      }
    }
  }
  return null; // Team not found
}

function playerStats(playerName) {
  const game = gameObject();
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      if (players.hasOwnProperty(playerName)) {
        return players[playerName];
      }
    }
  }
  return null; // Player not found
}

function bigShoeRebounds() {
  const game = gameObject();
  let maxShoeSize = -Infinity;
  let playerWithMaxShoe = null;
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      for (const player in players) {
        if (players.hasOwnProperty(player)) {
          const shoeSize = players[player].shoe;
          if (shoeSize > maxShoeSize) {
            maxShoeSize = shoeSize;
            playerWithMaxShoe = player;
          }
        }
      }
    }
  }
  return playerWithMaxShoe ? playerStats(playerWithMaxShoe).rebounds : null;
}

// Function to find the player with the most points
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = -Infinity;
  let playerWithMaxPoints = null;
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      for (const player in players) {
        if (players.hasOwnProperty(player)) {
          const points = players[player].points;
          if (points > maxPoints) {
            maxPoints = points;
            playerWithMaxPoints = player;
          }
        }
      }
    }
  }
  return playerWithMaxPoints;
}

// Function to determine which team has the most points
function winningTeam() {
  const game = gameObject();
  let maxTeamPoints = -Infinity;
  let winningTeam = null;
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      let teamPoints = 0;
      for (const player in players) {
        if (players.hasOwnProperty(player)) {
          teamPoints += players[player].points;
        }
      }
      if (teamPoints > maxTeamPoints) {
        maxTeamPoints = teamPoints;
        winningTeam = game[team].teamName;
      }
    }
  }
  return winningTeam;
}

// Function to find the player with the longest name
function playerWithLongestName() {
  const game = gameObject();
  let longestNameLength = -Infinity;
  let playerWithLongestName = null;
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      for (const player in players) {
        if (players.hasOwnProperty(player)) {
          const playerNameLength = player.length;
          if (playerNameLength > longestNameLength) {
            longestNameLength = playerNameLength;
            playerWithLongestName = player;
          }
        }
      }
    }
  }
  return playerWithLongestName;
}

// Function to determine if the player with the longest name had the most steals
function doesLongNameStealATon() {
  const game = gameObject();
  const playerWithLongestName = playerWithLongestName();
  const statsOfLongestNamePlayer = playerStats(playerWithLongestName);
  let maxSteals = -Infinity;
  let playerWithMaxSteals = null;
  for (const team in game) {
    if (game.hasOwnProperty(team)) {
      const players = game[team].players;
      for (const player in players) {
        if (players.hasOwnProperty(player)) {
          const steals = players[player].steals;
          if (steals > maxSteals) {
            maxSteals = steals;
            playerWithMaxSteals = player;
          }
        }
      }
    }
  }
  return playerWithLongestName === playerWithMaxSteals;
}


// Testing the functions
console.log(numPointsScored("Alan Anderson")); // Output: 22
console.log(shoeSize("Alan Anderson")); // Output: 16
console.log(teamColors("Brooklyn Nets")); // Output: ["Black", "White"]
console.log(teamNames()); // Output: ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Brooklyn Nets")); // Output: [0, 30, 11, 1, 31]
console.log(playerStats("Alan Anderson")); // Output: { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 }
console.log(bigShoeRebounds()); // Output: 12
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());


