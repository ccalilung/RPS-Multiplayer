# RPS-Multiplayer

Deployed project on GitHub: https://ccalilung.github.io/RPS-Multiplayer

Background: This game uses Firebase to allow two people using different browsers to play the classic game of Rock, Paper, Scissors. Firebase is used to record what player(s) have been selected, then once the gameplay has started, what each player has selected. Once both players have selected, there is a comparison using JavaScript/JQuery of the answers with a lookup function to determine who wins. That is then recorded and pushed to both clients so that the score is shown. Once a player closes his/her browser or leaves the game, their entry in Firebase is wiped so that a new player can enter and a new set of games can commence.

This is an online version of Rock, Paper, or Scissors. Two players can play at the same time.

The first person who arrives can input his/her name and select what player # he/she would like to be. Submission here will setup the game for that player, and remove that player from an option for anyone else wanting to enter. The 2nd player then can enter his/her name and select the remaining player #.

The game goes as rock, paper, scissors normally goes. After each person has selected their choice, the answers will be compared and the winner chosen. That gets stored in the browser and the firebase database.

There is also a chat function that allows players to trash talk each other. This also utilizes firebase.

When a player closes his/her browser, or navigates away, the firebase database will clear his/her data.
