
import style from './assets/key.module.css';
import { mycontext } from './context/context';
import { useContext } from 'react';

function Key({ type, color, grey, value }) {
    const [state, dispatch] = useContext(mycontext);

    const onclick = () => {
        if (type === 'operator' && value === 'AC') {
            dispatch({
                type: 'erase'
            });
        } else if (type === 'operator' && value === '=') {
            dispatch({
                type: 'calculate'
            });
        } else {
            switch (type) {
                case 'number':
                    dispatch({
                        type: type,
                        payload: value,
                    });
                    break;
                case 'operator':
                    dispatch({
                        type: type,
                        payload: value,
                    });
                    break;
                default:
                    console.warn(`Unhandled button type: ${type}`);
            }
        }
    };

    return (
        <button onClick={onclick} className={`${style.keys} ${color ? style.orange : ''} ${grey ? style.grey : ''}`}>
            {value}
        </button>
    );
}

export default Key;
