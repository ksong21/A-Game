let clapClicked = false;

//starting the game
function startClap() {
    createScore("gameScore");
    createMuteButton();
    createClap();
    createTimeBar();
    timerbar(5);
}

    function createClap() {
        //Div to contain the entire page
        let container = document.createElement('div');
        container.id = "clapHTML";
        document.body.appendChild(container);
        
        //Div to contain the image
        let imgContainer = document.createElement('div');
        imgContainer.id = "imgDIV";
        container.appendChild(imgContainer);

        //Div for hands image
        let hands = document.createElement('img');
        if (easterEgg == false){
            hands.src = "images/clap.png";
        } else {
            hands.src = "images/tegClap.png"
        }

        hands.id ="handImg";
        hands.onclick = oneClap;
        imgContainer.appendChild(hands);
    }

    //onclick function for a clap
    function oneClap() {
        var clapSound = new Audio("audio/applause3.mp3");
        clapSound.play();
        clapScore();
        clapClicked = true;
    }

    //function to add and display the score
    function clapScore() {
        score += 1;
        displayScore();
    }

    function endClap() {
        if (clapClicked == false) {
            gameOver = true;
        }
        clearInterval(nextGameTimer);
        document.body.innerHTML = "";
        clearInterval(timerbarNum);
    }

    function clapMessage() {
        return "Your clap was not loud enough and people couldn't hear it."
    }
