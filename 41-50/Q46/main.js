//Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a
// method describe() that logs a sentence about the laptop.
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
