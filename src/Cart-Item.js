

function CartItem(props) {

    return (
        <li>
            <img
                className="cart--item-icon"
                src={`assets/icons/${props.cartItem.id}.svg`}
                alt={props.cartItem.name}
            />
            <p>{props.cartItem.name}</p>
            <button className="quantity-btn remove-btn center" onClick={() => props.handleDecrement(props.cartItem)} >-</button>
            <span className="quantity-text center">{props.cartItem.quantity}</span>
            <button className="quantity-btn add-btn center" onClick={() => props.handleIncrement(props.cartItem)}>+</button>
        </li>

    )
}
export default CartItem;