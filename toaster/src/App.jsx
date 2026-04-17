import { useState } from 'react'
import Notification from './component/Notification'
import useNotification from './hooks/useNotification'


function App() {

  const  {NotificationComponent, triggeredNotification} = useNotification()
  return (
    <div className='button'>
      <button
    
       onClick={()=>triggeredNotification({
        type:"success",
        meesage: "Downlaoding is successfull",
        duration:3000
       })
      }
      >
        Trigger Toast
      </button>
      {NotificationComponent}
    </div>
  )
}

export default App
