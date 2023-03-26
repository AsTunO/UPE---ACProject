function BarChartByWeek(data) {

    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var svg = d3.select("#barChartByWeek")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");


    var x = d3.scaleBand()
        .range([0, width])
        .domain(["seg", "ter", "qua", "qui", "sex", "sab", "dom"])
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 100])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));
    
    // Bars
    svg.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.day))
        .attr("y", d => y(d.tot))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.tot))
        .attr("fill", "#69b3a2")

}

export default BarChartByWeek