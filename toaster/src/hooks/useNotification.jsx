import { useState } from "react";
import Notification from "../component/Notification";


 const useNotification=()=>{

    const [notification, setNotification] = useState(null)

    let timerId;
    function triggeredNotification(notificationProps){
        setNotification(notificationProps)
        timerId = null
        timerId = setTimeout(()=>{
            clearTimeout(timerId)
            setNotification(null)
        },notificationProps.duration)
    }
    const NotificationComponent = notification ?  (<div className="top-left"><Notification {...notification}/></div>) : null

    return {NotificationComponent, triggeredNotification}


                    
 }
 export default useNotification