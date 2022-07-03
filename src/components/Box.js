import React from "react";

import { useState } from "react";

const Box = () => {

    
  
    const [turn,setTurn] = useState('x');
    const [cells,setCells] = useState(Array(9).fill(''));
    const [winner,setWinner] = useState('');

    let lines = {
      across :
       [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down : 
      [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      ],
      diagonal : [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

  const checkWinner = (squares) => {
    


    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return false;
  }
  for (let line in lines) {
    lines[line].forEach(element => {
      if (cells[element[0]] === '' ||
         cells[element[1]] === '' ||
         cells[element[2]] === '') {
        
      }else if(cells[element[0]] === cells[element[1]] && 
               cells[element[1]] === cells[element[2]]){
        setWinner(cells[element[0]]);
      }
      
    });
  


  
  

    const changeState= (num) => {

        if(cells[num] !== '' ){
            alert ('Alan dolu');
            return;
        }
        let squares = [...cells];

        if(turn === 'x'){
            squares[num] ='x'
          setTurn('o');
        }else{
            squares[num] ='o'
          setTurn('x');
        }
        setCells(squares);
        console.log(squares);
      };

      const Cell = ({num}) => {
        return <td onClick={() => {changeState(num)}}>{cells[num]}</td>
      }
     return (

        <div className="App">
      
      <table>
        <tbody>
          <tr>
          <Cell num ={0} />
          <Cell num ={1} />
          <Cell num ={2} />
          </tr>
          <tr>
          <Cell num ={3} />
          <Cell num ={4} />
          <Cell num ={5} />
          </tr>
          <tr>
          <Cell num ={6} />
          <Cell num ={7} />
          <Cell num ={8} />
          </tr>
        </tbody>
      </table>
      {winner && <h1>{winner} kazandı</h1>}
      
    </div>

    
  );
}
    
}

export default Box;