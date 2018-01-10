import { testFunction, ToDo } from './todo.js'

export class Project {
  constructor(name) {
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
      x.dataset.id = i;
      i++; 
      console.log(x);
      item.appendChild(x);
    })
    return item;
  }


}
