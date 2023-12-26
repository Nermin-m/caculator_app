import React from 'react';
import style from './assets/main.module.css'
function Main({children}) {
    return (
        <div>
          <div className={style.main}>
              {children}
          </div>
        </div>
    );
}

export default Main;
