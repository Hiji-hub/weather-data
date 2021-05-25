import React from 'react'

function Tick () {
    return(
        <div>
            <h1>Время</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    )
}
export default Tick