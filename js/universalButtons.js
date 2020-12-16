/**
 * Create and append mute button.
 */
function createLeaderboardButton(){
    let leaderboard = document.createElement('img');
    leaderboard.id = "leaderboardButton";
    leaderboard.src = "images/leaderboard.png";
    leaderboard.onclick = leaderboardButton;
    document.body.appendChild(leaderboard);
}

/**
 * Leaderboard button onclick function.
 * Redirects to leaderboard.html.
 */
function leaderboardButton() {
    document.body.innerHTML = "";
    clearInterval(bobbing);
    leaderBoardMain();
}

/**
 * Creates and appends About button.
 */
function createAboutButton(){
    let about = document.createElement('img');
    about.id = "aboutButton";
    about.src = "images/about.png";
    about.onclick = aboutButton;
    document.body.appendChild(about);
}

/**
 * About button onclick function.
 */
function aboutButton() {
    document.getElementById("aboutOverlay").style.display = "block";
}

/**
 * Creates and appends mute button.
 */
function createMuteButton(){
    let mute = document.createElement('img');
    mute.id = "muteButton";
    if(audioMuted == true){
        mute.src = "images/muted.png";
    } else {
        mute.src = "images/mute.png";
    }
    mute.onclick = function() {
        if (backgroundMusic.paused) {
            document.getElementById("muteButton").src = "images/mute.png";
            backgroundMusic.play();
            audioMuted = false;
        } else {
            document.getElementById("muteButton").src = "images/muted.png";
            backgroundMusic.pause();
            audioMuted = true;
        }
    };
    document.body.appendChild(mute);
}

/**
 * Creates and appends profile button.
 */
function createProfileButton(){
    let profile = document.createElement('img');
    profile.id = "profileButton";
    profile.src = "images/profile.png";
    profile.onclick = profileMain;
    document.body.appendChild(profile);
}

/**
 * Creates and appends back button
 */
function createBackButton(){
    let backButton = document.createElement('button');
    backButton.id = "backButton";
    backButton.innerHTML = "Back";
    backButton.onclick = backButtonClick;
    document.body.appendChild(backButton);
    clicked = false;
}

/**
 * Back button onclick function.
 * Redirects to index.html.
 */
function backButtonClick() {
    document.body.innerHTML = "";
    mainMenu();
}
