import { useContext } from "react"
import { NotificationContext } from "../NotificationService"

export const useNotification = () => {
    return useContext(NotificationContext)
}