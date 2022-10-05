import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div>
            <h1>Detalle del producto</h1>
            <h2>El precio de los fiambres es por 100 gramos</h2>
            <div className="productCard">
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
                <img src={product.img} alt={product.descrption}></img>
                <h3>Agregar al carrito</h3>
                <ItemCount stock={product.stock} />
            </div>
        </div>
    )
}

export default ItemDetailContainer