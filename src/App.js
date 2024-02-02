import React from 'react';
import Main from "./component/caculator/main";
import Screen from "./component/caculator/screen";
import Keyboard from "./component/caculator/keyboard";
import Key from "./component/caculator/key";
import style from './app.module.css';
import image from './component/caculator/img/mhdc3tua-apple-iphone-11-64gb-beyaz-mhdc3tua-637610877233906011.webp'

function App() {
    return (
        <div className={style.main}>
            <Main>
                <Screen />
                <Keyboard>
                    <Key type={'operator'} grey={'grey'} value='AC' />
                    <Key type={'operator'} grey={'grey'} value={'√'} />
                    <Key type={'operator'} grey={'grey'} value={'%'} />
                    <Key type={'operator'} color={'color'} value={'/'} />
                    <Key type={'number'} value={7}></Key>
                    <Key type={'number'} value={8} />
                    <Key type={'number'} value={9} />
                    <Key type={'operator'} color={'color'} value={'x'} />
                    <Key type={'number'} value={4} />
                    <Key type={'number'} value={5} />
                    <Key type={'number'} value={6} />
                    <Key type={'operator'} color={'color'} value={'-'} />
                    <Key type={'number'} value={1} />
                    <Key type={'number'} value={2} />
                    <Key type={'number'} value={3} />
                    <Key type={'operator'} color={'color'} value={'+'} />
                    <Key type={'number'} value={0} />
                    <Key type={'operator'} value={'+/-'} />
                    <Key type={'operator'} value={'x²'} />
                    <Key type={'operator'} color={'color'} value={'='} />
                </Keyboard>
            </Main>
            <div style={{color:'white',fontSize:'50px',fontFamily:'monospace',width:'700px'}}>Iphone Caculator App (React/React-ContextApi-React Hooks)</div>
            <div><img src={image} style={{width:'500px',height:'600px'}}/></div>
        </div>
    );
}

export default App;
