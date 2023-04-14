import BarChartByDay from "./BarChart/BarChartByDay.js" 
import LineChartByWeek from "./LineChart/LineChartByWeek.js"

function GenerateCharts(dataDay, dataWeek) {
    BarChartByDay(dataDay)
    LineChartByWeek(dataWeek)
}

export default GenerateCharts