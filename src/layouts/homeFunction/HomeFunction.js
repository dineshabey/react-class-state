import React, { useState } from 'react'

export default function HomeFunction() {
    const [numberCount, setNumberContent] = useState(); //function base state variyabale
    const addNumber = () => {
        alert()
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <div>
                <p style={{ fontSize: '40px' }}>1</p>
                <button onClick={addNumber}>Add One</button>
            </div>
        </div>
    )
}
