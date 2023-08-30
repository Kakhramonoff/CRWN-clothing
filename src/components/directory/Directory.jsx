import CategoryItem from '../category-item/CategoryItem'
import './Directory.styles.scss'

const Directory = ({ categories }) => {

  return (
    <div className="categories-container">

        {
            categories.map(({ id, title, imageUrl }) => 
                <CategoryItem id={id} title={title} imageUrl={imageUrl} key={id}/>
            )
        }


    </div>
  )
}

export default Directory