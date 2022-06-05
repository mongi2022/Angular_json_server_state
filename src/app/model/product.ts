export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  selected: boolean;
  available: boolean;
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    selected: boolean,
    available: boolean
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.selected = selected;
    this.available = available;
  }
}
