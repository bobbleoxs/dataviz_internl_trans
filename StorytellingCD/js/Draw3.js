/*///////////////////////////////////////////////////////////
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [0,1,2,10,12,15,25,30,32,37,42];
	/*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));

   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		if(d.index != 0) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
    });

  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	/*China*/
	changeTopText(newText = "China takes up about 5% of the IC transactions",
		loc = 6/2, delayDisappear = 0, delayAppear = arcDelay[2]);
	/*Germany*/
	changeTopText(newText = "Germany has more than 5%",
		loc = 6/2, delayDisappear = arcDelay[3], delayAppear = arcDelay[4]);
	/*US*/
	changeTopText(newText = "US has the biggest share by far",
		loc = 3/2, delayDisappear = (arcDelay[5]-1), delayAppear = arcDelay[5]);
	/*France*/
	changeTopText(newText = "France has slightly more than 4%",
		loc = 4/2, delayDisappear = arcDelay[6], delayAppear = (arcDelay[7]-1));
	/*100%*/
	changeTopText(newText = "Together that sums up to 100%",
		loc = 1/2, delayDisappear = (arcDelay[8]-1), delayAppear = arcDelay[8]);
	/*Chord intro*/
	changeTopText(newText = "This circle shows how the IC transactions are currently divided between the countries",
		loc = 8/2, delayDisappear = (arcDelay[9]-1), delayAppear = arcDelay[9], finalText = true);

	/*Change the text of the bottom section inside the circle accordingly*/
	/*Canada*/
	changeBottomText(newText = "Canada has a smaller share of just over 3%",
		loc = -2/2, delayDisappear = 0, delayAppear = arcDelay[2]);
	/*Singapore*/
	changeBottomText(newText = "Being the APAC hub, Singapore sees a fair share of IC transactions at more than 15%",
		loc = -1/2, delayDisappear = arcDelay[3], delayAppear = arcDelay[4]);
	/*Mexico*/
	changeBottomText(newText = "Finally the Netherlands has around 10%.",
		loc = -1/2, delayDisappear = (arcDelay[5]-1), delayAppear = (arcDelay[7]-1));
	/*Chord intro*/
	changeBottomText(newText = "Now we're going to look at how IC transactions flowed from one country to another",
		loc = 1/2, delayDisappear = (arcDelay[8]-1), delayAppear = arcDelay[8]);

};/*Draw3*/
