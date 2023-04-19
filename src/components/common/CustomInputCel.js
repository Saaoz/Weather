import React, { useState } from 'react'

function CustomInputCel() {

const [isCelcius, setIsCelcius] = useState(true)
// useEffect( () => {console.log(isCelcius)}, [isCelcius] ) 
  return (
    <div className='btn-cel' onClick={ () => setIsCelcius(!isCelcius)} >
        {isCelcius ? <text>°C</text> : <text>°F</text>}
    </div>
  )
}

export default CustomInputCel


// style={{ 
//     color: isCelcius ? 'red' : 'black'
//  }}