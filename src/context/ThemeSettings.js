import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function Theme(props){
    const styles = {
        background: '#F9F9F9',
        color: 'black'
    }

    const [theme] = useState(styles);
    const [cart, setCart] = useState('hidden');

    const object = {
        theme,
        cart,
        setCart,
    }

    return (
        <div>
            <ThemeContext.Provider value={object}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export default Theme;