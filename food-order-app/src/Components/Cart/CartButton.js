import CartIcon from './CartIcon';
import classes from './CartButton.module.css';

const CartButton = props => {
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
};

export default CartButton;