import React, { useState } from 'react'

export default function HomeFunction() {
    const [numberCount, setNumberContent] = useState(1); //function base state variyabale
    const addNumber = () => {
        
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <div>
                <p style={{ fontSize: '40px' }}>{numberCount}</p>
                <button onClick={addNumber}>Add One</button>
            </div>
        </div>
    )
}
