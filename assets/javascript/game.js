$(document).ready(function() {

    $("#buttonReset").hide();

    //Global Variables, to be referred to throughout any function.
    var diamondNum = 0;
    var emeraldNum = 0;
    var rubyNum = 0;
    var yellowNum = 0;
    var scoreNow = 0;
    var matchScore = 0;
    var wins = 0;
    var losses = 0;

    //If the given gem does not already have a number attributed to it, then it will generate a random number for that gem.  Otherwise, it will use the number given to the gem, and add it to the current score. 
    $("#blueGem").on('click', function() {
        if (diamondNum) {
            scoreNow = scoreNow + diamondNum;

            document.getElementById("scoreNow").innerHTML = scoreNow;
            scoreKeeper();
        } else {
            diamondNum = Math.floor((Math.random() * 11) + 1);
        }
    });

    $("#greenGem").on('click', function() {
        if (emeraldNum) {
            scoreNow = scoreNow + emeraldNum;
            document.getElementById("scoreNow").innerHTML = scoreNow;
            scoreKeeper();
        } else {
      emeraldNum = Math.floor((Math.random() * 11) + 1);
  }
  });

  $("#redGem").on('click', function() {
              if (rubyNum) {   scoreNow = scoreNow + rubyNum;
            document.getElementById("scoreNow").innerHTML = scoreNow;
            scoreKeeper();
        } else {
            rubyNum = Math.floor((Math.random() * 11) + 1);
        }
    });

    $("#yellowGem").on('click', function() {
        if (yellowNum) {
            scoreNow = scoreNow + yellowNum;
            document.getElementById("scoreNow").innerHTML = scoreNow;
            scoreKeeper();
        } else {
            yellowNum = Math.floor((Math.random() * 11) + 1);
        }
    });


    function playAgain() {

        $("#buttonReset").click(function() {
            scoreToMeet = 0;
            scoreNow = 0;
            diamondNum = 0;
            emeraldNum = 0;
            rubyNum = 0;
            yellowNum = 0;
            givenScore();
            $("#buttonReset").hide();
            $("#gemRow").show();
        });
    };

    //This function will check whether the current score equals the given score to match.  If it does, then the user wins will add by one.  If it does not, then the user losses will add by one.  It will then be posted to the HTML page, through the element with that given Id.  It will also hide and show certain content, for a cleaner look.
    function scoreKeeper() {
        if (scoreNow > matchScore) {
            losses++;
            $("#losses").html('Losses: ' + losses);
            $("#buttonReset").show();
            $("#gemRow").hide();
            playAgain();
        }

        if (scoreNow == matchScore) {
            wins++;
            $("#wins").html('Wins: ' + wins);
            $("#buttonReset").show();
            $("#gemRow").hide();
            playAgain();
        };
    };

    //This function will provide the score to match, through generating a random number.  It will then populate the HTML with this number.
    function givenScore() {
        matchScore = Math.floor((Math.random() * 101) + 19);
        document.getElementById("scoreToMeet").innerHTML = matchScore;
    };

    //This will call the givenScore function.
    givenScore();

});