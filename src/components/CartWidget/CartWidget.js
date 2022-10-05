const CartWidget = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src="/images/cart.svg" alt="shopping cart"/>
            Producto(s) en carrito: 0
        </div>
    )
}

export default CartWidget