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

	isAlive: function () {
        if (this.foodLevel == 0 && this.healthLevel == 0 ) {
            return false;
        } else {
            return true;
        }
    },
	
	states: function () {
        var score = (Tamagothci.healthLevel + Tamagothci.foodLevel)/2;
		if (score > 7) {
            return 1;
        } else if (score > 3) {
            return 2;
        } else {
            return 3;
        };
    },

	step: function () {
		this.foodLevel--;
		this.happinessLevel--;
		if (this.happinessLevel < 0 && this.foodLevel < 0) {
			this.stepHealth();
		}
		if (this.happinessLevel < 0) {
			this.happinessLevel = 0;
		}
		if (this.foodLevel < 2) {
			this.healthLevel--;
		}
		if (this.foodLevel < 0) {
			this.foodLevel = 0;
		}
	},
	
	stepHealth: function () {
		this.healthLevel--;
	},
}