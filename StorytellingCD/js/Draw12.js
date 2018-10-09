/*//////////////////////////////////////////////////////////
//All UK are grey
//////////////////////////////////////////////////////////*/
function Draw12(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*11);

	changeTopText(newText = "I want to note here that the UK has all chords connected to it " +
							" but the colour of them are all red, i.e. UK's colour",
		loc = 3/2, delayDisappear = 0, delayAppear = 1, finalText = false, xloc=-80, w=210);
	changeTopText(newText = "It means that the UK has always had the net income. " +
							"Or the UK always received more than it paid out for international transactions",
		loc = 3/2, delayDisappear = 9, delayAppear = 10, finalText = true, xloc=-80, w=210);

};/*Draw12*/
