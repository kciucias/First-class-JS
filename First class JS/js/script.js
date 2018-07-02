
function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		document.write("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + '<br>');
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", 2500, "black");
var onePlusOne = new Phone("OnePlus One", 1800, "white");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();