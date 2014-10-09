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

module.exports=Car;