import './DirectoryItem.styles.scss'

const DirectoryItem = ({title, imageUrl}) => {
  return (
    <div className='directory' >
        <div className='background-img' style={{
             backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='directory__body'>
            <h2>{title}</h2>
            <p>Shop now</p>
        </div>
    </div>
  )
}

export default DirectoryItem