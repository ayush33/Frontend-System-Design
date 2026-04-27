import { useEffect, useState } from 'react'
import './App.css'

const config = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green',
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 500,
    next: 'red',
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow',
  },
};

function App() {

  const [color, setColor] = useState('green')

  useEffect(()=>{
    const {next, duration} = config[color]
    let timerId = setTimeout(()=>{
      setColor(next)
    },duration)

    return () => {
      clearTimeout(timerId);
    };
  },[color])
 
  function Light({backgroundColor}){
    return(
      <div aria-hidden={true} style={{background: backgroundColor}} className='circle'></div>
    )
  }
  return (
    <div className='container'>
       <div className='circle-container'>
        {
          Object.keys(config).map((item, index)=>{
            return(
             <Light backgroundColor={color === item ? config[item].backgroundColor : undefined}/>
            )
          })
        }
     
     
      </div>
    </div>
  )
}

export default App
