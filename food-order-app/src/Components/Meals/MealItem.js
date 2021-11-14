import { Fragment } from 'react';

const MealItem = props => {
    
    return (
        <Fragment>
            <h2>{props.name}</h2>
            <div>{props.price}</div>
        </Fragment>
    )
};

export default MealItem;

