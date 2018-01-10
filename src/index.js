import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { testFunction, ToDo } from './todo.js'
import { Project } from './project.js'


const container = document.querySelector('.container');

let x = new ToDo(1, "Take out the Garbage", "Important task that just needs to get done.", "11/11/2018", "5");
let y = new ToDo(2, "Vacuum", "Slightly less important, multiple times maybe.", "06/03/2018", "3");
let z = new Project(1, "House Duties");
x.complete();
z.addToDo(x);
z.addToDo(y);

let m = new ToDo(1, "NFL Site", "Send out new lines", "01/10/2018", "5");
let n = new ToDo(2, "Javascript", "Work on the to do list project.", "01/20/2018", "3");
let p = new Project(2, "Programming");
p.addToDo(m);
p.addToDo(n);


const projects = [];
projects.push(z);
projects.push(p);

const select = document.getElementById("selectProject");

function loadPage(projects){
  container.appendChild(projects[0].generateDOMItem());
  refreshSelect(select, projects)
}

loadPage(projects);


function refreshSelect(selectElement,projectArray){
  selectElement.innerHTML = "";
  for(let i=0; i < projectArray.length;i++){
    let opt = projects[i];
    let el = document.createElement("option");
    el.textContent = opt.name;
    el.value = opt.id;
    select.appendChild(el);
  }

  select.onchange = function() {
    let x = document.getElementById("selectProject").value;
    const container = document.querySelector(".container");
    container.innerHTML = "";
    container.appendChild(projects[x-1].generateDOMItem());
  }

}


function addProject(newProject, projectArray){
  projectArray.push(newProject);
  refreshSelect(select, projectArray);
}


projectForm.addEventListener('submit', function(e){
  e.preventDefault();
  let newProject = new Project(
    projects.length,
    this.elements.name.value
   )
   addProject(newProject, projects);
   document.getElementById('projectForm').reset();
})
