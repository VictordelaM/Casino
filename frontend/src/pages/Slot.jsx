import React from 'react'
import Nav from '../components/Nav'
import './stylings/slot.css'

const Slot = () => {
    let cloumn1 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn2 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn3 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn4 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn5 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]

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
        //!müssen auch noch zu objekten gemacht haben die mult mit übergeben
        let resTop = cloumn[indexCheck(index-1)]
        let resMid =  cloumn[index]
        let resBot = cloumn[indexCheck(index+1)]
        const res = [resTop,resMid,resBot]
        console.log(res)
        return(res)
    } 
    let [a,f,k] = rand(cloumn1,1)
    let [b,g,l] = rand(cloumn2,2)
    let [c,h,m] = rand(cloumn3,3)
    let [d,i,n] = rand(cloumn4,4)
    let [e,j,o] = rand(cloumn5,5)
    console.log(a)


    const winCheck = (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)=>{
        let linien= {
            line1:{number:1, line:f.value==g.value & g.value==h.value & h.value==i.value & i.value==j.value}, 
            line2:{number:2, line:a.value==b.value & b.value==c.value & c.value==d.value & d.value==e.value},
            line3:{number:3, line:k.value==l.value & l.value==m.value & m.value==n.value & n.value==o.value},
            line4:{number:4, line:a.value==g.value & g.value==m.value & m.value==i.value & i.value==e.value},
            line5:{number:5, line:k.value==g.value & g.value==c.value & c.value==i.value & i.value==o.value}
        }
        // if(linien.line1.line||linien.line2.line||linien.line3.line){return true}
        //     else{return false}
        if(linien.line1.line){return [f,g,h,i,j]}
        else if(linien.line2.line){return [a,b,c,d,e]}
        else if(linien.line3.line){return[k,l,m,n,o]}
        else{return false}
    }


    const winText = ()=>{
        if(winCheck(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o)){return 'U won'}
        else{return'U lost'}}

  return (
    <>
    <Nav/>
    <div id='slotBox'>
       <div id='slots'>
            <div id="col1" className="slotCol">
                <div id="slotTop" className="slot">{a.value}</div>
                <div id="slotMid" className="slot">{f.value}</div>
                <div id="slotBot" className="slot">{k.value}</div>
            </div>
            <div id="col2" className="slotCol">
                <div id="slotTop" className="slot">{b.value}</div>
                <div id="slotMid" className="slot">{g.value}</div>
                <div id="slotBot" className="slot">{l.value}</div>
            </div>
            <div id="col3" className="slotCol">
                <div id="slotTop" className="slot">{c.value}</div>
                <div id="slotMid" className="slot">{h.value}</div>
                <div id="slotBot" className="slot">{m.value}</div>
            </div>
            <div id="col4" className="slotCol">
                <div id="slotTop" className="slot">{d.value}</div>
                <div id="slotMid" className="slot">{i.value}</div>
                <div id="slotBot" className="slot">{n.value}</div>
            </div>
            <div id="col5" className="slotCol">
                <div id="slotTop" className="slot">{e.value}</div>
                <div id="slotMid" className="slot">{j.value}</div>
                <div id="slotBot" className="slot">{o.value}</div>
            </div>
       </div>
        <div className='slot' id="wintext">{winText()}</div>
    </div>
    </>
  )
}

export default Slot
