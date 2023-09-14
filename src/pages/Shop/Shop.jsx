import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import './Shop.styles.scss'
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const Shop = () => {
  const {categoriesMap} = useContext(ProductsContext)

  return (
    <div className="shop-container">
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return <CategoryPreview key={title} title={title} products={products}/>
        })
      }
    </div>
  );
};

export default Shop;
