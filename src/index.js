import { format, formatDistance, formatRelative, subDays, addDays } from 'date-fns'
import { ToDo } from './todo.js'
import { Project } from './project.js'
import { projects } from './variables.js'


function findProjectById(id){
  let matchingProject;
  projects.forEach(function(project){
    if (project.id == id){
      matchingProject = project;
    }
  })
  return matchingProject;
}

function deleteProject(id){
  let matchingProject;
  let index = 0;
  projects.forEach(function(project){
    if (project.id == id){
      projects.splice(index, 1);
    }
    index++;
  })
  renderProject(projects[0].id);
}

function newProjectId(){
  return projects[projects.length -1].id + 1;
}

const newProjectForm = document.querySelector('#projectForm');
newProjectForm.addEventListener('submit', function(e){
  e.preventDefault();
  let newProject = new Project(
    newProjectId(),
    this.elements.name.value
   )
   projects.push(newProject);
   newProjectForm.reset();
   refreshDropDown();
})

const select = document.getElementById('selectProject');
select.addEventListener('change', function(e){
  renderProject((e.target.value));
})


function refreshDropDown(){
  const select = document.getElementById('selectProject');
  select.innerHTML = "";
  projects.forEach(function(project){
    let el = document.createElement("option");
    el.textContent = project.name;
    el.value = project.id;
    select.appendChild(el);
  })
}

function renderProject(id){
  const project =  findProjectById(id);

  const container = document.getElementById('container');
  container.innerHTML = "";
  let projectDiv = document.createElement('div');
  projectDiv.dataset.id = id;
  projectDiv.classList.add('project');
  let title = document.createElement('h4');
  title.textContent = "Project Title: " + project.name;
  projectDiv.appendChild(title);
  let deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete Project";
  deleteButton.addEventListener("click", function(){
    deleteProject(id);
    refreshDropDown();
  });

  let newToDoForm = document.createElement('form');
  newToDoForm.id = "editToDoForm";
  let input1 = document.createElement('input');
  input1.type = "text";
  input1.name = "title";
  input1.placeholder = "title";
  newToDoForm.appendChild(input1);
  let input2 = document.createElement('input');
  input2.type = "date";
  input2.name = "dueDate";
  newToDoForm.appendChild(input2);
  let input3 = document.createElement('input');
  input3.type = "text";
  input3.name = "description";
  input3.placeholder = "description";
  newToDoForm.appendChild(input3);
  let input4 = document.createElement('input');
  input4.type = "number";
  input4.name = "priority";
  input4.placeholder = 1;
  newToDoForm.appendChild(input4);
  let submit = document.createElement('button');
  submit.type = "submit";
  submit.textContent = "Submit New To Do";
  submit.addEventListener("click", function(e){
    e.preventDefault();
    let todo = new ToDo(project.nextToDoId(),input1.value, input3.value, addDays(new Date(input2.value), 1),input4.value);
    project.addToDo(todo);
    newToDoForm.reset();
    renderToDo(todo, projectDiv);
  })
  newToDoForm.appendChild(submit);
  projectDiv.appendChild(newToDoForm);
  projectDiv.appendChild(deleteButton);
  container.appendChild(projectDiv);
  project.todos.forEach(function(todo){
    renderToDo(todo, projectDiv);
  })
}

function renderToDo(todo, projectDiv){

  const project = findProjectById(projectDiv.dataset.id);

  let toDoDiv = document.createElement('div');
  toDoDiv.dataset.id = todo.id;
  toDoDiv.classList.add('todo');
  let name = document.createElement('h5');
  name.textContent = "Title: " + todo.title;
  toDoDiv.appendChild(name);
  let dueDate = document.createElement('h5');
  dueDate.textContent = "Due: " + format(todo.dueDate, 'YYYY-MM-DD');
  toDoDiv.appendChild(dueDate);
  let description = document.createElement('h5');
  description.textContent = "Details: " + todo.description;
  toDoDiv.appendChild(description);
  let priority = document.createElement('h5');
  priority.textContent = "priority: " + todo.priority;
  toDoDiv.appendChild(priority);
  let deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click', function(e){
    let toDoId = e.target.parentElement.dataset.id;
    project.deleteToDo(toDoId);
    projectDiv.removeChild(toDoDiv);
  })
  toDoDiv.appendChild(deleteButton);
  let editForm = document.createElement('form');
  editForm.id = "editToDoForm";
  editForm.classList.add('hidden');
  let input1 = document.createElement('input');
  input1.type = "text";
  input1.name = "title";
  input1.value = todo.title;
  editForm.appendChild(input1);
  let input2 = document.createElement('input');
  input2.type = "date";
  input2.name = "dueDate";
  input2.value = format(todo.dueDate, 'YYYY-MM-DD');
  editForm.appendChild(input2);
  let input3 = document.createElement('input');
  input3.type = "text";
  input3.name = "description";
  input3.value = todo.description;
  editForm.appendChild(input3);
  let input4 = document.createElement('input');
  input4.type = "number";
  input4.name = "priority";
  input4.value = todo.priority;
  editForm.appendChild(input4);
  let submit = document.createElement('button');
  submit.type = "submit";
  submit.textContent = "Submit Edit";
  submit.addEventListener("click", function(e){
    e.preventDefault();
    todo.title = input1.value;
    console.log(input2.value);
    console.log(todo.dueDate);
    todo.dueDate = addDays(new Date(input2.value), 1);
    console.log(input2.value);
    console.log(todo.dueDate);
    todo.description = input3.value;
    todo.priority = input4.value;
    name.textContent = "Title: " + todo.title;
    dueDate.textContent = "Due: " + format(todo.dueDate, 'YYYY-MM-DD')
    description.textContent = "Details: " + todo.description;
    priority.textContent = "priority: " + todo.priority;
  })
  editForm.appendChild(submit);
  toDoDiv.appendChild(editForm);
  let editButton = document.createElement('button');
  editButton.textContent = "Edit";
  editButton.addEventListener('click', function(e){
    const editForm = e.target.parentElement.querySelector('#editToDoForm');
    editForm.classList.toggle('hidden');
  })
  toDoDiv.appendChild(editButton);

  //Add complete toDoDiv to projectDiv
  projectDiv.appendChild(toDoDiv);
};


refreshDropDown();
renderProject(0);
