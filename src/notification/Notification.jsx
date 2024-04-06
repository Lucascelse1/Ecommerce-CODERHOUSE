const Notification = ({ notificationData }) => {

    const colors = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'blue'
    }

    const title = {
        success: 'Correcto',
        error: 'Error',
        warning: 'Advertencia',
        info: 'Informacion'
    }

    const notificationStyle = {
        backgroundColor: colors[notificationData.type],
    }

    return (
        <article style={notificationStyle} className='absolute right-28 top-5 text-white w-52 p-4 rounded-md'>
            <h2 className="text-xl">{ title[notificationData.type].toUpperCase() }</h2>
            <h3 className="text-sm">{ notificationData.text }</h3>
        </article>
    )
}

export default Notification