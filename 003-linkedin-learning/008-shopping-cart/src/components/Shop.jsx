import { useState } from "react";
import json from './data.json'

export default function Shop() {

    const productsData = json.productos
    const [shopCart, setShopCart] = useState([])
    const [total, setTotal] = useState(0)


    function addItem(data) {  //need update to check error when u buy an item more than 1
        setShopCart([...shopCart, data])
        setTotal(total + data.precio)
    }
    function deleteItem(data) {
        setShopCart(shopCart.filter(p => p.id !== data.id))
        setTotal(total - data.precio)
    }

    return (
        <>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}>
                {productsData.map(i => (
                    <div key={i.id} style={{ backgroundColor: 'lightgray' }}>
                        <h3>{i.nombre}</h3>
                        <p>{i.precio}</p>
                        <button onClick={() => addItem(i)}>Add item</button>
                    </div>
                ))}
            </div>

            <div>
                <h3>Carrito de compras</h3>
                <div>
                    {shopCart.map(i => (
                        <div key={i.id}>
                            {i.nombre} --- {i.precio}$
                            <button onClick={() => deleteItem(i)}>Delete</button>
                        </div>
                    ))}
                </div>
                <div><small>Total: {total}</small></div>
            </div>
        </>
    )

}