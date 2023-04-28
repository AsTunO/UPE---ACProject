import GenerateCharts from "./Charts/GenerateCharts.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js"
import { getDatabase, set, ref, get, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"

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

let data = []

let totalOfEntrysByDate = {};

function getData() {

    const reference = ref(database, 'teste/dado');
    onValue(reference, (snapshot) => {
        if (snapshot.exists()) {
            updateData = Object.values(snapshot.val());
            const date = updateData.at(-1).day + "-" + updateData.at(-1).month + "-" + updateData.at(-1).year;
            if (data.hasOwnProperty(date)) {
                data.push(updateData.at(-1));
                totalOfEntrysByDate[date]++;
            } else {
                data[date] = updateData.at(-1);
                totalOfEntrysByDate[date] = 1;
            }

            let dataWeek = []
            let dataWeekHour = []

            for (const key in totalOfEntrysByDate) {
                const lastData = key;
                const dateParts = lastData.split("-"); // Divide a string em partes separadas por "-"
                const dateObj = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // Cria um objeto Date a partir das partes da data
                const newData = `${dateObj.getDate()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getFullYear()}`; // Formata a data em "dd-mm-yyyy"

                const dateStr = newData;
                const [day, month, year] = dateStr.split("-"); // Divide a string em partes separadas por "-"
                const date = new Date(year, month - 1, day); // Cria um objeto Date a partir das partes da data
                const weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
                const dayOfWeek = weekdays[date.getDay()];

                dataWeek.push({
                    day: dayOfWeek,
                    tot: totalOfEntrysByDate[key]
                });
            }

            for (const key in totalOfEntrysByDate) {
                const lastData = key;
                const dateParts = lastData.split("-"); // Divide a string em partes separadas por "-"
                const dateObj = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // Cria um objeto Date a partir das partes da data
                const newData = `${dateObj.getDate()}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getFullYear()}`; // Formata a data em "dd-mm-yyyy"

                const dateStr = newData;
                const [day, month, year] = dateStr.split("-"); // Divide a string em partes separadas por "-"
                const date = new Date(year, month - 1, day); // Cria um objeto Date a partir das partes da data
                const weekdays = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
                const dayOfWeek = weekdays[date.getDay()];

                let dataAtual = new Date();
                let horaAtual = dataAtual.getHours();

                let hours = []

                hours.push(horaAtual)

                const count = {};

                const mostRepeated = hours.reduce((acc, curr) => {
                    if (typeof count[curr] === "undefined") {
                        count[curr] = 1;
                    } else {
                        count[curr]++;
                    }

                    if (count[curr] > acc.count) {
                        return { value: curr, count: count[curr] };
                    } else {
                        return acc;
                    }
                }, { value: null, count: -1 }).value;

                dataWeekHour.push({
                    day: dayOfWeek,
                    hour: mostRepeated
                });
            }

            GenerateCharts(dataWeek, dataWeekHour)
        }
    });
}

getData()