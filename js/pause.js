
/**
 * Display the pause menu when called and creates the pause button
 */
function createPauseMenu() {
    let menuBackground = document.createElement("div");
    menuBackground.id = "pauseMenu";
    menuBackground.style.display = "none";
    document.body.append(menuBackground);

    let menuResume = document.createElement("button");
    menuResume.id = "menuResume";
    menuResume.innerHTML = "Resume";
    menuBackground.appendChild(menuResume);
    

    let menuQuit = document.createElement("button");
    menuQuit.id = "menuQuit";
    menuQuit.innerHTML = "Quit";
    menuQuit.onclick = function() {
        document.location.reload();
    }
    menuBackground.appendChild(menuQuit);
    
    // pause button
    let pausebtn = document.createElement("img");
    pausebtn.src = "images/pause.png";
    pausebtn.id = "pausebtn";
    pausebtn.setAttribute("draggable", "false");
    document.body.append(pausebtn);
}