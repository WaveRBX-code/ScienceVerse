/* ==========================================================
   SCIENCEVERSE 4.0
   SCRIPT.JS
   PART 1
========================================================== */

"use strict";


/* ===============================
   ELEMENTS
=============================== */

const loadingScreen =
document.getElementById("loadingScreen");

const cursorGlow =
document.getElementById("cursorGlow");

const backgroundMusic =
document.getElementById("backgroundMusic");

const clickSound =
document.getElementById("clickSound");

const successSound =
document.getElementById("successSound");

const wrongSound =
document.getElementById("wrongSound");

const themeSound =
document.getElementById("themeSound");

const musicBtn =
document.getElementById("musicBtn");

const toggleMusic =
document.getElementById("toggleMusic");


/* ===============================
   LOADING SCREEN
=============================== */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        if(loadingScreen){

            loadingScreen.style.opacity="0";

            setTimeout(()=>{

                loadingScreen.style.display="none";

            },800);

        }

    },2000);

});


/* ===============================
   CURSOR EFFECT
=============================== */

document.addEventListener("mousemove",(e)=>{

    if(cursorGlow){

        cursorGlow.style.left =
        e.clientX+"px";

        cursorGlow.style.top =
        e.clientY+"px";

    }

});


/* ===============================
   BUTTON CLICK SOUND
=============================== */

document
.querySelectorAll("button")
.forEach(button=>{


    button.addEventListener("click",()=>{


        if(clickSound){

            clickSound.currentTime=0;

            clickSound.play()
            .catch(()=>{});

        }


    });


});



/* ===============================
   MUSIC SYSTEM
=============================== */


let musicPlaying=false;


function startMusic(){

    if(backgroundMusic){

        backgroundMusic.volume=.35;

        backgroundMusic.play()
        .catch(()=>{});

        musicPlaying=true;

    }

}



function stopMusic(){

    if(backgroundMusic){

        backgroundMusic.pause();

        musicPlaying=false;

    }

}



function changeMusic(){

    if(musicPlaying){

        stopMusic();

    }

    else{

        startMusic();

    }

}



if(musicBtn){

    musicBtn.addEventListener(
        "click",
        changeMusic
    );

}


if(toggleMusic){

    toggleMusic.addEventListener(
        "click",
        changeMusic
    );

}



/* ===============================
   SMOOTH NAVIGATION
=============================== */


document
.querySelectorAll("nav a")
.forEach(link=>{


    link.addEventListener(
    "click",
    (event)=>{


        event.preventDefault();


        let target =
        document.querySelector(
        link.getAttribute("href")
        );


        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



/* ===============================
   HERO BUTTONS
=============================== */


const startLearning =
document.getElementById(
"startLearning"
);


if(startLearning){


startLearning.onclick=()=>{


    document
    .getElementById("learn")
    .scrollIntoView({

        behavior:"smooth"

    });


};


}



const watchIntro =
document.getElementById(
"watchIntro"
);



if(watchIntro){


watchIntro.onclick=()=>{


    document
    .getElementById("themes")
    .scrollIntoView({

        behavior:"smooth"

    });


};


}




/* ===============================
   AI SCIENTIST FACT SYSTEM
=============================== */


const scienceFact =
document.getElementById(
"scienceFact"
);


const chatBox =
document.getElementById(
"chatBox"
);



const facts=[

"🪐 Jupiter is the largest planet in our Solar System.",

"⚡ Lightning can heat the air around it hotter than the Sun's surface.",

"🧬 Human DNA contains billions of instructions.",

"🌊 Water covers most of Earth's surface.",

"🌌 There are billions of galaxies in the universe.",

"🔬 Microscopes allow us to see tiny worlds.",

"🌱 Plants create oxygen through photosynthesis.",

"🌙 The Moon affects Earth's ocean tides."

];



function showFact(){


    let random =
    facts[
    Math.floor(
    Math.random()*facts.length
    )
    ];


    if(chatBox){


        chatBox.innerHTML="";


        let i=0;


        let typing=setInterval(()=>{


            chatBox.innerHTML +=
            random[i];


            i++;


            if(i>=random.length){

                clearInterval(typing);

            }


        },30);


    }


}



if(scienceFact){

    scienceFact.onclick=showFact;

}



/* ===============================
   SCROLL ANIMATION
=============================== */


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform=
        "translateY(0)";


    }


});


},
{

threshold:.15

});



document
.querySelectorAll("section")
.forEach(section=>{


    section.style.opacity="0";

    section.style.transform=
    "translateY(40px)";


    section.style.transition=
    "all .8s ease";


    observer.observe(section);


});



console.log(
"🚀 ScienceVerse 4.0 JS Part 1 Loaded"
);
/* ==========================================================
   SCIENCEVERSE 4.0
   SCRIPT.JS
   PART 2
========================================================== */


/* ===============================
   THEME SYSTEM
=============================== */


const themeButtons =
document.querySelectorAll(".themeButton");


const savedTheme =
localStorage.getItem("scienceTheme");



if(savedTheme){

    document.body.className =
    savedTheme;

}



themeButtons.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        let theme =
        button.dataset.theme;


        applyTheme(theme);


    });


});



function applyTheme(theme){


    document.body.className =
    theme;


    localStorage.setItem(
    "scienceTheme",
    theme
    );


    if(themeSound){

        themeSound.currentTime=0;

        themeSound.play()
        .catch(()=>{});

    }


    showPopup(
    "🎨 Theme Changed!"
    );


}




/* ===============================
   ACHIEVEMENT POPUP
=============================== */


const achievementPopup =
document.getElementById(
"achievementPopup"
);



function showPopup(message){


    if(!achievementPopup)
    return;


    achievementPopup.innerHTML =
    message;


    achievementPopup.classList.add(
    "show"
    );


    setTimeout(()=>{


        achievementPopup.classList.remove(
        "show"
        );


    },3000);


}



/* ===============================
   XP SYSTEM
=============================== */


let xp =
Number(
localStorage.getItem("scienceXP")
) || 0;



let level =
Number(
localStorage.getItem("scienceLevel")
) || 1;



let coins =
Number(
localStorage.getItem("scienceCoins")
) || 0;




const xpDisplay =
document.getElementById(
"xpDisplay"
);



const levelDisplay =
document.getElementById(
"levelDisplay"
);



const coinsDisplay =
document.getElementById(
"coinsDisplay"
);




function updateStats(){


    if(xpDisplay)
    xpDisplay.innerHTML=xp;


    if(levelDisplay)
    levelDisplay.innerHTML=level;


    if(coinsDisplay)
    coinsDisplay.innerHTML=coins;


    localStorage.setItem(
    "scienceXP",
    xp
    );


    localStorage.setItem(
    "scienceLevel",
    level
    );


    localStorage.setItem(
    "scienceCoins",
    coins
    );


}



function addXP(amount){


    xp+=amount;


    coins+=Math.floor(
    amount/2
    );


    if(xp >= level*100){


        level++;


        showPopup(
        "🚀 Level Up! Level "+level
        );


    }


    updateStats();


}



updateStats();




/* ===============================
   DAILY CHALLENGE
=============================== */


const dailyChallenge =
document.getElementById(
"dailyChallengeBtn"
);



if(dailyChallenge){


dailyChallenge.onclick=()=>{


    addXP(20);


    showPopup(
    "🏆 Daily Challenge Started!"
    );


    document
    .getElementById("quiz")
    .scrollIntoView({

        behavior:"smooth"

    });


};


}




/* ===============================
   RANDOM FACT BUTTON
=============================== */


const randomFact =
document.getElementById(
"randomFact"
);



if(randomFact){


randomFact.onclick=()=>{


    showFact();


};


}



/* ===============================
   SAVE SYSTEM
=============================== */


const saveButton =
document.getElementById(
"saveProgress"
);



if(saveButton){


saveButton.onclick=()=>{


    updateStats();


    showPopup(
    "💾 Progress Saved!"
    );


};


}




/* ===============================
   RESET SYSTEM
=============================== */


const resetButton =
document.getElementById(
"resetProgress"
);



if(resetButton){


resetButton.onclick=()=>{


    localStorage.clear();


    xp=0;

    level=1;

    coins=0;


    updateStats();


    showPopup(
    "🔄 Progress Reset!"
    );


};


}




/* ===============================
   BACKGROUND PARTICLES
=============================== */


const space =
document.getElementById(
"spaceBackground"
);



function createParticle(){


    if(!space)
    return;


    let particle =
    document.createElement(
    "span"
    );


    particle.className =
    "particle";


    particle.style.left =
    Math.random()*100+"%";


    particle.style.top =
    Math.random()*100+"%";


    particle.style.animationDuration =
    (5+
    Math.random()*10)
    +"s";



    space.appendChild(
    particle
    );


    setTimeout(()=>{


        particle.remove();


    },15000);


}



setInterval(
createParticle,
700
);



console.log(
"✨ ScienceVerse JS Part 2 Loaded"
);
/* ==========================================================
   SCIENCEVERSE 4.0
   SCRIPT.JS
   PART 3
========================================================== */


/* ===============================
   QUIZ SYSTEM
=============================== */


const questions = [

{
question:"Which planet is known as the Red Planet?",
answers:[
"Mars",
"Earth",
"Venus",
"Jupiter"
],
correct:0
},

{
question:"What gas do plants release during photosynthesis?",
answers:[
"Oxygen",
"Carbon Dioxide",
"Nitrogen",
"Hydrogen"
],
correct:0
},

{
question:"What is the smallest unit of matter?",
answers:[
"Atom",
"Cell",
"Molecule",
"Tissue"
],
correct:0
},

{
question:"Which force keeps planets in orbit?",
answers:[
"Gravity",
"Friction",
"Magnetism",
"Electricity"
],
correct:0
},

{
question:"What organ pumps blood through the body?",
answers:[
"Heart",
"Lungs",
"Brain",
"Kidney"
],
correct:0
},

{
question:"What is H₂O commonly called?",
answers:[
"Water",
"Oxygen",
"Hydrogen",
"Salt"
],
correct:0
},

{
question:"Which scientist discovered gravity?",
answers:[
"Isaac Newton",
"Albert Einstein",
"Marie Curie",
"Galileo"
],
correct:0
},

{
question:"How many planets are in our Solar System?",
answers:[
"8",
"7",
"9",
"10"
],
correct:0
},

{
question:"Which instrument is used to see tiny objects?",
answers:[
"Microscope",
"Telescope",
"Thermometer",
"Compass"
],
correct:0
},

{
question:"The Sun is a:",
answers:[
"Star",
"Planet",
"Moon",
"Galaxy"
],
correct:0
}

];



let currentQuestion=0;

let score=0;

let streak=0;



const questionText =
document.getElementById(
"questionText"
);


const answerContainer =
document.getElementById(
"answerContainer"
);


const questionNumber =
document.getElementById(
"questionNumber"
);


const scoreDisplay =
document.getElementById(
"score"
);


const streakDisplay =
document.getElementById(
"streak"
);


const progressFill =
document.getElementById(
"progressFill"
);



function loadQuestion(){


    if(!questionText)
    return;


    let q =
    questions[currentQuestion];


    questionText.innerHTML =
    q.question;


    answerContainer.innerHTML="";



    q.answers.forEach(
    (answer,index)=>{


        let button =
        document.createElement(
        "button"
        );


        button.className =
        "answerButton";


        button.innerHTML =
        answer;


        button.onclick=()=>{


            checkAnswer(
            index,
            button
            );


        };


        answerContainer.appendChild(
        button
        );


    });



    if(questionNumber){

        questionNumber.innerHTML =
        `${currentQuestion+1} / ${questions.length}`;

    }



    if(progressFill){

        progressFill.style.width =
        ((currentQuestion)
        /
        questions.length
        *
        100)
        +"%";

    }



}




function checkAnswer(index,button){


    let correct =
    questions[currentQuestion]
    .correct;



    let buttons =
    document.querySelectorAll(
    ".answerButton"
    );


    buttons.forEach(btn=>{

        btn.disabled=true;

    });



    if(index===correct){


        button.classList.add(
        "correct"
        );


        score++;

        streak++;


        addXP(10);



        if(successSound){

            successSound.currentTime=0;

            successSound.play()
            .catch(()=>{});

        }



    }

    else{


        button.classList.add(
        "wrong"
        );


        streak=0;



        if(wrongSound){

            wrongSound.currentTime=0;

            wrongSound.play()
            .catch(()=>{});

        }



        buttons[correct]
        .classList.add(
        "correct"
        );


    }



    updateQuizStats();



}




function updateQuizStats(){


    if(scoreDisplay){

        scoreDisplay.innerHTML =
        score;

    }


    if(streakDisplay){

        streakDisplay.innerHTML =
        streak;

    }


}




/* ===============================
   NEXT QUESTION
=============================== */


const nextQuestion =
document.getElementById(
"nextQuestion"
);



if(nextQuestion){


nextQuestion.onclick=()=>{


    currentQuestion++;


    if(currentQuestion >= questions.length){


        finishQuiz();


    }

    else{


        loadQuestion();


    }


};


}



/* ===============================
   RESTART QUIZ
=============================== */


const restartQuiz =
document.getElementById(
"restartQuiz"
);



if(restartQuiz){


restartQuiz.onclick=()=>{


    currentQuestion=0;

    score=0;

    streak=0;


    updateQuizStats();


    loadQuestion();


};


}




function finishQuiz(){


    if(score>=8){


        addXP(100);


        showPopup(
        "🏆 Quiz Master Unlocked!"
        );


    }

    else{


        addXP(30);


        showPopup(
        "🎯 Quiz Completed!"
        );


    }



    currentQuestion=0;

    score=0;

    streak=0;


    updateQuizStats();


    loadQuestion();


}



/* ===============================
   EXPERIMENT BUTTONS
=============================== */


document
.querySelectorAll(".experimentButton")
.forEach(button=>{


button.onclick=()=>{


    addXP(15);


    showPopup(
    "🧪 Experiment Completed!"
    );


};


});



/* ===============================
   LESSON BUTTONS
=============================== */


document
.querySelectorAll(".lessonButton")
.forEach(button=>{


button.onclick=()=>{


    addXP(5);


    showPopup(
    "📚 Lesson Started!"
    );


};


});



/* ===============================
   START QUIZ
=============================== */


loadQuestion();



console.log(
"🧪 ScienceVerse JS Part 3 Loaded"
);