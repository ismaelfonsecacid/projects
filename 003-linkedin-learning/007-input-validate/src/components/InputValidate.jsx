import { useState } from "react"

export default function InputValidate() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const [nameValidate, setNameValidate] = useState(false);
    const [emailValidate, setEmailValidate] = useState(false)
    const [addressValidate, setAddressValidate] = useState(false)

    const [isError, setIsError] = useState(false)
    const [showError, setShowError] = useState(false)

    const [showContent, setShowContent] = useState(false)






    const nameUpdate = event => {
        setName(event.target.value)
        setNameValidate(event.target.value.length > 3)
    }
    const emailUpdate = event => {
        setEmail(event.target.value)
        setEmailValidate(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(event.target.value))
    }
    const addressUpdate = event => {
        setAddress(event.target.value)
        setAddressValidate(event.target.value.length > 7)
    }

    function onSubmit(event) {
        event.preventDefault();

        if (!nameValidate || !emailValidate || !addressValidate) {
            setShowError(true)
        } else {
            console.log('enviado')
            setShowContent(true)
        }

    }
    return (
        <>
            {!showContent && (

                <div>
                    <div>
                        <div>
                            Name:
                            <input type="text" name="" id="" value={name} onChange={nameUpdate} style={{ borderColor: isError ? 'red' : 'black' }} />
                            {(showError && !nameValidate) && <small style={{ color: 'red' }}>Name error</small>}
                        </div>
                        <div>Email:<input type="email" name="" id="" value={email} onChange={emailUpdate} style={{ borderColor: isError ? 'red' : 'black' }} /> {(showError && !emailValidate) && <small style={{ color: 'red' }}>Name error</small>}</div>
                        <div>Address:<input type="text" name="" id="" value={address} onChange={addressUpdate} style={{ borderColor: isError ? 'red' : 'black' }} /> {(showError && !addressValidate) && <small style={{ color: 'red' }}>Name error</small>}</div>
                    </div>
                    <button type="submit" onClick={onSubmit} disabled={!nameValidate || !addressValidate || !emailValidate}>Enviar</button>
                </div>

            )}
            {showContent && (
                <h1>Welcome {name}</h1>
            )}
        </>
    )
}