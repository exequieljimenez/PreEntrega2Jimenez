const products = [
    { 
        id: '1', 
        name: 'Queso Criollo Ahumado', 
        price: 300, 
        category: 'queso', 
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/063/534/products/img_36961-6bcd56431ab96189d916033792188611-480-0.jpg', 
        stock: 10,
        description: 'queso criollo ahumado'
    },
    {
        id: '2', 
        name: 'Queso Manchego', 
        price: 1000, 
        category: 'queso', 
        img:'https://cdn.shopify.com/s/files/1/0024/5278/3148/products/queso-manchego-curado-3-kg_2048x2048.png?v=1527638283', 
        stock: 8,
        description: 'queso manchego'
    },
    { 
          id: '3', 
        name: 'Soppresatta', 
        price: 1000, 
        category: 'embutido', 
        img:'https://vincentsmeatmarket.com/wp-content/uploads/2018/04/shutterstock_51882826.jpg', 
        stock: 12, 
        description: 'sopresatta'
    },
    { 
        id: '4', 
        name: 'Spianata picante', 
        price: 1200, 
        category: 'embutido', 
        img:'https://cheeseandcoppa.co.za/wp-content/uploads/2020/05/spianata-piccante.jpg', 
        stock: 14, 
        description: 'spianata'
    },
    { 
        id: '5', 
        name: 'Vino Colomé Malbec', 
        price: 8500, 
        category: 'vino', 
        img:'https://www.bodegacolome.com/wp-content/uploads/2020/07/pro_1831.png', 
        stock: 8,
        description: 'vino colome malbec'
    },
    { 
        id: '6', 
        name: 'Colomé Pinot Noir', 
        price: 18000, 
        category: 'vino', 
        img:'https://www.bodegacolome.com/wp-content/uploads/2020/07/AM_Pinot_Noir.png', 
        stock: 8,
        description: 'vino colome pinot'
    },
    {
        id: '7',
        name: 'Ciabatta con aceitunas',
        price: 200,
        category: 'pan',
        img: 'https://cdn.shopify.com/s/files/1/1250/2125/articles/E38D92FF-2D34-443C-9170-C6510F38D16D_1_900x.jpg?v=1643219938',
        stock: 24,
        description: 'ciabatta con aceitunas'
    },
    {
        id: '8',
        name: 'Baguette rústica',
        price: 160,
        category: 'pan',
        img: 'https://www.196flavors.com/wp-content/uploads/2016/03/baguette-1.jpeg',
        stock: 27,
        description: 'baguette rustica'
    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}