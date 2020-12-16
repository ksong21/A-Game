function startMask() {
    createHTML();
    createTimeBar()
    timerbar(5);
    function createHTML() {

        let container = document.createElement('div');
        document.body.appendChild(container);

        let item1 = document.createElement('div');
        item1.id = "item1";
        container.appendChild(item1);

        let question = document.createElement('h2');
        question.id = "question";
        item1.appendChild(question);

        let face = document.createElement('div');
        face.id = "face";
        container.appendChild(face);

        let faceImg = document.createElement('img');
        faceImg.src = "images/face.jpg";
        faceImg.ondrop = "drop(event)";
        faceImg.ondragover = "allowDrop(event)";
        face.appendChild(faceImg);

        let desc = document.createElement('div');
        desc.id = "decription";
        container.appendChild(desc);

        let imageContainer = document.createElement('div');
        imageContainer.className = "imageContainer";
        document.body.appendChild(imageContainer);

        let mask1 = document.createElement('div');
        mask1.className = "mask1";
        imageContainer.appendChild(mask1);

        let n95 = document.createElement('img');
        n95.src = "images/N95.jpg";
        n95.id = "mask1";
        n95.ondragstart = "dragStart1(event)";
        n95.draggable = "true";
        mask1.appendChild(n95);

        let mask2 = document.createElement('div');
        mask2.className = "mask2";
        imageContainer.appendChild(mask2);

        let sm = document.createElement('img');
        sm.src = "images/surgicalMask.png";
        sm.id = "mask2";
        sm.ondragstart = "dragStart2(event)";
        sm.draggable = "true";
        mask2.appendChild(sm);

        let mask3 = document.createElement('div');
        mask3.className = "mask3";
        imageContainer.appendChild(mask3);

        let gasMask = document.createElement('img');
        gasMask.src = "images/gasMask.jpg";
        gasMask.id = "mask3";
        gasMask.ondragstart = "dragStart3(event)";
        gasMask.draggable = "true";
        mask3.appendChild(gasMask);

        let mask4 = document.createElement('div');
        mask4.className = "mask4";
        imageContainer.appendChild(mask4);

        let pittaMask = document.createElement('img');
        pittaMask.src = "images/pittaMask.jpg";
        pittaMask.id = "mask4";
        pittaMask.ondragstart = "dragStart4(event)";
        pittaMask.draggable = "true";
        mask4.appendChild(pittaMask);

        let mask5 = document.createElement('div');  
        mask5.className = "mask5";
        imageContainer.appendChild(mask5);

        let eyeMask = document.createElement('img');
        eyeMask.src = "images/eyeMask.jpg";
        eyeMask.id = "mask5";
        eyeMask.ondragstart = "dragStart5(event)";
        eyeMask.draggable = "true";
        mask5.appendChild(eyeMask);

        let mask6 = document.createElement('div');
        mask6.className = "mask6";
        imageContainer.appendChild(mask6);

        let facialMask = document.createElement('img');
        facialMask.src = "images/facialMask.jpg";
        facialMask.id = "mask5";
        facialMask.ondragstart = "dragStart6(event)";
        facialMask.draggable = "true";
        mask6.appendChild(facialMask);

    }

    //selecting elements
    let mask1 = document.getElementById("mask1");
    let mask2 = document.getElementById("mask2");
    let mask3 = document.getElementById("mask3");
    let mask4 = document.getElementById("mask4");
    let mask5 = document.getElementById("mask5");
    let mask6 = document.getElementById("mask6");
    let description = document.getElementById("description");

    //randomizing question order
    let num = Math.floor(Math.random() * 6);

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
    document.getElementById("question").innerHTML = question;

    //function for starting drag event
    function dragStart1(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 0) {
            description.innerHTML = "Correct!";
        } else {
            description.innerHTML = "Wrong!";
        }
    }

    function dragStart2(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 1) {
            description.innerHTML = "Correct!";
        } else {
            description.innerHTML = "Wrong!";
        }
    }

    function dragStart3(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 2) {
            description.innerHTML = "Correct!";
        } else {
            description.innerHTML = "Wrong!";
        }
    }

    function dragStart4(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 3) {
            description.innerHTML = "Correct!";
        } else {
            description.innerHTML = "Wrong!";
        }
    }

    function dragStart5(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 4) {
            description.innerHTML = "Correct!";
        } else {
            description.innerHTML = "Wrong!";
        }
    }

    function dragStart6(event) {
        event.dataTransfer.setData("img", event.target.id);
        if (num == 5) {
            description.innerHTML = "Correct!";
        } else {
            description.innerHTML = "Wrong!";
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
        if (num == 0) {
            document.getElementById("description").innerHTML = "N95 masks can prevent up to 95% of particles sized 0.3 microns and below."
        } else if (num == 1) {
            document.getElementById("description").innerHTML = "Surgical masks provide protection against large fluid droplets, but smaller airborne particles could still come through."
        } else if (num == 2) {
            document.getElementById("description").innerHTML = "Gas mask would stop almost anything including toxic gas."
        } else if (num == 3) {
            document.getElementById("description").innerHTML = "Pitta masks are used to filter out pollen and dust, but they are not suitable for use in pandemic."
        } else if (num == 4) {
            document.getElementById("description").innerHTML = "Eye masks would be a great choice to go along with halloween costumes!"
        } else if (num == 5) {
            document.getElementById("description").innerHTML = "Facial masks are used to moisturize your skin, but does not provide protection in any way."
        }

        endGame();
    }
}

    //end game function
    function endGame() {
        mask1.setAttribute('draggable', false);
        mask2.setAttribute('draggable', false);
        mask3.setAttribute('draggable', false);
        mask4.setAttribute('draggable', false);
        mask5.setAttribute('draggable', false);
        mask6.setAttribute('draggable', false);
    }