import { useState } from 'react'

const ItemCount = (stock) => {

    let productStock = stock.stock

    const initial = 0
    let [count, setCount] = useState(initial)
    
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < productStock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount