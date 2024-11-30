export type ProductType = {
  id: number;
  brand: string;
  categories: string[];
  size: number[] | string[];
  color: string;
  stock: number | string;
  name: { dk?: string | undefined; en?: string | undefined };
  price: number;
  images?: string[] | undefined;
  variant?: Record<string, any>[] | undefined;
};

export type CategoryMainType = {
  id: string;
  parent_category_id: string;
  level: number;
  name: {
    en: string;
    dk: string;
  };
  categories?: SubCategoryType[]
};

export type SubCategoryType = {
  id: string;
  parent_category_id: string;
  level: number;
  name: {
    en: string;
    dk: string;
  };
};
