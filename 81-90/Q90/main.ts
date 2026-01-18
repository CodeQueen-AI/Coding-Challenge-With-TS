//Explain how this behaves differently in arrow functions compared to traditional functions.
class Example {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    traditionalFunction() {
        console.log("Traditional function - Hello, " + this.name);
    }

    arrowFunction = () => {
        console.log("Arrow function - Hello, " + this.name);
    }
}

const obj = new Example("World");

// Calling methods
obj.traditionalFunction(); // Output: Traditional function - Hello, World
obj.arrowFunction();       // Output: Arrow function - Hello, World
