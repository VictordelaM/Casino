import React from 'react'
import Nav from '../components/Nav'
import './stylings/slot.css'

const Slot = () => {
    let cloumn1 = [0, 1, 2]
    let cloumn2 = [0, 1, 2]
    let cloumn3 = [0, 1, 2]

    const rand = (cloumn,res)=>{
        res =  cloumn[Math.ceil(Math.random() * cloumn.length)-1]
        return(res)
    } 
    let res1 = rand(cloumn1)
    let res2 = rand(cloumn2)
    let res3 = rand(cloumn3)
    const winCheck = (a,b,c)=>{
        if(a==b & b==c){return true}
            else{return false}
    }

    const winText = ()=>{
        if(winCheck(res1,res2,res3)){return 'U won'
        }else{return'U lost'}
    }
  return (
    <>
    <Nav/>
    <div id='slotBox'>
        <div id="firstNum">{res1}</div>
        <div id="secNum">{res2}</div>
        <div id="thirdNum">{res3}</div>
        <div id="wintext">{winText()}</div>
    </div>
    </>
  )
}

export default Slot
