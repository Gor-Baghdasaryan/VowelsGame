let btnSoundVowels = document.getElementById("btnSoundVowels");
let btnPlay = document.getElementById("btnPlay");
let levelData = document.getElementById("levelData");
let btnPreviousLevel = document.getElementById("btnPreviousLevel");
let btnNextLevel = document.getElementById("btnNextLevel");
let inpScoreData = document.getElementById("inpScoreData");
let speaker = new Audio();

const VOWELS_CHARACTER = [
    "i", "y", "ɨ", "ʉ", "ɯ", "u", "ɪ", "ʏ", "ʊ", "e", "ø",
     "ɘ", "ɵ", "ɤ", "o", "e̞", "ø̞", "ə", "ɤ̞", "o̞", "ɛ", "œ",
      "ɜ", "ɞ", "ʌ", "ɔ", "æ", "ɐ", "a", "ɶ", "ä", "ɑ", "ɒ"];
      
// level 1
const VOWELS_CHARACTER_CLOSE = ["i", "y", "ɨ", "ʉ", "ɯ", "u"];
const VOWELS_CHARACTER_NEAR_CLOSE = ["ɪ", "ʏ", "ʊ"];
const VOWELS_CHARACTER_CLOSE_MID = ["e", "ø", "ɘ", "ɵ", "ɤ", "o"];
const VOWELS_CHARACTER_MID = ["e̞", "ø̞", "ə", "ɤ̞", "o̞"];
const VOWELS_CHARACTER_OPEN_MID = ["ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ"];
const VOWELS_CHARACTER_NEAR_OPEN = ["æ", "ɐ"];
const VOWELS_CHARACTER_OPEN = ["a", "ɶ", "ä", "ɑ", "ɒ"];

// level 2
const VOWELS_CHARACTER_a2 = ["a", "ɶ", "ä", "ɑ", "ɒ", "æ", "ɐ", "o", "o̞"];
const VOWELS_CHARACTER_i2 = ["ɪ", "ʏ", "ʊ", "i", "y", "ɯ", "u"];

// level 3
const VOWELS_CHARACTER_a3 = ["a", "ɶ", "ä", "ɑ", "ɒ", "æ", "ɐ", "ø̞", "ə", "y", "ɨ"];
const VOWELS_CHARACTER_i3 = ["ɪ", "ʏ", "ʊ", "i", "ɨ", "ʉ", "ɯ", "u"];

// level 4
const VOWELS_CHARACTER_o4 = ["ɵ", "o", "e", "ə", "o̞", "e̞", "ø̞",];
const VOWELS_CHARACTER_a4 = ["ɵ", "ɤ", "o", "e̞", "ø̞", "ʏ", "ʊ", "ɶ", "ä",];

// level 5
const VOWEL_CHARACTER_aio1 = ["i", "y", "ɨ", "ʉ", "ɯ", "u", "ɪ", "ʏ", "e", "ɘ", "ɵ", "ɤ", "o", "ɐ"];
const VOWEL_CHARACTER_aio2 = ["e̞", "ø̞", "ə", "ɤ̞", "œ", "ɞ", "ʌ", "ɔ", "a", "ɶ", "ä", "ɑ", "ɒ"];

const VOWELS_ALL = [
    VOWELS_CHARACTER_CLOSE,
    VOWELS_CHARACTER_NEAR_CLOSE,
    VOWELS_CHARACTER_CLOSE_MID,
    VOWELS_CHARACTER_MID,
    VOWELS_CHARACTER_OPEN_MID,
    VOWELS_CHARACTER_NEAR_OPEN,
    VOWELS_CHARACTER_OPEN,
    VOWELS_CHARACTER_a2,
    VOWELS_CHARACTER_i2,
    VOWELS_CHARACTER_a3,
    VOWELS_CHARACTER_i3,
    VOWELS_CHARACTER_o4,
    VOWELS_CHARACTER_a4,
    VOWEL_CHARACTER_aio1,
    VOWEL_CHARACTER_aio2,];

const VOWELS_FILTER = [
    VOWELS_CHARACTER_CLOSE,
    VOWELS_CHARACTER_NEAR_CLOSE,
    VOWELS_CHARACTER_CLOSE_MID,
    VOWELS_CHARACTER_MID,
    VOWELS_CHARACTER_OPEN_MID,
    VOWELS_CHARACTER_NEAR_OPEN,
    VOWELS_CHARACTER_OPEN
];

let btnStateList = document.querySelectorAll("#divButtonState button");
let vowelsFilter;

function filter() {
    vowelsFilter = [];

    for (let state of btnStateList) {
        if (state.className == "checked") {
            vowelsFilter.push(VOWELS_FILTER[state.value]);
        }
    }

    return vowelsFilter;
}

// let btnEstablish = document.getElementById("btnEstablish");

let btnList = document.querySelectorAll("#bodyContainer button[class='btn-icon']");
let audio = new Audio();
let score = 0;
let level = 1;

btnSoundVowels.onclick = function () {
    speaker.play();
};

// btnEstablish.onclick = function () {
//     let random = Math.floor(Math.random() * VOWELS_CHARACTER.length);
//     let src = `audio/Vowels/${VOWELS_CHARACTER[random]}.mp3`;
    
//     soundVowels.src = src;
//     soundVowels.vowelName = VOWELS_CHARACTER[random];
// };

btnPlay.onclick = init;

function init() {

    let arrFilter = filter();

    let arrTempVowels;

    for (let char of btnList) {
        char.style.backgroundColor = "white";
    }

    arrTempVowels = 0 == arrFilter.length ? VOWELS_ALL : arrFilter;

    let num = arrTempVowels.length;

    if (0 == arrFilter.length) {
        switch (level) {
            case 1:
                num -= 8;
                break;
            case 2:
                num -= 6;
                break;
            case 3:
                num -= 4;
                break;
            case 4: 
                num -= 2;
                break;
        }
    }

    let random0 = Math.random();
    let random1 = Math.floor(num * random0);
    let random2 = Math.floor(arrTempVowels[random1].length * random0);

    for (let i = 0; i < btnList.length; i++) {
        if (arrTempVowels[random1].includes(btnList[i].innerText)) {
            btnList[i].style.backgroundColor = "lightgreen";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        }
    }

    let src = `audio/Vowels/${arrTempVowels[random1][random2]}.mp3`;

    console.log(src, arrTempVowels[random1][random2]);

    propSpeaker(src, arrTempVowels[random1][random2], arrTempVowels[random1].filter(simbol => simbol != arrTempVowels[random1][random2]));
    
    // speaker.src = src;
    // speaker.vowelName = arrTempVowels[random1][random2];
    // speaker.randomCharsArr = arrTempVowels[random1].filter(simbol => simbol != arrTempVowels[random1][random2]);

    speaker.play();
};

function propSpeaker (sourse, vowel, randomCharArr) {
    speaker.src = sourse;
    speaker.vowelName = vowel;
    speaker.randomCharsArr = randomCharArr;
}

for (let i = 0; i < VOWELS_CHARACTER.length; i++) {
    btnList[i].addEventListener("click", function () {
        audio.src = `audio/Vowels/${VOWELS_CHARACTER[i]}.mp3`;
        audio.play();

        if (this.innerText == speaker.vowelName) {
            score++;

            if (15 == score) {
                score = 0;
                level++;
            }

            btnPlay.click();
        } else if (speaker.randomCharsArr.includes(this.innerText)) {
            score = 0;

            // arrWrongAnswer.push();

            btnPlay.click();
        }

        inpScoreData.value = score;
        levelData.innerText = `Level ${level}`;
        // scoreData.innerText = `Score ${score}`;
    })
}

btnPreviousLevel.onclick = function () {
    level = level == 1 ? 5 : --level;
    levelData.innerText = `Level ${level}`;
};

btnNextLevel.onclick = function () {
    level = level == 5 ? 1 : ++level;
    levelData.innerText = `Level ${level}`;
};

for (let state of document.querySelectorAll("#divButtonState button")) {
    state.addEventListener("click", function () {

        this.className = this.className == "checked" ? "unchecked" : "checked";

        btnPlay.click();
    })
}

for (let i = 0; i < VOWELS_CHARACTER.length; i++) {
    btnList[i].innerText = VOWELS_CHARACTER[i];
}