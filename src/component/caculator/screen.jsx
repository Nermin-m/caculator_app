
import style from './assets/screen.module.css';
import {useContext} from "react";
import {mycontext} from "./context/context";


function Screen() {
    const [state,dispatch]=useContext(mycontext);
if(state.result !==null){
    return (
        <div>
            <div className={style.screen}>{state.result}</div>
        </div>
    )
}
    return (
        <div>
            <div className={style.screen}>{state.leftSide}{state.operator}{state.rightSide}</div>
        </div>
    );
}

export default Screen;
