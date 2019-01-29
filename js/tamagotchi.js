var Tamagothci = {
	initialize: function (name) {
		this.name = name;
		// set max values
		this.maxHealth = 10;
		this.maxFood = 10;
		this.maxHappiness = 10;
		// set start values
		this.isSleeping = false;
		this.healthLevel = this.maxHealth;
		this.foodLevel = this.maxFood;
		this.happinessLevel = this.maxHappiness;		
	},
	
	medicine: function () {
		if (this.healthLevel < this.maxHealth) {
			this.healthLevel++;
		};
	},
	
	feed: function() {
		if (this.foodLevel < this.maxFood) {
			this.foodLevel++;
		}
	},
	
	play: function () {
		if (this.happinessLevel < this.maxHappiness) {
			this.happinessLevel++;
		};
	},	

	goSleep: function () {
		this.isSleeping = true;
	},
	
	step: function () {
		this.healthLevel--;
		this.foodLevel--;
		this.happinessLevel--;
	},
}