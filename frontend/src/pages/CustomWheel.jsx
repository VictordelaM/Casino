import React from 'react'
import Nav from '../components/Nav'
import './stylings/customWheel.css'

const CustomWheel = () => {
  //!farbe funktioniert nicht
  const arr = [{value:"0", color:'white'},{value:"10", color:'red'},{value:"20", color:'blue'}]
  return (
    <div>
      <Nav/>

     <div id='wheelBox'>
          <div id="wheel">
            {arr.map((e, i)=>{
              i++
              const dropname = 'drop'+i
              return <div key={i} className='drop' id={dropname}>{e.value}</div>
            })}
          </div>
     </div>
    </div>
  )
}

export default CustomWheel
