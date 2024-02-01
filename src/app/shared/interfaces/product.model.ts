export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  imgs: string[];
  category: string;
  details: string;
  price: number;
  quantity: number;

  overall: number;
  ratingstars: number;
  recommended:number| string;
  effectiveness: number;
  texture: number;
  vfm: number;
  packaging: number;
  userRecommend: number;
  userRepurchase: number;

  productComments:any;

  tags:string[];
}





