/*//////////////////////////////////////////////////////////
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();

	/*Show and run the progressBar*/
	runProgressBar(time=500*11);

	changeTopText(newText = "International transactions within a multinational enterprise can be difficult to track with endless rows of data." +
							" Chord diagram is a technique which could help turn abstract data into stunning visualisaiton. ",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "Next I will introduce using the chord diagram to represent international transactions. ",
	loc = 8/2, delayDisappear = 5, delayAppear = 6, finalText = true);

	changeBottomText(newText = "The network IC transactions are based on simulated data for illustration.",
	loc = 1/2, delayDisappear = 0, delayAppear = 7);

	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(9*500).duration(1000)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});

};/*Draw1*/
