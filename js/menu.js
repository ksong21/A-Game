let bobbing;
let audioMuted = false;
let easterEgg = false;
mainMenu();


/**
 * Creates a main menu page.
 */
function mainMenu() {
    clearInterval(bobbing);
    document.body.id = "mainMenuBody"
    createIndexHTML();
    createButtons();
    textBobbing();
}

// Play text bobbing.
function textBobbing() {
    document.getElementById("playText").style.fontSize = "30px";
    bobbing = setInterval(function () {
        let playText = document.getElementById("playText");
        if (playText.style.fontSize == "30px") {
            playText.style.fontSize = "20px";
        } else {
            playText.style.fontSize = "30px";
        }
    }, 1000);
}

/**
 * Starts the game when the user taps on the body of the index.
 */
function startGame() {
    document.body.innerHTML = "";
    clearInterval(bobbing);
    nextGamePage();
    // Check if user is logged in
    checkLogin();
}

/**
 * Background music.
 */
let backgroundMusic = document.createElement("AUDIO");
backgroundMusic.src = "audio/backgroundMusic.mp3";
backgroundMusic.loop = true;

/**
 * Creates and appends a div tag to store the game name and  text.
 */
function createIndexHTML() {
    let bg = document.createElement('video');
    bg.id = "myVideo";
    bg.src = "images/background.mp4";
    bg.autoplay = true;
    document.body.appendChild(bg);

    let screen = document.createElement('div');
    screen.id = "clickArea";
    document.body.appendChild(screen);
    screen.onclick = startGame;

    let title = document.createElement('img');
    screen.appendChild(title);
    title.src = "images/title.png";
    title.id = "gameName";

    let text = document.createElement('p');
    screen.appendChild(text);
    text.innerHTML = "Click anywhere to play!";
    text.id = "playText";

    let about = document.createElement('div');
    document.body.appendChild(about);
    about.id = "aboutOverlay";
    about.innerHTML = 
    `
    <p id="aboutText" data-text="Hi! Welcome to A_Game, a game designed by BCIT CST students.
    Self-isolation can be stressful. We aimed to provide a fun and silly
    way to educate and destress during the weeks of social-distancing. We
    hope to entertain you and reinforce some safe practices about the COVID-19
    pandemic. Have fun, and stay safe! >:)">
        Hi! Welcome to A_Game, a game designed by BCIT CST students.
        Self-isolation can be stressful. We aimed to provide a fun and silly
        way to educate and destress during the weeks of social-distancing. We
        hope to entertain you and reinforce some safe practices about the COVID-19
        pandemic. Have fun, and stay safe! >:)
    </p>
    <button onclick="aboutOk()" id="aboutOk">Ok</button>
    <div id="aboutImages">
        <img src="images/kevinS.png" id="kevinS">
        <img src="images/kevinL.png" id="kevinL">
        <img src="images/teg.png" id="teg">
        <img src="images/fraser.png" id="fraser">
        <img src="images/jack.png" id="jack">
    </div>
    `;
    teg = document.getElementById("teg");
    about.style.zIndex = 5;
    if (easterEgg == true){
        turnOnEasteregg();
    } else {
        teg.onclick = turnOnEasteregg;
    }

}

/**
 * Sound yes button.
 */
function soundOk() {
    backgroundMusic.play();
    document.getElementById("soundOverlay").style.display = "none";
}

/**
 * About exit button.
 */
function aboutOk() {
    document.getElementById("aboutOverlay").style.display = "none";
}

/**
 * Creates the learderboard, about, mute buttons.
 */
function createButtons() {
    createLeaderboardButton();
    createAboutButton();
    createMuteButton();
    createProfileButton();
}
