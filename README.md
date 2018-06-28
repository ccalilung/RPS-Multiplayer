# RPS-Multiplayer

This is an online version of Rock, Paper, or Scissors. Two players can play at the same time.

The first person who arrives can input his/her name and select what player # he/she would like to be. Submission here will setup the game for that player, and remove that player from an option for anyone else wanting to enter. The 2nd player then can enter his/her name and select the remaining player #.

The game goes as rock, paper, scissors normally goes. After each person has selected their choice, the answers will be compared and the winner chosen. That gets stored in the browser and the firebase database.

There is also a chat function that allows players to trash talk each other. This also utilizes firebase.

When a player closes his/her browser, or navigates away, the firebase database will clear his/her data.