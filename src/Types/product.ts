 type ProductType = {
    description: string;
    title: string;
    sizes: Size[];
    _updatedAt: string;
    slug: Slug;
    images: Image[];
    colors: string[];
    name: string;
    _id: string;
    _rev: string;
    _type: string;
    rating: number;
    _createdAt: string;
    tags: string[];
    mainImage: ImageReference;
    discount: number;
  };
  
  type Size = {
    size: string;
    price: number;
    _key: string;
  };
  
  type Slug = {
    _type: string;
    current: string;
  };
  
  type Image = {
    color: string;
    _key: string;
    colorImage: ImageReference[];
  };
  
  type ImageReference = {
    _key?: string; // Optional since some references might not have `_key`
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  
  export default ProductType