/*//////////////////////////////////////////////////////////
//Introduction
///////////////////////////////////////////////////////////*/
function Draw1(){

	/*First disable click event on clicker button*/
	stopClicker();

	/*Show and run the progressBar*/
	runProgressBar(time=700*11);

	changeTopText(newText = "International transactions within a multinational enterprise can be difficult to track with endless rows of data." +
							" Chord diagram is a technique which could help turn abstract data into stunning visualisaiton.",
	loc = 4/2, delayDisappear = 0, delayAppear = 1);

	changeTopText(newText = "Next I will introduce using the chord diagram to represent international transactions. ",
	loc = 8/2, delayDisappear = 7, delayAppear = 8, finalText = true);

	changeBottomText(newText = "The network IC transactions are based on the data provided to me for 2017.",
	loc = 1/2, delayDisappear = 0, delayAppear = 8);

	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(9*700).duration(2000)
		.style("opacity", 0)
		.each("end", function() {d3.selectAll(".arc").remove();});

};/*Draw1*/
