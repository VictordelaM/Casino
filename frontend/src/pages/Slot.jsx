import React from 'react'
import Nav from '../components/Nav'
import './stylings/slot.css'

const Slot = () => {
    let cloumn1 = [0,1,2]
    let cloumn2 = [0,1,2]
    let cloumn3 = [0,1,2]
    let cloumn4 = [0,1,2]
    let cloumn5 = [0,1,2]


    const rand = (cloumn,a)=>{
        const indexCheck=(i)=>{
            console.log('i',i)
            console.log('length', cloumn.length)
            if(i>=cloumn.length){
                console.log(a,'mehr')
                const res = i - cloumn.length
                return res
            }else if(i<0){
                console.log(a,'weniger')
                const res = i + cloumn.length
                return res
            } else{
                return i
            }
           
        }
        let index = Math.ceil(Math.random() * cloumn.length)-1
        let resTop = cloumn[indexCheck(index-1)]
        let resMid =  cloumn[index]
        let resBot = cloumn[indexCheck(index+1)]
        const res = [resTop,resMid,resBot]
        return(res)
    } 
    // let res1 = rand(cloumn1)
    // let res2 = rand(cloumn2)
    // let res3 = rand(cloumn3)
    // let res4 = rand(cloumn4)
    // let res5 = rand(cloumn5)
    console.log()
    let [a,f,k] = rand(cloumn1,1)
    let [b,g,l] = rand(cloumn2,2)
    let [c,h,m] = rand(cloumn3,3)
    let [d,i,n] = rand(cloumn4,4)
    let [e,j,o] = rand(cloumn5,5)


    const winCheck = (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)=>{
        let linien= {
            line1:{number:1, line:f==g & g==h & h==i & i==j}, 
            line2:{number:2, line:a==b & b==c & c==d & d==e},
            line3:{number:3, line:k==l & l==m & m==n & n==o},
            line4:{number:4, line:a==g & g==m & m==i & i==e},
            line5:{number:5, line:k==g & g==c & c==i & i==o}
        }

        if(linien.line1.line||linien.line2.line||linien.line3.line){
            console.log(linien.line1,linien.line2,linien.line3)
            return true
        }
            else{
                return false
            }
    }

    const winText = ()=>{
        if(winCheck(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)){return 'U won'
        }else{return'U lost'}
        // if(winCheck(res1,res2,res3,res4,res5)){return 'U won'
        // }else{return'U lost'}
    }
  return (
    <>
    <Nav/>
    <div id='slotBox'>
       <div id='slots'>
            {/* <div className='slot' id="firstNum">{res1}</div>
            <div className='slot' id="secNum">{res2}</div>
            <div className='slot' id="thirdNum">{res3}</div>
            <div className='slot' id="fourth">{res4}</div>
            <div className='slot' id="fifth">{res5}</div> */}
            <div id="col1" className="slotCol">
                <div id="slotTop" className="slot">{a}</div>
                <div id="slotMid" className="slot">{f}</div>
                <div id="slotBot" className="slot">{k}</div>
            </div>
            <div id="col2" className="slotCol">
                <div id="slotTop" className="slot">{b}</div>
                <div id="slotMid" className="slot">{g}</div>
                <div id="slotBot" className="slot">{l}</div>
            </div>
            <div id="col3" className="slotCol">
                <div id="slotTop" className="slot">{c}</div>
                <div id="slotMid" className="slot">{h}</div>
                <div id="slotBot" className="slot">{m}</div>
            </div>
            <div id="col4" className="slotCol">
                <div id="slotTop" className="slot">{d}</div>
                <div id="slotMid" className="slot">{i}</div>
                <div id="slotBot" className="slot">{n}</div>
            </div>
            <div id="col5" className="slotCol">
                <div id="slotTop" className="slot">{e}</div>
                <div id="slotMid" className="slot">{j}</div>
                <div id="slotBot" className="slot">{o}</div>
            </div>
       </div>
        <div className='slot' id="wintext">{winText()}</div>
    </div>
    </>
  )
}

export default Slot
