import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../ProductCard/ProductCard'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
  return (
    <div className='category-container'>
        {products && products.map((product) => (
            <ProductCard product={product} key={product.id}/>
        ))}
    </div>
  )
}

export default Category