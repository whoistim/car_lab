function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previousOwners = [];
	this.currentOwner = make;
	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function() {
	this.state = "on";
};

Car.prototype.off = function() {
	this.state = "off";
};

Car.prototype.driveTo = function(destination) {
	if (this.state == "on") {
	console.log("Driving to " + destination);
	}
};

Car.prototype.park = function(destination) {
	if (this.state == "off") {
	console.log("Parked! Phew!");
	}
};

Car.prototype.pickUp = function(buddy) {
	if (this.state == "on") {
	this.passengers.push(buddy);	
	console.log("Driving to pick up " + buddy + "!");
	}
};

Car.prototype.dropOff = function(buddy) {
	if (this.state == "on") {
	var outGuy = this.passengers.indexOf(buddy);
	this.passengers.splice(outGuy,1);	
	}
};
module.exports=Car;