/*//////////////////////////////////////////////////////////
//Show Arc of Apple
//////////////////////////////////////////////////////////*/
function Draw2(){

	/*First disable click event on clicker button*/
	stopClicker();

	/*Show and run the progressBar*/
	runProgressBar(time=700*2);

	/*Initiate all arcs but only show the US arc (d.index = 0)*/
	g.append("svg:path")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .transition().duration(700)
	  .attr("d", arc)
	  .attrTween("d", function(d) {
		if(d.index == 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
	  });

	/*Show the tick around the US arc*/
	d3.selectAll("g.group").selectAll("line")
		.transition().delay(700).duration(1000)
		.style("stroke", function(d, i, j) {return j ? 0 : "#000"; });

	/*Add the labels for the %'s at US*/
	d3.selectAll("g.group").selectAll(".tickLabels")
		.transition().delay(700).duration(2000)
		.attr("opacity", function(d, i, j) {return j ? 0 : 1; });

	/*Show the US name*/
	d3.selectAll(".titles")
	  .transition().duration(2000)
	  .attr("opacity", function(d, i) {return d.index ? 0 : 1; });

	/*Switch  text*/
	changeTopText(newText = "First, we will go through a quick tutorial on how to read the chord diagram (please note the example data used here was fabricated).  We start by showing the share of IC transactions in the UK.",
	loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);

	changeBottomText(newText = "",
	loc = 0/2, delayDisappear = 0, delayAppear = 1)	;

};/*Draw2*/
