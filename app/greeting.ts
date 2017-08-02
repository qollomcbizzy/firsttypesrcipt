class Greeter{
  greeting:string;
  //adding the public keyword as to be accessed froem anywhere in our program
  constructor (public message : string){
    this.greeting=message;
  }
  greet(){
    return "hello"+this.greeting;
  }
}
var greeters: Greeter[] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how are you?"));
greeters.push(new Greeter("my baby, hello my honey, hello my ragtime gal!"));
console.log(greeters);
for(var greeter of greeters){
  alert(greeter.greet());
}
