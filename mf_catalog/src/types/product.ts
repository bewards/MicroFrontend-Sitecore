export type Product = {
  id: number;
  name: string;
  price?: string;
  priceLineThrough?: string;
  image: string;
  brand?: string;
  model?: string;
  description?: string;
  detailAttributes?: {
    name: string;
    value: string;
  }[];
  detailPageUrl?: string;

  // Sitecore mappings
  categoryId?: string;
};

export type ResponseData_PDP =
  | Product
  | {
      errorMessage?: string;
      [key: string]: any;
    };
