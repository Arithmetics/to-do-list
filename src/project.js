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
    let index;
    for(let i=0;i<id.length;i++){
      if (this.todos[i]==id){
        index = i;
      }
    }
    this.todos.splice(index, 1);
  }

  findToDoById(id){
    let matchingToDo;
    this.todos.forEach(function(todo){
      if (todo.id == id){
        matchingToDo = todo;
      }
    })
    return matchingToDo;
  }



}
