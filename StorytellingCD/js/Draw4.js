/*///////////////////////////////////////////////////////////
//Show the chord between US and SG
//////////////////////////////////////////////////////////*/
function Draw4(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);

	/*US and Singapore intro text*/
	changeTopText(newText = "First, we look at payments from Singapore to the US and vice versa",
		loc = 5, delayDisappear = 0, delayAppear = 1, finalText = true);

	/*Bottom text disappear*/
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);

    /*Make the non US & SG arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", function(d) {
			if(d.index != 4 && d.index != 5) {return opacityValue;}
		});

	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 5 || j == 4) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 5 || j == 4) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 4 || d.index == 5) {return 1;} else {return opacityValue;}});

	/*Show only the US Singapore chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) {
			if(d.source.index == 5 && d.target.index == 4)
				{return opacityValueBase;}
			else {return 0;}
		});

};/*Draw4*/
