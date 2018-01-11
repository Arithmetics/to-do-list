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





}
