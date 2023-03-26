import GenerateCharts from "./Charts/GenerateCharts.js"



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