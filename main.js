import GenerateCharts from "./Charts/GenerateCharts.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js"
import { getDatabase, set, ref, get, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"

const btmAbrir = document.querySelector('#buttonOPEN')
const btmFechar = document.querySelector('#buttonCLOSE')

const firebaseConfig = {
    apiKey: "AIzaSyAJ0YF0CKqSqAT9HmT6X_QYFOVTLCWBeAk",
    authDomain: "detector-presenca.firebaseapp.com",
    databaseURL: "https://detector-presenca-default-rtdb.firebaseio.com",
    projectId: "detector-presenca",
    storageBucket: "detector-presenca.appspot.com",
    messagingSenderId: "559298955522",
    appId: "1:559298955522:web:3a29ccd4e57864e900da1b"
};


const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

let updateData = [];

let data = {
    "27-4": [
        { day: 27, hour: 18, minute: 49, month: 4, second: 30, year: 2023 },
        { day: 27, hour: 18, minute: 49, month: 4, second: 30, year: 2023 }
    ]
};

let totalOfEntrysByDate = {
    "27-4": 2
};

function getData() {
    const reference = ref(database, 'teste/dado');
    onValue(reference, (snapshot) => {
        if (snapshot.exists()) {
            updateData = Object.values(snapshot.val());
            const date = updateData.at(-1).day + "-" + updateData.at(-1).month;
            if (data.hasOwnProperty(date)) {
                data[date].push(updateData.at(-1));
                totalOfEntrysByDate[date]++;
            } else {
                data[date] = updateData.at(-1);
                totalOfEntrysByDate[date] = 1;
            }
            console.log(data);
            console.log(totalOfEntrysByDate);
        }
    });
}

getData();

btmAbrir.addEventListener('click', () => {
    function writeUserData() {
        set(ref(database, 'teste'), {
            botao: 1,
        });
    }
    writeUserData()
})

btmFechar.addEventListener('click', () => {
    function writeUserData() {
        set(ref(database, 'teste'), {
            botao: 0,
        });
    }
    writeUserData()
})

const mockDataWeek = [
    { day: "seg", tot: 20 },
    { day: "ter", tot: 40 },
    { day: "qua", tot: 10 },
    { day: "qui", tot: 60 },
    { day: "sex", tot: 0 },
    { day: "sab", tot: 70 },
    { day: "dom", tot: 50 }
]

const mockDataMonth = [
    { month: "jan", tot: 200 },
    { month: "fev", tot: 400 },
    { month: "mar", tot: 100 },
    { month: "abr", tot: 600 },
    { month: "mai", tot: 20 },
    { month: "jun", tot: 700 },
    { month: "jul", tot: 500 },
    { month: "ago", tot: 100 },
    { month: "set", tot: 200 },
    { month: "out", tot: 300 },
    { month: "nov", tot: 400 },
    { month: "dez", tot: 900 }
]

GenerateCharts(mockDataWeek, mockDataMonth)