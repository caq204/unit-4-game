$(document).ready(function(){
  $("#computer_score").text(0);
  $("#win").text(0);
  $("#loss").text(0);
  $("#u_score").text(0);

  var compScore;
  var num1,num2,num3,num4;
  var userScore = 0;
  var win = 0;
  var loss = 0;

  $("#newGame").click(startGame);

  function startGame(){
    compScore = 0;
    userScore = 0;

    compScore = Math.floor(Math.random()*120)+19;
    console.log(compScore);

      num1 = Math.floor(Math.random()*12)+1;
     num2 = Math.floor(Math.random()*12)+1;
       num3 = Math.floor(Math.random()*12)+1;
       num4 = Math.floor(Math.random()*12)+1;
      console.log(num1+" "+num2+" "+num3+" "+num4);

      if(num1===num2 || num1===num3 || num1===num4){
        num1 = Math.floor(Math.random()*12)+1;
      }

      if(num2===num3 || num2===num4){
        num2 = Math.floor(Math.random()*12)+1;
      }

      if(num3===num4){
        num3 = Math.floor(Math.random()*12)+1;
      }
      $("#computer_score").text(compScore);
      $("#u_score").text(userScore);
  }

  $("#img1").on({click: function(){
    console.log("Uscore: "+userScore);
    userScore = userScore + num1;
    console.log("Img 1 score: "+userScore);
    $("#u_score").text(userScore);

    if(userScore === compScore){
      win++;
      $("#win").text(win);

      startGame();
    }

    if(userScore>compScore){
      loss++;
      $("#loss").text(loss);

      startGame();
    }
  }
  });

  $("#img2").on({click: function(){
    userScore = userScore + num2;
    console.log("img2: "+userScore);
    $("#u_score").text(userScore);

    if(userScore === compScore){
      win++;
      $("#win").text(win);

      startGame();
    }

    if(userScore>compScore){
      loss++;
      $("#loss").text(loss);

      startGame();
    }
  }
  });

  $("#img3").on({click: function(){
    userScore = userScore + num3;
    $("#u_score").text(userScore);

    if(userScore === compScore){
      win++;
      $("#win").text(win);

      startGame();
    }

    if(userScore>compScore){
      loss++;
      $("#loss").text(loss);

      startGame();
    }
  }
  });

  $("#img4").on({click: function(){
    userScore = userScore + num4;
    $("#u_score").text(userScore);

    if(userScore === compScore){
      win++;
      $("#win").text(win);

      startGame();
    }

    if(userScore>compScore){
      loss++;
      $("#loss").text(loss);

      startGame();
    }
  }
  });
})