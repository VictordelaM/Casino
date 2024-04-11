import React, { useState } from 'react'
import Slot from './Slot'



const SlotCard = () => {
    const [showSlots, setShowSlots] = useState(false);
const show = () =>{
    setShowSlots(true)
}
  return (
    <div>
        {showSlots && (
      <Slot/>)}
      <button onClick={show}>start</button>
    </div>
  )
}

export default SlotCard
