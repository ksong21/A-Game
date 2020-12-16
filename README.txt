==================
++ General Info ++
==================
DEVELOPERS:
Kevin Song
Kevin Lee
Fraser Copland
Tegvaran Sooch
Jack Lee

==================
++++ Content +++++
==================
Top level folder:
├── README.txt                  # Project documentation
├── index.html                  # Landing page and login form
├── signup.html                 # Sign up form
├── menu.html                   # Main menu for game after user logs in
├── /style                      # Contains all style sheets (CSS)
├── /js                         # Contains all JS
├── /images                     # Contains all visual graphics
├── /audio                      # Contains all audio files
├── /fullscreenAPI              # Fullscreen API files

==================
+++ Test plan ++++
==================
https://docs.google.com/spreadsheets/d/1mUWfLMroHj4YktP2856k4IwKG4_4KQ_mdIfdBcNtwHs/edit?usp=sharing

==================
++ Installation ++
==================
1. Languages used are JavaScript, HTML, CSS
2. IDE used for development is Visual Studio Code
3. Firebase Firestore was used for database functionality. Use Firebase API key whenever a connection to DB is needed:

<script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>
<script>
  var firebaseConfig = {
    apiKey: "AIzaSyCCJQ7caXKHBoauJubhiWYarLcALUITOyw",
    authDomain: "a-game-9c74b.firebaseapp.com",
    databaseURL: "https://a-game-9c74b.firebaseio.com",
    projectId: "a-game-9c74b",
    storageBucket: "a-game-9c74b.appspot.com",
    messagingSenderId: "508808118558",
    appId: "1:508808118558:web:1c92df236e6b671b3b490f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

4. Everything you need is in this repo; Fscreen Fullscreen API v1.0.2 is already included, no need to download APIs

==================
++++ Citation ++++
==================
All images: either designed from scratch, edited, or downloaded and used straight from Google Images.
All audio files: downloaded from YouTube and edited using Audacity.

1.
File: share.js
Line(s): 6 to 13
Author name: Facebook
Availability: https://developers.facebook.com/docs/plugins/share-button/

2.
File: menu.js
Line(s): 144
Author name: Facebook
Availability: https://developers.facebook.com/docs/plugins/share-button/

3.
File: menu.js
Line(s): 152
Author name: Twitter
Availibility: https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview

4.
File easterEgg.css
Line(s): 3 t0 15, 73 to 84
Author Name: Dark Code
Availability: https://www.youtube.com/watch?v=HpOi_tSMAoY 

5.
File: applause.mp3
Line(s): 49 in game_clap.js
Author name: Ashe Pradeep 
Availability: https://www.youtube.com/watch?v=zf5RbFveQLs

6.
File: fullscreen.js
Line(s): 31-34
Author name: dcode
Availability: https://youtu.be/3FjYcMKZ3SU?t=322

7.
File: login.js
Line(s): 23-31
Author name: firebase
Availability: https://firebase.google.com/docs/auth/web/auth-state-persistence

8.
File: login.js
Line(s): 95-97
Author name: Firebase
Availability: https://firebase.google.com/docs/auth/web/start

9.
File: login.js
Line(s): 47-55
Author name: Firebase
Availability: https://firebase.google.com/docs/auth/web/start

10.
File: login.js, profile.js
Line(s): login.js (5-12); profile.js (5-13)
Author name: Firebase
Availability: https://console.firebase.google.com/project/a-game-9c74b/settings/general/web:NWVhYjQwY2MtMDNlYy00OGU5LWFkMTEtYjYwMTI5MzY5MGQ0

11.
File: update_score.js
Line(s): 10-12
Author name: The Net Ninja
Availability: https://youtu.be/qWy9ylc3f9U?t=707

12.
File: login.js
Line(s): 52-55
Author name: The Net Ninja
Availability: https://youtu.be/qWy9ylc3f9U?t=416

13.
File: buttonClick.mp3
Line(s): pause.js ( line 6), universalButtons.js (Lines 37, 74, 105, 135, 174);
Author name: Mike Koenig
Availability: http://soundbible.com/419-Tiny-Button-Push.html

14.
File: BlopSound.mp3
Line(s): game_push.js line 16
Author name: Mark DiAngelo
Availability: http://soundbible.com/2067-Blop.html

15.
File: profile.js
Line(s): 48-57
Author name: Firebase
Availability: https://firebase.google.com/docs/auth/web/start

---------------------------------------------------

FullScreenAPI License:
The MIT License (MIT)

Copyright (c) 2017 Rafael Pedicini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
