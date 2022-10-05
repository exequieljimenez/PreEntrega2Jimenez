import { Link } from 'react-router-dom'

const Item = ({ prod }) => {
    return (
        <div className='productCard'>
            <h1>{prod.name}</h1>
            <h2>${prod.price}</h2>
            <img src={prod.img} alt={prod.description}></img>
            <Link to={`/item/${prod.id}`} style={{textDecoration:'none', color: 'black', fontWeight:'bold', backgroundColor:'darkgray', padding:'5px', border:'solid 1px'}}>Ver detalle</Link>
        </div>
    )
}

export default Item