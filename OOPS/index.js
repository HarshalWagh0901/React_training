//  Class = (ES6) feature provides a more structured and cleaner way to work with objects compared to traditional constructor functions
//         e.g. - static keyword, encapsulation, inheritance, polymorphism, etc.

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}, Price: RS. ${this.price.toFixed(2)}`);
    }

    calculateTax(taxRate) {
        return this.price + (this.price * taxRate);
    }
}

const taxRate = 0.18;    // fractional tax rate (18%)

const product1 = new Product("Watch", 14999);
console.log(product1);
product1.displayProduct();

const total = product1.calculateTax(taxRate);
console.log(`Total price (with tax): RS. ${total.toFixed(2)}`);


// ------------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------");

//  static = keyword that defines properties or methods that belongs to a class itself rather than the objects created from that class (class owns anything STATIC, mot the objects)

class MathUtil {
    static PI = 3.14159;

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radious) {
        return this.PI * radious * radious;
    }
}

console.log(MathUtil.PI);   // do not need to create an object to access static properties/methods
console.log(MathUtil.getCircumference(10));

console.log(MathUtil.getArea(10));

// ------------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------");

// Inheritance = allows a new class to inherit properties and methods from an existing class
                // parent -> child
                // helps with code reusability

// ------------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------");

// super = keyword is used in classes to call the constructor of the parent class and to access its proerties and methods

// parent (superclass)
// this = this object
// super = the parent

// ------------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------");


const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(array) {
    for (let i = array.length-1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);
console.log(cards);

// ------------------------------------------------------------------------------------------------------
console.log("--------------------------------------------------");

