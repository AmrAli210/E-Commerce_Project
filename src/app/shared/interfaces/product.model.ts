import { Rating } from "./rating.model";
import { Review } from "./review.model";

export interface Product {
  id: number;
  thumbnail: string;
  imgs: string[];
  category: string;
  details: string;
  title: string;
  price: number;
  quantity: number;
  rating: Rating;
  reviews: Review[];
}





