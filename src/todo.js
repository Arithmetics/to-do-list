export function testFunction(){
  console.log("dope man");
}

export class ToDo {
  constructor(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  complete() {
    if (!this.completed) {
      this.completed = true;
    }
  }

  uncomplete() {
    if (this.completed) {
      this.completed = false;
    }
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

    const toggleComplete = document.createElement('button');
    if (!this.completed){
      toggleComplete.classList.add('incomplete');
      toggleComplete.textContent = "Click to Complete";
      details.appendChild(toggleComplete);
    } else if (this.completed) {
      toggleComplete.classList.add('complete');
      toggleComplete.textContent = "Click to make Incomplete";
      details.appendChild(toggleComplete);
    }

    return item;
  }





}
