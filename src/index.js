import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { testFunction, ToDo } from './todo.js'
import { Project } from './project.js'


const container = document.querySelector('.container');

let x = new ToDo("Take out the Garbage", "Important task that just needs to get done.", "11/11/2018", "5");
let z = new ToDo("Vacuum", "Slightly less important, multiple times maybe.", "06/03/2018", "3");
let y = new Project("House Duties");

y.addToDo(x);
y.addToDo(z);

container.appendChild(y.generateDOMItem());
