Tamagothci.initialize('Rabbit');
console.log(Tamagothci);
init();

// main timer
var time = window.setInterval(function () {
	if (Tamagothci.isAlive() === true) {
		Tamagothci.step();
		draw();
	} else {
		window.clearInterval(time);
        $("#tamagothci").hide();
        $("#info").html(Tamagothci.name + " " + localization['isDead'] + ".");
	}
}, 2000);

var timeHealth = window.setInterval(function () {
	if (Tamagothci.isAlive() === true) {
		Tamagothci.stepHealth();
		draw();
	} else {
		window.clearInterval(timeHealth);
        $("#tamagothci").hide();
        $("#info").html(Tamagothci.name + " " + localization['isDead'] + ".");
	}
}, 10000);

function draw() {
	var states = { 1: "(ಠ‿ಠ)", 2: "(ಠ_ಠ)", 3: "(ಥ﹏ಥ)" }; 
	//$("#healthLevel").html(Tamagothci.healthLevel);
	$("#healthLevel label").html(localization['health']);
	var healthProgress = Tamagothci.healthLevel/Tamagothci.maxHealth * 100;
	$("#healthLevel .progress-bar").css('width', healthProgress+'%');
	$("#healthLevel .progress-bar").attr('aria-valuenow', Tamagothci.healthLevel);
	$("#healthLevel .progress-bar").attr('aria-valuemax', Tamagothci.maxHealth);
	//food
	$("#foodLevel label").html(localization['satiety']);
	var foodProgress = Tamagothci.foodLevel/Tamagothci.maxFood * 100;
	$("#foodLevel .progress-bar").css('width', foodProgress+'%');
	$("#foodLevel .progress-bar").attr('aria-valuenow', Tamagothci.foodLevel);
	$("#foodLevel .progress-bar").attr('aria-valuemax', Tamagothci.maxFood);
	//happiness
	$("#happinessLevel label").html(localization['happiness']);
	var happinessProgress = Tamagothci.happinessLevel/Tamagothci.maxHappiness * 100;
	$("#happinessLevel .progress-bar").css('width', happinessProgress+'%');
	$("#happinessLevel .progress-bar").attr('aria-valuenow', Tamagothci.happinessLevel);
	$("#happinessLevel .progress-bar").attr('aria-valuemax', Tamagothci.maxHappiness);	
	
	$("#face").html(states[Tamagothci.states()]);
	$("#pet img").attr('src', 'img/rabbit'+Tamagothci.states()+'.png');
}

function init() {
	$("#medicine").html(localization['medicine']);
	$("#feed").html(localization['feed']);
	$("#play").html(localization['play']);
	draw();
}

$("#medicine").click (function () {
	Tamagothci.medicine();
	draw();
});

$("#feed").click (function () {
	Tamagothci.feed();
	draw();
});

$("#play").click (function () {
	Tamagothci.play();
	draw();
});

$("#sleep").click (function () {
	Tamagothci.goSleep();
	draw();
});