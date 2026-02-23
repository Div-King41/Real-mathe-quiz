
let playerName = "";

    // Firebase setup
    import { initializeApp }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

    import { getFirestore, collection, addDoc }
    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

    const firebaseConfig = {
    apiKey: "AIzaSyAbtnfpt--OjuAd_seWQFevnfHIm8b3J_A",
    authDomain: "mathe-quiz-b7740.firebaseapp.com",
    projectId: "mathe-quiz-b7740",
    storageBucket: "mathe-quiz-b7740.firebasestorage.app",
    messagingSenderId: "46790144194",
    appId: "1:46790144194:web:d4f94ee11eed6d2e7b4b5b",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function saveResult(score, total, playerName) {
    await addDoc(collection(db, "results"), {
        name: playerName,
        score: score,
        total: total,
        date: new Date()
    });
    }


        const sections = {
            dreisatz: [
                { text:"Ein Auto verbraucht auf 100 Kilometern 8 Liter Benzin. Wie viel Benzin benötigt das Auto, um 250 Kilometer zu fahren?", answer:20, options: [20, 30, 26, 28] ,explanation:"" },
                { text:"Eine Maschine benötigt 12 Minuten, um 30 Schrauben zu produzieren. Wie lange benötigt die Maschine, um 75 Schrauben herzustellen?", answer:30, options: [21, 30, 46, 58] ,explanation:"" },
                { text:"Ein Bäcker benötigt 2 Stunden, um 150 Brötchen zu backen. Wie viele Brötchen kann der Bäcker in 5 Stunden backen?", answer:375, options: [120, 630, 375, 428] , explanation:"" },
                { text:"Ein Gärtner benötigt für das Pflanzen von 80 Bäumen 10 Stunden. Wie lange benötigt er, um 200 Bäume zu pflanzen?", answer:25, options: [25, 30, 29, 28] ,explanation:"" },
                { text:"Ein Zug fährt 300 Kilometer in 4 Stunden. Wie weit fährt der Zug in 6 Stunden?", answer:450, options: [420, 530, 326, 450] ,explanation:"1." },
            ],

        Fragen1: [
            { text:"3 + 5", answer:8, options: [12,4,8,10], explanation:"." },
            { text:"6 + 9", answer:15, options: [20,14,16,15], explanation:"." },
            { text:"25 + 25", answer:50, options: [46, 50,80,30], explanation:"." },
            { text:"9 - 7", answer:2,  options: [5, 4,8,2], explanation:"." },
            { text:"26 - 17", answer:9,  options: [6, 3,6,9],explanation:"." },
            { text:"81 - 79", answer:2,  options: [2, 5,12,1], explanation:"." },
            { text:"9 . 7", answer:63,  options: [60, 63,73,56], explanation:"." },
            { text:"16 + 17", answer:33,  options: [23, 33,44,39], explanation:"." },
            { text:"3 . 32", answer:36,  options: [45, 36,29,56], explanation:"." },
            { text:"9 : 3", answer:3,  options: [4, 12,11,3], explanation:"." },
            { text:"64 : 8", answer:8,  options: [14, 10,8,9], explanation:"." },
            { text:"57 + 72", answer:129,  options: [145, 250,320,129], explanation:"." },
            { text:"187 - 89", answer:98,  options: [85, 90,98,60], explanation:"." },
            { text:"99 . 5", answer:495,  options: [445, 495,320,230], explanation:"." },
            { text:"27 . 3", answer:81,  options: [85, 80,81,10], explanation:"." },
            { text:"72 : 9", answer:8,  options: [8, 7,2,10], explanation:"." },
            { text:"96 - 77", answer:19, options: [18, 19,20,17], explanation:"." },
            { text:"47 + 49", answer:96,  options: [95, 93,96,87], explanation:"." },
            { text:"13 + 15", answer:195,  options: [155, 195,180,155], explanation:"." },
            { text:"72 : 6", answer:12,  options: [11, 12,18,16], explanation:"." },
            { text:"99 + 99", answer:198,  options: [188, 198,173,130], explanation:"." },
            { text:"112 - 27", answer:85,  options: [85, 65,92,67], explanation:"." },
            { text:"85 : 5", answer:17,  options: [16, 17,20,13], explanation:"." },
            { text:"78 : 13", answer:6,  options: [5, 6,9,8], explanation:"." },
            { text:"92 : 23", answer:4,  options: [4, 5,2,3], explanation:"." },
        ],
        Fragen2: [
            { text:"7 + 2", answer:9,  options: [8, 7 , 9 , 10] ,explanation:"." },
            { text:"8 + 7 ", answer:15,  options: [15, 16, 10, 14] ,explanation:"." },
            { text:"35 + 15", answer:50,  options: [40, 56, 50 ,30] ,explanation:"." },
            { text:"7 - 5 ", answer:2,  options: [1, 2, 6, 9] ,explanation:"." },
            { text:"28 - 19", answer:9,  options: [5, 9 ,15, 12,] ,explanation:"." },
            { text:"71 - 68", answer:3,  options: [3, 9, 10, 19 ] ,explanation:"." },
            { text:"7 . 5", answer:35,  options: [23, 56, 35, 10] ,explanation:"." },
            { text:"15 + 19", answer:34,  options: [34, 67, 89, 20] ,explanation:"." },
            { text:"4 . 11", answer:44,  options: [42, 44, 45, 50] ,explanation:"." },
            { text:"6 : 3", answer:2,  options: [2, 6, 8, 10] ,explanation:"." },
            { text:"49 : 7", answer:7,  options: [8, 9 , 7, 4] ,explanation:"." },
            { text:"87 + 32", answer:119,  options: [122, 119, 130, 114] ,explanation:"." },
            { text:"147 - 59", answer:88,  options: [78, 30, 20, 88] ,explanation:"." },
            { text:"88 . 7", answer:616,  options: [616, 600, 717, 500] ,explanation:"." },
            { text:"26 . 3", answer:78,  options: [70, 68, 48, 78] ,explanation:"." },
            { text:"81 . 9", answer:9,  options: [8, 9 , 3, 1] ,explanation:"." },
            { text:"95 -  66", answer:29,  options: [29, 53, 43, 20] ,explanation:"." },
            { text:"43 + 48", answer:91,  options: [89, 90, 91, 81] ,explanation:"." },
            { text:"17 . 13", answer:221,  options: [221, 332, 345, 200] ,explanation:"." },
            { text:"96 : 8", answer:12,  options: [18, 12, 13, 21] ,explanation:"." },
            { text:"88 + 88", answer:176,  options: [178, 139, 176, 222] ,explanation:"." },
            { text:"112 - 27", answer:85,  options: [45, 34, 67, 85] ,explanation:"." },
            { text:"96 : 6", answer:16,  options: [12, 15, 26, 16] ,explanation:"." },
            { text:"85 : 17", answer:5,  options: [5, 6, 7, 9] ,explanation:"." },
            { text:"84 : 21", answer:4,  options: [4, 2, 5, 6] ,explanation:"." },
        ],

        Fragen3: [
            { text:"16 + 17", answer:33,  options: [33, 22, 44, 55] ,explanation:"." },
            { text:"325 + 453", answer:778,  options: [225, 334, 556, 778] ,explanation:"." },
            { text:"27 + 55 + 61", answer:143,  options: [143, 154, 567, 785] ,explanation:"." },
            { text:"888 - 99", answer:789,  options: [534, 789, 243, 743] ,explanation:"." },
            { text:"187 - 89", answer:98,  options: [98, 54, 76, 87] ,explanation:"." },
            { text:"7 - 9", answer:-2,  options: [-2, -4, -5, 2] ,explanation:"." },
            { text:"57 - 75", answer:4275,  options: [3453, 6433, 4322, 4275] ,explanation:"." },
            { text:"987 + 789", answer:1776,  options: [1234, 4564, 6532, 1776] ,explanation:"." },
            { text:"17 . 1000", answer:17000,  options: [17000, 35323, 34567, 12000] ,explanation:"." },
            { text:"770 : 70", answer:11,  options: [12, 11, 13, 14] ,explanation:"." },
            { text:"396 : 12", answer:33,  options: [44, 34, 50, 33] ,explanation:"." },
            { text:"2538 + 1298 + 8341", answer:12177,  options: [12177, 23423, 12333, 18965] ,explanation:"." },
            { text:"14003 - 2007", answer:11996,  options: [11996, 22567, 33456, 22365] ,explanation:"." },
            { text:"295 . 974", answer:287330,  options: [287330, 234567, 345122, 112233] ,explanation:"." },
            { text:"5089 . 378", answer:1923642,  options: [1923642, 1523642, 4925642, 6923644] ,explanation:"." },
            { text:"21830 : 74", answer:295,  options: [295, 456, 234, 122] ,explanation:"." },
            { text:"9538 - 1297 - 8241", answer:0,  options: [1, -1, 0, -3] ,explanation:"." },
            { text:"999 + 888 + 777", answer:2664,  options: [2664, 3224, 1123, 9822] ,explanation:"." },
            { text:"600 . 300 . 40", answer:7200000,  options: [7200000, 5400000, 2200000, 8300000] ,explanation:"." },
            { text:"8 : 5", answer:1.6,  options: [1.5, 1.4, 1.6, 1.9] ,explanation:"." },
            { text:"-9 + 18", answer:9,  options: [2, 4, 6, 9] ,explanation:"." },
            { text:"287 - 634", answer:-347,  options: [-345, -564, -347, -323] ,explanation:"." },
            { text:"8 : 16", answer:0.5,  options: [0.5, 0.4, 0.3, 0.2] ,explanation:"." },
            { text:"542 : 320", answer:1.69375,  options: [1.69375, 1.23454, 1.32789, 1.11000] ,explanation:"." },
            { text:"15 : 16", answer:0.9375,  options: [0.1234, 0.4567, 0.6783, 0.9375] ,explanation:"." },
        ],

        Fragen4: [
            { text:"15 + 19", answer:34,  options: [34, 56, 67, 54] ,explanation:"." },
            { text:"525 + 353", answer:878,  options: [878, 678, 789, 223] ,explanation:"." },
            { text:"21 + 57 + 69", answer:147,  options: [456, 789, 100, 147] ,explanation:"." },
            { text:"777 - 88", answer:689,  options: [765, 456, 689, 683] ,explanation:"." },
            { text:"188 - 89", answer:99,  options: [99, 88, 44, 55] ,explanation:"." },
            { text:"7 - 8", answer:-1,  options: [-1, -3, -4, -5] ,explanation:"." },
            { text:"87 . 45 ", answer:3915,  options: [3456, 7689, 9078, 3915] ,explanation:"." },
            { text:"957 + 769", answer:1726,  options: [1726, 1789, 1734, 1790] ,explanation:"." },
            { text:"15 . 1000", answer:15000,  options: [15000, 12000, 14000, 17000] ,explanation:"." },
            { text:"880 : 80", answer:11,  options: [11, 12, 15, 16] ,explanation:"." },
            { text:"636 : 12", answer:53,  options: [53, 54, 56, 57, ] ,explanation:"." },
            { text:"1578 + 2258 + 7391", answer:11227,  options: [11227, 11223, 12112, 4455] ,explanation:"." },
            { text:"15002 - 3007", answer:11995,  options: [11995, 11223, 11445, 55111] ,explanation:"." },
            { text:"395 . 754", answer:297830,  options: [397830, 297830, 497830, 597830] ,explanation:"." },
            { text:"3089 . 397", answer:1226333,  options: [3226333, 5226333, 6226333, 1226333] ,explanation:"." },
            { text:"28490 : 74", answer:385,  options: [685, 485, 385, 985] ,explanation:"." },
            { text:"9519 - 1277 - 8241", answer:1,  options: [1, 2, 5, 6] ,explanation:"." },
            { text:"888 + 777 + 666", answer:2331,  options: [5331, 2331, 3331, 9331] ,explanation:"." },
            { text:"300 . 400 . 40", answer:4800000,  options: [1800000, 4800000, 7800000, 5800000] ,explanation:"." },
            { text:"6 : 5", answer:1.2,  options: [1.3, 1.2, 1.4, 1.5] ,explanation:"." },
            { text:"-7 + 14", answer:7,  options: [7, 9, 8, 1] ,explanation:"." },
            { text:"267 - 674", answer:-407,  options: [-407, -309, -409, -456] ,explanation:"." },
            { text:"7 : 14", answer:0.5,  options: [0.5, 0.2, 0.4, 0.3] ,explanation:"." },
            { text:"622 : 320", answer:1.94375,  options: [1.94375, 1.64375, 1.54375, 1.34375] ,explanation:"." },
            { text:"13 : 16", answer:0.8125,  options: [0.8025, 0.8125, 0.8825, 0.4125] ,explanation:"." },
        ],

        Fragen5: [
            { text:"0,47 + 120", answer:120.47,  options: [420.47, 120.47, 320.47, 520.47] ,explanation:"." },
            { text:"1,79 + 0,54", answer:2.33,  options: [1.33, 3.33, 5.33, 2.33] ,explanation:"." },
            { text:"3870 + 68 + 17059", answer:20997,  options: [10997, 20997, 60997, 40997] ,explanation:"." },
            { text:"987654 - 98756", answer:888889,  options: [688889, 788889, 888889, 988889] ,explanation:"." },
            { text:"7036 - 1856,87 - 2408 ", answer:2771.13,  options: [4771.13, 3771.13, 2771.13, 5771.13] ,explanation:"." },
            { text:"197 - 0,99", answer:196.01,  options: [396.01, 296.01, 796.01, 196.01] ,explanation:"." },
            { text:"284 . 0,5", answer:142,  options: [442, 242, 142, 842] ,explanation:"." },
            { text:"222 + 0,345 + 222289", answer:222511.345,  options: [422511.345, 122511.345, 522511.345, 222511.345] ,explanation:"." },
            { text:"0,254 . 0,345", answer:0.08763,  options: [0.18763, 0.38763, 0.68763, 0.08763] ,explanation:"." },
            { text:"245 : 0,245", answer:1000,  options: [2000, 4000, 3000, 1000] ,explanation:"." },
            { text:"15722,872 : 44,44", answer:353.8,  options: [453.8, 453.8, 853.8, 353.8] ,explanation:"." },
            { text:"12800 + 14000000", answer:1412800,  options: [2412800, 4412800, 5412800, 1412800] ,explanation:"." },
            { text:"1400000 - 7000000", answer:7000000,  options: [6000000, 3000000, 7000000, 8000000] ,explanation:"." },
            { text:"12,8 Tausend . 1,4 Millionen", answer:1792000000,  options: [6792000000, 2792000000, 1792000000, 1892000000] ,explanation:"." },
            { text:"1,4 Millionen . 0,01 Tausend", answer:14000000,  options: [15000000, 17000000, 14000000, 18000000] ,explanation:"." },
            { text:"18954,04 : 487", answer:38.92,  options: [48.92, 28.92, 38.92, 98.92] ,explanation:"." },
            { text:"8 Millionen - 555 Tausend", answer:7445000,  options: [6445000, 1445000, 7445000, 9445000] ,explanation:"." },
            { text:"3726534 + 938273 + 3928837", answer:8593644,  options: [4593644, 2593644, 8593644, 1593644] ,explanation:"." },
            { text:"99837 . 0", answer:0,  options: [0, -1, -3, -2] ,explanation:"." },
            { text:"1200 : -60", answer:-20,  options: [-30, -20, -40, -50] ,explanation:"." },
            { text:"0,0456 + 171819,02 + 99,897", answer:171918.9626,  options: [271918.9626, 571918.9626, 871918.9626, 171918.9626] ,explanation:"." },
            { text:"865432,1 - 76543,21 - 654,321", answer:788234.569,  options: [758234.569, 738234.569, 788234.569, 778234.569] ,explanation:"." },
            { text:"12 : 0", answer:12,  options: [12, 13, 14, 19] ,explanation:"." },
            { text:"12,6 Tausend : 1,2 Millionen", answer:0.1505,  options: [0.4, 0.2505, 0.6505, 0.1505] ,explanation:"." },
            { text:"447,642 : 1,248", answer:358.6875,  options: [258.6875, 158.6875, 658.6875, 358.6875] ,explanation:"." },
        ],

        Fragen6: [
            { text:"0,37 + 130", answer:130.37,  options: [230.37, 430.37, 330.37, 130.37] ,explanation:"." },
            { text:"1,89 + 0,34", answer:2.23,  options: [3.23, 5.23, 9.23, 2.23] ,explanation:"." },
            { text:"3970 + 78 + 17052", answer:21100,  options: [11100, 71100, 21100, 81100] ,explanation:"." },
            { text:"797654 - 87765", answer:709889,  options: [409889, 609889, 709889, 809889] ,explanation:"." },
            { text:"7056 - 1656.85 - 2408", answer:2991.15,  options: [1991.15, 5991.15, 2991.15, 8991.15] ,explanation:"." },
            { text:"179 - 0,99", answer:178.01,  options: [278.01, 778.01, 578.01, 178.01] ,explanation:"." },
            { text:"384 .0,5", answer:192,  options: [592, 292, 192, 892] ,explanation:"." },
            { text:"444 + 0.245 + 222198", answer:222642.245,  options: [322642.245, 522642.245, 222642.245, 122642.245] ,explanation:"." },
            { text:"0,245 . 0,254", answer:0.06223,  options: [0.16223, 0.56223, 0.06223, 0.66223] ,explanation:"." },
            { text:"645 : 0,645", answer:1000,  options: [2000, 1000, 4000, 6000] ,explanation:"." },
            { text:"24250.908 : 66.66", answer:363.8,  options: [263.8, 663.8, 363.8, 463.8] ,explanation:"." },
            { text:"12600 + 1600000", answer:1612600,  options: [2612600, 5612600, 1612600, 6612600] ,explanation:"." },
            { text:"16000000 + 8000000", answer:8000000,  options: [5000000, 1000000, 8000000, 7000000] ,explanation:"." },
            { text:"12,6 Tausend . 1,6 Millionen ", answer:20160000000,  options: [10160000000, 40160000000, 80160000000, 20160000000] ,explanation:"." },
            { text:"1,6 Millionen . 0,01 Tausend", answer:16000000,  options: [26000000, 56000000, 16000000, 66000000] ,explanation:"." },
            { text:"12822,04 : 362", answer:35.42,  options: [55.42, 35.42, 25.42, 65.42] ,explanation:"." },
            { text:"9 Millionen - 555 Tausend", answer:8445000,  options: [8245000, 8545000, 8745000, 8445000] ,explanation:"." },
            { text:"3723554 + 978223 + 3928837", answer:8630614,  options: [4630614, 2630614, 6630614, 8630614] ,explanation:"." },
            { text:"729990 . 0", answer:0,  options: [0, -0, -1, -4] ,explanation:"." },
            { text:"3200 : -80", answer:-40,  options: [-10, -40, -30, -50] ,explanation:"." },
            { text:"0,0456 + 172819,02 + 99,987", answer:172919.0526,  options: [372919.0526, 572919.0526, 872919.0526, 172919.0526] ,explanation:"." },
            { text:"856432,1 - 79143,21 - 854,321", answer:779434.569,  options: [579434.569, 679434.569, 179434.569, 779434.569] ,explanation:"." },
            { text:"24 : 0", answer:24,  options: [23, 45, 24, 34] ,explanation:"." },
            { text:"25,2 Tausend : 2,4 Millionen", answer:0.0105,  options: [0.1105, 0.3105, 0.6105, 0.0105] ,explanation:"." },
            { text:"447,798 : 1,248", answer:358.8125,  options: [558.8125, 458.8125, 858.8125, 358.8125] ,explanation:"." },
        ],

        };

    let currentSection = [];

let current = 0;

let score = 0;

window.startSection = function (sectionName)  {

    currentSection = sections[sectionName];

    current = 0;

    score = 0;

    document.getElementById("section-title").textContent =

        "Bitte berechnen Sie die folgende Aufgaben ohne Taschenrechner";

    document.getElementById("question-container").style.display = "block";

    document.getElementById("restartBtn").style.display = "none";

    document.getElementById("score-box").textContent = "";

    document.getElementById("options").style.display = "block";

    showQuestion();

}

function showQuestion() {

    let q = currentSection[current];

    document.getElementById("question").textContent = q.text;

    let optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach(opt => {

        let btn = document.createElement("button");

        btn.textContent = opt;

        btn.onclick = () => selectAnswer(opt);

        optionsDiv.appendChild(btn);

    });

    document.getElementById("progress").textContent =

        `Frage ${current + 1} von ${currentSection.length}`;

}

function selectAnswer(selectedOption) {

    let q = currentSection[current];

    // Compare as strings to support fractions & decimals

    if (String(selectedOption) === String(q.answer)) {

        score++;

    }

    current++;

    if (current < currentSection.length) {

        showQuestion();

    } else {

        endSection();

    }

}

async function endSection() {

    document.getElementById("question-container").style.display = "none";

    document.getElementById("score-box").textContent =

        `Abschnitt beendet! Dein Ergebnis: ${score} / ${currentSection.length}`;

    document.getElementById("restartBtn").style.display = "block";
    document.getElementById("options").style.display = "none";
    document.getElementById("score-box").style.color = "green";

    await saveResult(score, currentSection.length, playerName);

}

window.restartTest = function ()  {

    document.getElementById("question-container").style.display = "none";

    document.getElementById("restartBtn").style.display = "none";

    document.getElementById("section-title").textContent = "";

    document.getElementById("progress").textContent = "";

    document.getElementById("score-box").textContent = "";

}

    const modal = document.getElementById("nameModal");
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", () => {

    const input = document.getElementById("playerNameInput").value.trim();

    if (input === "") {
        alert("Bitte Namen eingeben!");
        return;
    }

    playerName = input;

    // store locally so user doesn't retype
    localStorage.setItem("playerName", playerName);

    modal.style.display = "none";
    });

        window.addEventListener("load", () => {

    const savedName = sessionStorage.getItem("playerName");

    if (savedName) {
        playerName = savedName;
        modal.style.display = "none";
    }
    }); 


