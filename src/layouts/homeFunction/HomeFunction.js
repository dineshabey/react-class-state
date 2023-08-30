import React, { useState } from 'react'

export default function HomeFunction() {
    const [numberCount, setNumberContent] = useState(1); //function base state variyabale
    const addNumber = () => {
        setNumberContent(numberCount + 1);
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <div>
                <p style={{ fontSize: '40px' , color:'red'}}>{numberCount}</p>
                <button onClick={addNumber}>Add One</button>
            </div>
        </div>
    )
}
