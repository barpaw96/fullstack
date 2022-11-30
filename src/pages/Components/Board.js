import React, { useEffect } from 'react'
import {Box} from "./Box.js"
import "./Board.css"
import WIN_CONDITIONS from '../../consts/winConditions.js'

export const Board = ({board, onClick}) => {
  const [highlighted, setHighlighted] = React.useState([])
  
  useEffect(() => {
    let winCondition = false
    
    for (let i=0; i < WIN_CONDITIONS.length; i++){
      const [x,y,z]= WIN_CONDITIONS[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        winCondition = true
        setHighlighted([x,y,z])
      }
    }

    if (!winCondition) {
      setHighlighted([])
    }
  }, [board])
  
  return (
    <div className='board'>
        {board.map((value, idx)=>{
            return   <Box value={value} key={idx} onClick={()=> value === null && onClick(idx)} highlighted={highlighted.findIndex(h => idx === h) !== -1} />
        })}
        </div>
  )
}
