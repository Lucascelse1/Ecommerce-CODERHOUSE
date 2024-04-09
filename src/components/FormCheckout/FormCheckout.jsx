import { useState } from "react"

const FormCheckout = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <form className="border p-6 rounded-lg" onSubmit={handleConfirm}>
            <label className="flex flex-col text-4xl gap-y-4" htmlFor="">Nombre
                <input
                    className="text-black"
                    type="text"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
            </label>
            <label className="flex flex-col text-4xl gap-y-4 mt-4" htmlFor="">
                Telefono
                <input
                    className="text-black"
                    type="number"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}
                />
            </label>
            <label className="flex flex-col text-4xl gap-y-4 mt-4" htmlFor="">Email
                <input
                    className="text-black"
                    type="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
            </label>
            <button type="submit" className="tracking-widest my-8 border p-2 rounded-lg text-4xl">Generar orden de compra</button>
        </form>
    )

}

export default FormCheckout