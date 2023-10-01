import { Rating } from "./rating.model";
import { Review } from "./review.model";

export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  imgs: string[];
  category: string;
  details: string;
  price: number;
  quantity: number;
  rating?: Rating;
  reviews?: Review[];
}





