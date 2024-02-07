export class Category {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

export const CATEGORIES = [
  new Category('c1', 'Grocery', '#fc8181'),
  new Category('c2', 'Work', '#63b3ed'),
  new Category('c3', 'Sport', '#68d391'),
];