import DirectoryItem from '../directory-item/DirectoryItem'
import './Directory.styles.scss'

const Directory = ({ categories }) => {

  return (
    <div className="directories-container">

        {
            categories.map(({ id, title, imageUrl }) => 
                <DirectoryItem id={id} title={title} imageUrl={imageUrl} key={id}/>
            )
        }


    </div>
  )
}

export default Directory