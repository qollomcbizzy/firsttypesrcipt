var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
})();
//to show inheritance by use of extends
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        _super.apply(this, arguments);
    }
    return HomeTask;
})(Task);
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    //construtor is responsible for creating properties of a class
    function HobbyTask(description) {
        _super.call(this, description, "Low");
        this.description = description;
        //super is used to call the properties of a base class i.e the parent class
        // in this case the parent class is the class Task
    }
    return HobbyTask;
})(Task);
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(duedate, description, priority) {
        _super.call(this, description, priority);
        this.duedate = duedate;
        this.description = description;
        this.priority = priority;
    }
    return WorkTask;
})(Task);
var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();
tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));
var today = new Date(); // get the current date and store it in the variable called 'today'
var tomorrow = today; // set the variable tomorrow equal to the current date, but then reset it to today's date plus 1.
tomorrow.setDate(today.getDate() + 1);
var nextDay = today; // create another date object and set it to today's date plus 2.
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));
console.log(tasks);
