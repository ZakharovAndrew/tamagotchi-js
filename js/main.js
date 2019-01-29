Tamagothci.initialize('Rabbit');
console.log(Tamagothci);

var time = window.setInterval(function () {
	console.log('Timer');
	if (Tamagothci.isAlive() === true) {
		Tamagothci.step();
		// update values
		$("#healthLevel").html(Tamagothci.healthLevel);
		$("#foodLevel").html(Tamagothci.foodLevel);
		$("#happinessLevel").html(Tamagothci.happinessLevel);
		$("#face").html(Tamagothci.states);
	} else {
		window.clearInterval(time);
        $("#tamagothci").hide();
        $("#info").html(Tamagothci.name + " is Dead.");
	}
}, 2000);

$("#medicine").click (function () {
	Tamagothci.medicine();
	console.log(Tamagothci);
});

$("#feed").click (function () {
	Tamagothci.feed();
	console.log(Tamagothci);
});

$("#play").click (function () {
	Tamagothci.feed();
	console.log(Tamagothci);
});

$("#sleep").click (function () {
	Tamagothci.goSleep();
	console.log(Tamagothci);
});