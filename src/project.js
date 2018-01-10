import { testFunction, ToDo } from './todo.js'

export class Project {
  constructor(id,name) {
    this.id = id;
    this.name = name;
    this.todos = [];
  }

  addToDo(todo){
    this.todos.push(todo);
  }

  deleteToDo(id){
    this.todos.splice(id, 1);
  }



  generateDOMItem(){
    const item = document.createElement('div');
    item.classList.add('project');

    const projectName = document.createElement('h2');
    projectName.textContent = `Project: ${this.name}`;
    item.appendChild(projectName);

    let i = 0;
    this.todos.forEach(function(todo){
      let x = todo.generateDOMItem();
      x.dataset.id = todo.id;
      i++;
      item.appendChild(x);
    })

    const newToDoForm = document.createElement('form');
    newToDoForm.id = 'todoform';
    newToDoForm.innerHTML = '<br><h3>New To Do:</h3><form id="projectForm"><input type="text" name="title" placeholder="title"><input type="text" name="description" placeholder="description"><input type="date" name="due date" placeholder=""><input type="number" name="priority" placeholder="priority"><button type="submit">Submit</button><button type="button" id="cancelForm">Cancel</button></form>'
    item.appendChild(newToDoForm);
    return item;
  }




}
