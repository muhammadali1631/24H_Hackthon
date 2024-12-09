import ProductCard from './ProductCard';
import { products } from '@/data/product'
import ViewAll from './ViewAll';
import Underline from './Underline';

const ProductCardList = () => {
  return (
    <div className=" p-4 px-10 my-16" id='new'>
      <h2 className="text-4xl font-black text-center mb-10">NEW ARRIVALS</h2>
      <div className="flex justify-around gap-3 overflow-x-scroll hide-scrollbar my-6">
        {products.filter(item => item.tags.includes('new')).map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
      </div>
        <ViewAll/>
        <Underline/>
    </div>
  );
};

export default ProductCardList;