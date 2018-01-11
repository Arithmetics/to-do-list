import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns'
import { ToDo } from './todo.js'
import { Project } from './project.js'
import { projects } from './variables.js'

let x = new ToDo(0, "Take out the Garbage", "Important task that just needs to get done.", new Date(2018, 6, 1), "5");
let y = new ToDo(1, "Vacuum", "Slightly less important, multiple times maybe.", new Date(2023, 9, 13), "3");
let z = new Project(0, "House Duties");
x.complete();
z.addToDo(x);
z.addToDo(y);

let m = new ToDo(0, "NFL Site", "Send out new lines", new Date(2016, 1, 11), "5");
let n = new ToDo(1, "Javascript", "Work on the to do list project.", new Date(2015, 3, 17), "3");
let p = new Project(1, "Programming");
p.addToDo(m);
p.addToDo(n);

//MASTER VARIABLE HERE
const projects = [];
projects.push(z);
projects.push(p);

export {projects}
