import React from 'react'
import "./Box.css"


export const Box = ({value, onClick, highlighted}) => {

  const style = value === "X" ? "box x" : "box o"; 



  return (
    <button className={style} onClick={onClick} style={{backgroundColor: highlighted ? 'cyan' : 'white'}}>{value}</button>
    
    


  )
}
