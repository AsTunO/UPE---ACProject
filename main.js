import GenerateCharts from "./Charts/GenerateCharts.js"

const mockDataDay = [
    { day: "seg", tot: 20 },
    { day: "ter", tot: 40 },
    { day: "qua", tot: 10 },
    { day: "qui", tot: 60 },
    { day: "sex", tot: 0 },
    { day: "sab", tot: 70 },
    { day: "dom", tot: 50 }
]

const mockDataWeek = [
    { day: "seg", tot: 8 },
    { day: "ter", tot: 10 },
    { day: "qua", tot: 13 },
    { day: "qui", tot: 17 },
    { day: "sex", tot: 20 }
]


GenerateCharts(mockDataDay, mockDataWeek)