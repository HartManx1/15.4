function Phone(brand, price, memory, color) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.memory = memory;
}

var iPhone6S = new Phone("Apple", 2250, 64, "silver");
var iPhone7S = new Phone("Apple", 3299, 128, "gold");
var Samsung10 = new Phone("Samsung", 3100, 32, "black");

Phone.prototype.printInfo = function() {
		document.write("The phone brand is " + this.brand + ", color is " + this.color +", the amount of memory is " + this.memory + " and the price is " + this.price + "." +"<br><br>");
}

iPhone6S.printInfo();
iPhone7S.printInfo();
Samsung10.printInfo();