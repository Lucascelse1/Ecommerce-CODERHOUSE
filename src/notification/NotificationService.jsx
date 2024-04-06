import { createContext, useState } from "react";
import Notification from "./Notification";

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const showNotification = (type, text) => {
        setNotificationData({type, text})
        setTimeout(()=> {
            setNotificationData(prev => ({ ...prev, text: '' }))
        }, 3000)
    }
    
    return (
        <NotificationContext.Provider value={{ showNotification }}>
            { notificationData.text && <Notification notificationData={ notificationData } /> }
            { children }
        </NotificationContext.Provider>
    )
}

