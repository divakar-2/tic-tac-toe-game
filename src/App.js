import { useState } from 'react';
import './App.css';

function App() {
  const[count ,setcount]=useState(1)
  const[win,setWin]=useState('')
  const [chn,setChn] = useState('X')
  const [mat,Setmat] = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])
  
const getBG = (val) =>{
  if(val === 'X') return 'purple'
  if(val === 'O') return 'green'
  return ''
};

const checkWinner = () =>{
  //row check
  if(mat[0][0] && mat[0][0] === mat[0][1] && mat[0][1] === mat[0][2]){
    setWin(mat[0][0] + ' wins the game kudos')
  }
  if(mat[1][0] && mat[1][0] === mat[1][1] && mat[1][1] === mat[1][2]){
    setWin(mat[1][0] + ' wins the game kudos')
  }
  if(mat[2][0] && mat[2][0] === mat[2][1] && mat[2][1] === mat[2][2]){
    setWin(mat[2][0] + ' wins the game kudos')
  }
  //diagonal check
  if(mat[0][0] && mat[0][0] === mat[1][1] && mat[1][1] === mat[2][2]){
    setWin(mat[0][0] + ' wins the game kudos')
  }
  if(mat[0][2] && mat[0][2] === mat[1][1] && mat[1][1] === mat[2][0]){
    setWin(mat[0][2] + ' wins the game kudos')
  }
  //column check
  if(mat[0][0] && mat[0][0] === mat[1][0] && mat[1][0] === mat[2][0]){
    setWin(mat[0][0] + ' wins the game kudos')
  }
  if(mat[0][1] && mat[0][1] === mat[1][1] && mat[1][1] === mat[2][1]){
    setWin(mat[0][1] + ' wins the game kudos')
  }
  if(mat[0][2] && mat[0][2] === mat[1][2] && mat[1][2] === mat[2][2]){
    setWin(mat[1][2] + ' wins the game kudos')
  }
  if(count === 9){
    setWin('The match has been drawn');
  }
}

const handleClick=(r,c)=>{
  if(mat[r][c]) return;
  const tMat=[...mat];
  tMat[r][c]=chn;
  Setmat(tMat);
  setChn(chn === 'X' ? 'O':'X');
  setcount(count+1);
  checkWinner();
}

  return <div className='app'>
    <div className='header alignCenter'>Tic Tac Toe</div>
    <div className='alignCenter board'>
      { !win && `It's ${chn} turn`}
      <div className='gameboard'> 
      { win || mat.map((row,rIndex)=>(
          <div className='row'>{
            row.map((cell,cIndex)=>(
              <div 
                onClick={()=> handleClick(rIndex,cIndex)}
                className={`cell alignCenter ${getBG(mat[rIndex][cIndex])}`}>{mat[rIndex][cIndex]}</div>
            ))
          }
          </div>
        ))
      }
      </div>
      <button onClick={()=>
      {
        setWin('');
        Setmat([
          ['','',''],
          ['','',''],
          ['','',''],
        ])
      }
       } > RESTART GAME BUDDY</button>
    </div>
  </div>
}

export default App;
