import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const handlePayNow = () => {
        dispatch({ type: 'CLEAR_CART' });
        alert("Payment successful! Items removed from cart.");
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            {item.name}: {item.price}
                            <button className='btn btn-warning text-center m-1 p-1' onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
                                Remove from Cart
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    <p>Chennai, 600012</p>
                    <p>2A, New Street</p>
                    <p>Total price ₹ {totalPrice}</p>
                    <button className="btn btn-success" onClick={handlePayNow}>Pay now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
