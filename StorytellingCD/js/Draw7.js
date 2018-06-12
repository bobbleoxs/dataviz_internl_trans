/*//////////////////////////////////////////////////////////////////////////*/
//SG side of US-SG chord
/*//////////////////////////////////////////////////////////////////////////*/
function Draw7(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);

	/*US and Singapore text*/
	changeTopText(newText = "At the Singapore side, the arc is much thinner, only spanning 1.2%",
		loc = 4, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "These 1.2% is coming into Singapore, by following the chord we can see that they came from the US",
		loc = 4, delayDisappear = 9, delayAppear = 10, finalText = true);

	/*Stop the color changing on the US side*/
	d3.selectAll(".USToSGArc")
		.transition().duration(700)
		.attr("fill", colors[5])
		.style("stroke", colors[5]);

	/*Repeatedly let an arc change colour*/
	repeat();
	function repeat() {
		d3.selectAll(".SGToUSArc")
			.transition().duration(700)
			.attr("fill", "#99D2E9")
			.style('stroke', "#99D2E9")
			.transition().duration(700)
			.attr("fill", colors[4])
			.style("stroke", colors[4])
			.each("end", repeat)
			;
	};

};/*Draw7*/
