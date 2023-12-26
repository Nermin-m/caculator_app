import React from 'react';
import style from './assets/keyboard.module.css';

function Keyboard({ children }) {
    return (
        <div className={style.keyboard}>
            {children}
        </div>
    );
}

export default Keyboard;