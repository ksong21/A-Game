//variable for correct answer
let correctAnswer;

//randomizing question order
let num = Math.floor(Math.random() * 6);

//starting the game
function startMask() {
    createScore("gameScore");
    createMuteButton();
    correctAnswer = false;
    createHTML();
    createTimeBar();
    timerbar(5);
    
    function createHTML() {
        //Div to contain the entire page
        let container = document.createElement('div');
        container.id = "maskHTML";
        document.body.appendChild(container);

        //Div to contain question and description
        let item1 = document.createElement('div');
        item1.id = "item1";
        container.appendChild(item1);

        //Question
        let question = document.createElement('h2');
        question.id = "maskQuestion";
        item1.appendChild(question);

        //Description
        let desc = document.createElement('h4');
        desc.id = "maskDescription";
        item1.appendChild(desc);

        //Div for face image
        let face = document.createElement('div');
        face.id = "face";
        item1.appendChild(face);

        //Face image
        let faceImg = document.createElement('img');
        if (easterEgg == false){
            faceImg.src = "images/Sneeze_person.png";
        } else {
            faceImg.src = "images/TegSneeze.png"
        }

        faceImg.className = "faceImg";
        faceImg.ondrop = drop;
        faceImg.ondragover = allowDrop;
        face.appendChild(faceImg);

        //Div to contain all mask divs
        let imageContainer = document.createElement('div');
        imageContainer.className = "imageContainer";
        document.body.appendChild(imageContainer);

        //Div for mask 1
        let mask1 = document.createElement('div');
        mask1.className = "mask1";
        imageContainer.appendChild(mask1);

        //Div for mask 2
        let mask2 = document.createElement('div');
        mask2.className = "mask2";
        imageContainer.appendChild(mask2);

        //Div for mask 3
        let mask3 = document.createElement('div');
        mask3.className = "mask3";
        imageContainer.appendChild(mask3);

        //Div for mask 4
        let mask4 = document.createElement('div');
        mask4.className = "mask4";
        imageContainer.appendChild(mask4);

        //Div for mask 5
        let mask5 = document.createElement('div');  
        mask5.className = "mask5";
        imageContainer.appendChild(mask5);

        //Div for mask 6
        let mask6 = document.createElement('div');
        mask6.className = "mask6";
        imageContainer.appendChild(mask6);

        //N95 image
        let n95 = document.createElement('img');
        n95.src = "images/N95.jpg";
        n95.id = "mask1";
        n95.ondragstart = dragStart1;
        n95.draggable = true;
        n95.onclick = maskClick1;
        mask1.appendChild(n95);

        //Surgical mask image
        let sm = document.createElement('img');
        sm.src = "images/surgicalMask.png";
        sm.id = "mask2";
        sm.ondragstart = dragStart2;
        sm.draggable = true;
        sm.onclick = maskClick2;
        mask2.appendChild(sm);

        //Gas mask image
        let gasMask = document.createElement('img');
        gasMask.src = "images/gasMask.jpg";
        gasMask.id = "mask3";
        gasMask.ondragstart = dragStart3;
        gasMask.draggable = true;
        gasMask.onclick = maskClick3;
        mask3.appendChild(gasMask);

        //Pitta mask image
        let pittaMask = document.createElement('img');
        pittaMask.src = "images/pittaMask.jpg";
        pittaMask.id = "mask4";
        pittaMask.ondragstart = dragStart4;
        pittaMask.draggable = true;
        pittaMask.onclick = maskClick4;
        mask4.appendChild(pittaMask);

        //Eye mask image
        let eyeMask = document.createElement('img');
        eyeMask.src = "images/eyeMask.jpg";
        eyeMask.id = "mask5";
        eyeMask.ondragstart = dragStart5;
        eyeMask.draggable = true;
        eyeMask.onclick = maskClick5;
        mask5.appendChild(eyeMask);

        //Facial mask image
        let facialMask = document.createElement('img');
        facialMask.src = "images/facialMask.jpg";
        facialMask.id = "mask6";
        facialMask.ondragstart = dragStart6;
        facialMask.draggable = true;
        facialMask.onclick =maskClick6;
        mask6.appendChild(facialMask);
    }

    //selecting masks by their id;
    let m1 = document.getElementById("mask1");
    let m2 = document.getElementById("mask2");
    let m3 = document.getElementById("mask3");
    let m4 = document.getElementById("mask4");
    let m5 = document.getElementById("mask5");
    let m6 = document.getElementById("mask6"); 

    //function for returning question
    function questionChoice(num) {
        let questions = [
            "Which mask prevents ~95% of particles sized 0.3 microns and below, therefore suitable to protect yourself from COVID-19?",
            "Which mask would protect you against large droplets (fluid resistant), but does not protect you against smaller airborne particles?",
            "Which mask would protect you from almost anything, even from toxic gas?",
            "Which mask is used to filter out pollen and dust, but does not provide any protection against COVID-19?",
            "Which mask would you wear on Halloween?",
            "Which mask is suitable for moisturizing your skin, yet does not protect you from COVID-19?"
        ];
        return (questions[num]);
    }

    //function to push the question to html
    let question = questionChoice(num);
    document.getElementById("maskQuestion").innerHTML = question;

    //onclick function for mobile devices
    function maskClick1() {
        if (num == 0) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
    }

    function maskClick2() {
        if (num == 1) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
    }

    function maskClick3() {
        if (num == 2) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
    }

    function maskClick4() {
        if (num == 3) {
            description.innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayScore();
        } else {
            description.innerHTML = "Wrong!";
        }
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
    }

    function maskClick5() {
        if (num == 4) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
    }

    function maskClick6() {
        if (num == 5) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
            score += 5;
            displayScore();
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
    }

    //function for starting drag event
    function dragStart1(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 0) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    function dragStart2(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 1) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    function dragStart3(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 2) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    function dragStart4(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 3) {
            description.innerHTML = "Correct!";
            correctAnswer = true;
        } else {
            description.innerHTML = "Wrong!";
        }
    }

    function dragStart5(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 4) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    function dragStart6(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 5) {
            document.getElementById("maskDescription").innerHTML = "Correct!";
            correctAnswer = true;
        } else {
            document.getElementById("maskDescription").innerHTML = "Wrong!";
        }
    }

    //function to allow drops
    function allowDrop(event) {
        event.preventDefault();
    }

    //function for when image is dropped
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("img");
        event.target.appendChild(document.getElementById(data));
        m1.setAttribute('draggable', false);
        m2.setAttribute('draggable', false);
        m3.setAttribute('draggable', false);
        m4.setAttribute('draggable', false);
        m5.setAttribute('draggable', false);
        m6.setAttribute('draggable', false);
        m1.onclick = null;
        m2.onclick = null;
        m3.onclick = null;
        m4.onclick = null;
        m5.onclick = null;
        m6.onclick = null;
        if (correctAnswer == true) {
            score = score + 5;
            displayScore();
        }

        if (num == 0) {
            document.getElementById("maskDescription").innerHTML = "N95 masks can prevent up to 95% of particles sized 0.3 microns and below."
        } else if (num == 1) {
            document.getElementById("maskDescription").innerHTML = "Surgical masks provide protection against large fluid droplets, but smaller airborne particles could still come through."
        } else if (num == 2) {
            document.getElementById("maskDescription").innerHTML = "Gas mask would stop almost anything including toxic gas."
        } else if (num == 3) {
            document.getElementById("maskDescription").innerHTML = "Pitta masks are used to filter out pollen and dust, but they are not suitable for use in pandemic."
        } else if (num == 4) {
            document.getElementById("maskDescription").innerHTML = "Eye masks would be a great choice to go along with halloween costumes!"
        } else if (num == 5) {
            document.getElementById("maskDescription").innerHTML = "Facial masks are used to moisturize your skin, but does not provide protection in any way."
        }
    }
}

    //end game function
    function endMask() {
        if (correctAnswer == false){
            gameOver = true;
        }
        clearInterval(nextGameTimer);
        document.body.innerHTML = "";
        clearInterval(timerbarNum);
    }

    function maskMessage(){
        return "Wrong mask choice. You can do better next time!";
    }
