var Greeter = (function () {
    //adding the public keyword as to be accessed froem anywhere in our program
    function Greeter(message) {
        this.message = message;
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello" + this.greeting;
    };
    return Greeter;
})();
var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for (var _i = 0; _i < greeters.length; _i++) {
    var greeter = greeters[_i];
    alert(greeter.greet());
}
