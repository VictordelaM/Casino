import React from 'react'
import Nav from '../components/Nav'
import './stylings/slot.css'

const Slot = () => {
    let cloumn1 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn2 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn3 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn4 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn5 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]

    // let cloumn1 = [0,1,2,1,1,1,2,1,1,1]
    // let cloumn2 = [0,1,2,1,1,1,2,1,1,1]
    // let cloumn3 = [0,1,2,1,1,1,2,1,1,1]
    // let cloumn4 = [0,1,2,1,1,1,2,1,1,1]
    // let cloumn5 = [0,1,2,1,1,1,2,1,1,1]

    const rand = (cloumn)=>{
        const indexCheck=(i)=>{
            if(i>=cloumn.length){
                const res = i - cloumn.length
                return res
            }else if(i<0){
                const res = i + cloumn.length
                return res
            } else{
                return i
            }
           
        }
        let index = Math.ceil(Math.random() * cloumn.length)-1
        let resTop = cloumn[indexCheck(index-1)].value
        let resMid =  cloumn[index].value
        let resBot = cloumn[indexCheck(index+1)].value
        const res = [resTop,resMid,resBot]
        return(res)
    } 
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

        if(linien.line1.line||linien.line2.line||linien.line3.line){return true}
            else{return false}
    }

    const winText = ()=>{
        if(winCheck(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)){return 'U won'
        }else{return'U lost'}
    }
  return (
    <>
    <Nav/>
    <div id='slotBox'>
       <div id='slots'>
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
