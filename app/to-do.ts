class Task {
  done: boolean;
  constructor(public description: string, public priority: string){
    this.done = false;
  }
  markDone(){
    this.done = true;
  }
}
//to show inheritance by use of extends
class HomeTask extends Task{}
class HobbyTask extends Task{
  //construtor is responsible for creating properties of a class
  constructor(public description:string){
    super (description,"Low")
    //super is used to call the properties of a base class i.e the parent class
    // in this case the parent class is the class Task
  }
}
class WorkTask extends Task{
  constructor(public duedate :Date, public description :string ,public priority :string){
    super(description,priority)
  }
}
var tasks: Task[] = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();
tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();  // get the current date and store it in the variable called 'today'
var tomorrow = today;   // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;  // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));
console.log(tasks);
