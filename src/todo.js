export function testFunction(){
  console.log("dope man");
}

export class ToDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  generateDOMItem() {
    const item = document.createElement('div');
    item.classList.add('todo');

    const title = document.createElement('h4');
    item.appendChild(title);
    title.textContent = this.title;

    const dueDate = document.createElement('h5');
    item.appendChild(dueDate);
    dueDate.textContent = this.dueDate;

    const details = document.createElement('div');
    details.classList.add('details');
    item.appendChild(details);
    details.textContent = this.details;

    const description = document.createElement('p');
    details.appendChild(description);
    description.textContent = this.description;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = "Delete";
    details.appendChild(deleteButton);
    deleteButton.addEventListener("click",removeElement);


    return item;
  }

}


function removeElement(e){
  let todo = e.target.parentNode.parentNode;
  let project = todo.parentNode;
  project.removeChild(todo);
  
}
