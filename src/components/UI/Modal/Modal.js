import React from 'react';
import classes from './Modal.css';
import BackDrop from '../Backdrop/Backdrop.js';

const modal = (props) => {
    // console.log('Modal:' + props.children);
    // const objarray = Object.keys(props.children);
    // console.log('Array:' + objarray)
    console.log('Modal Props-1: Ordering State:' + props.show + 'Props-2 :' + props.changeOrderStatusToCancel);

    return (
        <div>
            <BackDrop showme={props.show} clickme={props.changeOrderStatusToCancel} />
            <div className={classes.Modal}
                style={
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                {props.children}
            </div>
        </div>
    )
}

export default modal;