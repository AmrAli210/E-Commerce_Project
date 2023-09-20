import { User } from "./user.model";

export interface Review {
    user: User;
    rating: number;
    title: string;
    details: string;
    personHelped: number;
    date: Date;
    productId:number
  }
  