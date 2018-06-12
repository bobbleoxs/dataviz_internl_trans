/*//////////////////////////////////////////////////////////////////////////*/
// US net gain from SG
/*//////////////////////////////////////////////////////////////////////////*/
function Draw8(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);

	/*US and SG text*/
	changeTopText(newText = "Since the chord is much wider at the US side, the US has taken a lot more income than Singapore taken from the US",
		loc = 5, delayDisappear = 0, delayAppear = 1);
	changeTopText(newText = "Therefore, the chord is the color of the US blue, since the US has the net gain.",
		loc = 5, delayDisappear = 9, delayAppear = 10, finalText = true);

	/*Stop the colour changing on the SG side*/
	d3.selectAll(".SGToUSArc")
		.transition().duration(700)
		.attr("fill", colors[4])
		.style("stroke", colors[4]);

};/*Draw8*/
