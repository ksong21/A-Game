let buttonclick
let windWidth;
let windHeight;
let gameBtn;
let buttonPress1;
function startButtonpress() {
    let styling = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "style/game_buttonpress.css";
    styling.appendChild(link);

    windWidth = window.innerWidth;
    windHeight = window.innerHeight;
    let switchtime = (Math.random()*3000) + 1000;
    buttonclick = false;

    let gameBtn = document.createElement('img');
    if (easterEgg == false){
        gameBtn.src = 'images/badButton.png';
    } else {
        gameBtn.src = "images/TegSneeze.png"
    }
    if (windWidth <= windHeight) {
        gameBtn.style.width = '80%';
    }else {
        gameBtn.style.height = '80%';
    }
    gameBtn.id = 'bad';
    gameBtn.onclick = btnclick;
    document.body.appendChild(gameBtn);

    createTimeBar();
    timerbar(5);
    createScore();
    buttonpress1 = setTimeout(function(){gameBtn.src = 'images/goodButton.png';
     gameBtn.id = 'good';
      gameBtn.onclick = btnclick;
       setTimeout(function(){return},500)},switchtime);

    function btnclick () {
        buttonclick = true;
        if (gameBtn.id == 'good') {
            score += 5;
            document.body.innerHTML = "";
            clearInterval(timerbar);
            clearInterval(nextGameTimer);
            clearTimeout(buttonPress1);
            nextGamePage();
        }else if (gameBtn.id == 'bad'){
            document.body.innerHTML = "";
            clearInterval(timerbar);
            clearInterval(nextGameTimer);
            clearTimeout(buttonPress1);

            gameOver = true;
            gameOverScreen();
            
        }
    }
}

function buttonpressOver() {
    if (buttonclick == false) {
        gameOver = true;
    }
    clearInterval(nextGameTimer);
    document.body.innerHTML = "";
    clearInterval(timerbarNum);
    if (gameBtn.id == 'good') {
        nextGamePage();
    } else {
        gameOverScreen();
    }
    
}
function buttonmessage() {
    return ("You released more covid into the world.");
}