function LineChartByWeek(data) {


    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var svg2 = d3.select("#lineChartByWeek")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Draw X domain
    const x = d3.scaleBand()
        .domain(["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"])
        .range([0, width])
        .padding(1);

    svg2.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([8, 22])
        .range([height, 0]);

    svg2.append("g")
        .call(d3.axisLeft(y));

    // Draw Dots
    svg2.append("g")
        .selectAll("dot")
        .data(data)
        .join("circle")
        .attr("cx", d => x(d.day))
        .attr("cy", d => y(d.hour))
        .attr("r", 5)
        .attr("fill", "#69b3a2")

    // Draw Lines
    svg2.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 2)
        .attr("d", d3.line()
            .x(d => x(d.day))
            .y(d => y(d.hour)))
}

export default LineChartByWeek;
