import React from 'react'
import Nav from '../components/Nav'
import './stylings/slot.css'

const Slot = () => {
    let cloumn1 = [0, 0, 1]
    let cloumn2 = [0, 0, 1]
    let cloumn3 = [0, 0, 1]
    let cloumn4 = [0, 0, 1]
    let cloumn5 = [0, 0, 1]


    const rand = (cloumn,res)=>{
        res =  cloumn[Math.ceil(Math.random() * cloumn.length)-1]
        return(res)
    } 
    let res1 = rand(cloumn1)
    let res2 = rand(cloumn2)
    let res3 = rand(cloumn3)
    let res4 = rand(cloumn4)
    let res5 = rand(cloumn5)

    const winCheck = (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)=>{
        let linien= {
            line1:{number:1, line:f==g & g==h & h==i & i==j}, 
            line2:{number:2, line:a==b & b==c & c==d & d==e},
            line3:{number:3, line:k==l & l==m & m==n & n==o},
            line4:{number:4, line:a==g & g==m & m==i & i==e},
            line5:{number:5, line:k==g & g==c & c==i & i==o}
        }

        if(linien.line1||linien.line2||linien.line3){return true}
            else{return false}
    }

    const winText = ()=>{
        if(winCheck(res1,res2,res3,res4,res5)){return 'U won'
        }else{return'U lost'}
    }
  return (
    <>
    <Nav/>
    <div id='slotBox'>
       <div id='slots'>
            <div className='slot' id="firstNum">{res1}</div>
            <div className='slot' id="secNum">{res2}</div>
            <div className='slot' id="thirdNum">{res3}</div>
            <div className='slot' id="fourth">{res4}</div>
            <div className='slot' id="fifth">{res5}</div>
       </div>
        <div className='slot' id="wintext">{winText()}</div>
    </div>
    </>
  )
}

export default Slot
