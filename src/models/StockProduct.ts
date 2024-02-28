import { Product } from "../context/Provider";

export default class ModelProduct {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: string;
  createdAt: string;
  updatedAt: string;

  constructor({ name, description, quantity, price, category }: Product) {
    this.id = Math.floor(Math.random() * 100000000);
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.category = category;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}
