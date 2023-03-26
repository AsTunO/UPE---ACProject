import BarChartByWeek from "./BarsCharts/BarChartByWeek.js" 
import BarChartByMonth from "./BarsCharts/BarChartByMonth.js"

function GenerateCharts(dataWeek, dataMonth) {
    BarChartByWeek(dataWeek)
    BarChartByMonth(dataMonth)
}

export default GenerateCharts