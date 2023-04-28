import BarChartByDay from "./BarChart/BarChartByDay.js" 
import LineChartByWeek from "./LineChart/LineChartByWeek.js"

function GenerateCharts(dataDay, dataDayHour) {

    BarChartByDay(dataDay)
    LineChartByWeek(dataDayHour)

}

export default GenerateCharts