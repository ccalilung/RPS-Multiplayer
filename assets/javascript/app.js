 // Variables
 var waiting = 0;
 var p1 = 0;
 var p2 = 0;

 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyDxD_FOgaV9FXYYQSvwoVCsXpGvoSWFN_0",
     authDomain: "database1-2cee7.firebaseapp.com",
     databaseURL: "https://database1-2cee7.firebaseio.com",
     projectId: "database1-2cee7",
     storageBucket: "database1-2cee7.appspot.com",
     messagingSenderId: "830356469698"
 };
 firebase.initializeApp(config);
 var database = firebase.database();

 var image = $("<img>")
 var button = $("<button>")

 function variablesPlayer1() {
     window.attributes = ["p1-rock", "p1-paper", "p1-scissors"]
 }

 function variablesPlayer2() {
     window.attributes = ["p2-rock", "p2-paper", "p2-scissors"]
 }

 function choosePlayer() {
     values = ["Rock", "Paper", "Scissors"]
     for (i = 0; i < attributes.length; i++) {
         button.attr("id", attributes[i])
         button.attr("value", values[i])
         button.text(values[i])
         image.css("width", "300")
         button.addClass("btn btn-dark")

         if (button.attr("value") === "Rock") {
             image.attr("src", "./assets/images/rock.jpg")
             $("#rock").append(image).append(button)
             image = $("<img>")
             button = $("<button>")

         } else if (button.attr("value") === "Paper") {
             image.attr("src", "./assets/images/paper.jpg")
             $("#paper").html(image).append(button)
             image = $("<img>")
             button = $("<button>")
         } else if (button.attr("value") === "Scissors") {
             image.attr("src", "./assets/images/scissors.jpg")
             $("#scissors").append(image).append(button)
             image = $("<img>")
             button = $("<button>")
         }
     }
 }

 $("#player1").on("click", function () {
     variablesPlayer1();
     choosePlayer();
     clicks();
     chat();
 })

 $("#player2").on("click", function () {
     variablesPlayer2();
     choosePlayer();
     clicks();
     chat();
 })


 function chat() {
     var form = $("<form>");
     var input = $("<input>");
     var button = $("<button>");
     input.attr("type", "text").attr("name", "Chat").attr("id", "chatText")
     form.append(input);
     input = $("<input>")
     input.attr("type", "submit").attr("value", "Submit").attr("id", "submitButton")
     form.append(input)
     button.attr("type", "button").text("Clear Chat").attr("id", "clearButton")
     $("#chat").append(form);
     $("#chat").append(button);
     submit();
     clearChat();
 }

 function clearChat() {
     $("#clearButton").on("click", function () {
         database.ref().child("chat").remove();
     })
 }

 function submit() {
     $("#submitButton").on("click", function () {
         event.preventDefault()
         // database.ref().child("chat").set("chat");
         var chatText = $("#chatText").val();
         var x = {
             chat: chatText
         }
         database.ref().child("chat").push(x);
         //  $("#chatBox").html("")

         database.ref().on("child_added", function (childSnapshot) {

             // console.log(childSnapshot.val());

             // Store everything into a variable.
             var words = childSnapshot.val().chat;
             console.log(words)
             for (x in words) {
                 console.log(words[x].chat)
                 $("#chatBox").append(words[x].chat + "<br>")


             }
             //  $("#chatBox").append(words.chat + "<br>")

         })
     })
 }

 database.ref().on("value", function (childSnapshot) {

     // console.log(childSnapshot.val());

     // Store everything into a variable.
     $("#chatBox").html("")


     // console.log(childSnapshot.val());

     // Store everything into a variable.
     var words = childSnapshot.val().chat;
     console.log(words)
     for (x in words) {
         console.log(words[x].chat)
         $("#chatBox").append(words[x].chat + "<br>")


     }
 })






 function clicks() {
     $("#p1-rock").on("click", function () {
         database.ref().child("playerchoices").child("player1").remove();
         var p1 = $("#p1-rock").val();
         database.ref().child("playerchoices").child("player1").set(p1)

     })

     $("#p1-paper").on("click", function () {
         database.ref().child("playerchoices").child("player1").remove();
         var p1 = $("#p1-paper").val();
         database.ref().child("playerchoices").child("player1").set(p1)

     })

     $("#p1-scissors").on("click", function () {
         database.ref().child("playerchoices").child("player1").remove();
         var p1 = $("#p1-scissors").val();
         database.ref().child("playerchoices").child("player1").set(p1)

     })

     $("#p2-rock").on("click", function () {
         database.ref().child("playerchoices").child("player2").remove();
         var p2 = $("#p2-rock").val();
         database.ref().child("playerchoices").child("player2").set(p2)

     })

     $("#p2-paper").on("click", function () {
         database.ref().child("playerchoices").child("player2").remove();
         var p2 = $("#p2-paper").val();
         database.ref().child("playerchoices").child("player2").set(p2)

     })

     $("#p2-scissors").on("click", function () {
         database.ref().child("playerchoices").child("player2").remove();
         var p2 = $("#p2-scissors").val();
         database.ref().child("playerchoices").child("player2").set(p2)
     })
 }
 database.ref().on("child_changed", function (childSnapshot) {

     // console.log(childSnapshot.val());

     // Store everything into a variable.
     p1 = childSnapshot.val().player1;
     p2 = childSnapshot.val().player2;
     console.log(p1)
     console.log(p2)


     // database.ref().child("player1").remove();
     if (p1 !== undefined && p2 !== undefined) {
         whoWins();
     }

 })

 function whoWins() {
     {
         if ((p1 === 'Rock' && p2 === 'Scissors') || (p1 === 'Paper' && p2 === 'Rock') || (p1 === 'Scissors' && p2 === 'Paper')) {
             p1 = 1;
             p2 = 0;
         } else if ((p2 === 'Rock' && p1 === 'Scissors') || (p2 === 'Paper' && p1 === 'Rock') || (p2 === 'Scissors' && p1 === 'Paper')) {
             p2 = 1
             p1 = 0;
         } else if ((p2 === 'Rock' && p1 === 'Rock') || (p2 === 'Paper' && p1 === 'Paper') || (p2 === 'Scissors' && p1 === 'Scissors')) {
             p2 = 2;
             p1 = 2;
         }
     }
     if (p1 === 1) {
         $("#announcements").html("<h1>Player 1 Wins</h1>")
         p1 = 0;
     }
     if (p2 === 1) {
         $("#announcements").html("<h1>Player 2 Wins</h1>");
         setTimeout(function() {
            $("#announcements").html("");
         },5000);
         p2 = 0;
     }
     if (p1 === 2 && p2 === 2) {
         $("#announcements").html("<h1>Tie</h1>");
         p1 = 0;
         p2 = 0;
     }
     database.ref().child("playerchoices").remove();
 }