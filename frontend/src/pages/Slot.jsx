import React from 'react'
import Nav from '../components/Nav'
import './stylings/slot.css'
import { fillSlotArray } from './fillSlotArray'



const Slot = () => {
    
    //ideen für attribute:    Effekte, 
    // let cloumn1 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    // let cloumn2 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    // let cloumn3 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    // let cloumn4 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    // let cloumn5 = [{value:0,mult:1},{value:0,mult:1},{value:1,mult:1},{value:2,mult:1}]
    let cloumn1 = fillSlotArray()
    let cloumn2 = fillSlotArray()
    let cloumn3 = fillSlotArray()
    let cloumn4 = fillSlotArray()
    let cloumn5 = fillSlotArray()

    //wählt ein random ergebnis aus einer "cloumn" und gibt sie mit ihren nachbarergebnissen aus
    const play = ()=>{const rand = (cloumn)=>{
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
        let resTop = cloumn[indexCheck(index-1)]
        let resMid =  cloumn[index]
        let resBot = cloumn[indexCheck(index+1)]
        const res = [resTop,resMid,resBot]
        return(res)
    } 

    //speichert die Ergebnisse nach dem folgendem Schema (in der Darstellung):
    //                                          a b c d e
    //                                          f g h i j
    //                                          k l m n o
    let [a,f,k] = rand(cloumn1,1)
    let [b,g,l] = rand(cloumn2,2)
    let [c,h,m] = rand(cloumn3,3)
    let [d,i,n] = rand(cloumn4,4)
    let [e,j,o] = rand(cloumn5,5)


    //checkt ob ergebnisse sich wiederholen und speichert sie in einem array wenn sie sich wiederholen
    const rowArray=([col1, col2, col3, col4, col5],name)=>{
        let row = [col1]
        if(col1.name == col2.name ){
            
            row.push(col2)
            if(col1.name  == col3.name ){
                row.push(col3)
                if(col1.name  == col4.name ){
                    row.push(col4)
                    if(col1.name ==col5.name ){
                        row.push(col5)
                    }}}}
        return {row: name, array:row, win:null}
    }

    //definiert die linien auf denen gewinnchancen sind
    const lines = [
        {num:1,line:[f,g,h,i,j]},
        {num:2,line:[a,b,c,d,e]},
        {num:3,line:[k,l,m,n,o]},
        {num:4,line:[a,g,m,i,e]},
        {num:5,line:[k,g,c,i,o]},
        {num:6,line:[f,b,c,d,j]},
        {num:7,line:[f,l,m,n,o]},
        {num:8,line:[a,b,h,n,o]},
        {num:9,line:[k,l,h,d,e]}   
    ]
    const checkRow = (lines) =>{
        const combinedLines = []
        let i = 1
        lines.map((line)=>{
            combinedLines.push(rowArray(line.line, i))
            i++
        })
        return combinedLines
    }
    
const combinedLines = checkRow(lines)
console.log(1,combinedLines)
    const checkWin = (combinedLines) =>{
        combinedLines.map((line)=>{
            if(line.array[0].required <= line.array.length){
                line.win=true
            }
        })
    }
checkWin(combinedLines)

const checkPoints=()=>{
    let points = 0

    combinedLines.map((line)=>{

        if(line.win==true){
            console.log('test')
            line.array.map((slot)=>{
                points += slot.value 
            })
        }
        
    })
    return points
}
}


play()
return (
    <>
    <Nav/>vi
    <div id='slotBox'>
        <div id='slots'>
            <div id="col1" className="slotCol">
                <div id="slotTop" className="slot">{a.imgUrl}</div>
                <div id="slotMid" className="slot">{f.imgUrl}</div>
                <div id="slotBot" className="slot">{k.imgUrl}</div>
            </div>
            <div id="col2" className="slotCol">
                <div id="slotTop" className="slot">{b.imgUrl}</div>
                <div id="slotMid" className="slot">{g.imgUrl}</div>
                <div id="slotBot" className="slot">{l.imgUrl}</div>
            </div>
            <div id="col3" className="slotCol">
                <div id="slotTop" className="slot">{c.imgUrl}</div>
                <div id="slotMid" className="slot">{h.imgUrl}</div>
                <div id="slotBot" className="slot">{m.imgUrl}</div>
            </div>
            <div id="col4" className="slotCol">
                <div id="slotTop" className="slot">{d.imgUrl}</div>
                <div id="slotMid" className="slot">{i.imgUrl}</div>
                <div id="slotBot" className="slot">{n.imgUrl}</div>
            </div>
            <div id="col5" className="slotCol">
                <div id="slotTop" className="slot">{e.imgUrl}</div>
                <div id="slotMid" className="slot">{j.imgUrl}</div>
                <div id="slotBot" className="slot">{o.imgUrl}</div>
            </div>
        </div>
        <button onClick={play}>play</button>
        <div className='slot' id="wintext">{checkPoints()}</div>
        {/* <div id="wintext">{winCheck().map((e)=>{
            return e.line
        })}wins</div> */}
    </div>
    </>
    )
}

export default Slot
