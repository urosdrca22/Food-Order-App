
import React from 'react';
import MealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import CartButton from '../Cart/CartButton';


const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Food Order App</h1>
            <CartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="A table full of delicious food"></img>
        </div>
    </React.Fragment>
};

export default Header;