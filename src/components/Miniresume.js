import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../firebase'

export default function Miniresume() {
    let history = useHistory()

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')

    const handelsubmit = () => {
        const userinfo = firebase.database().ref('Userinfo');
        const info = {
            name,
            email,
            age
        };
        userinfo.push(info);
        setname('')
        setemail('')
        setage('')
        history.push("/fetchdata")
    }
    return (
        <>
            <form onSubmit={handelsubmit}>
                <input type="text" onChange={(e) => { setname(e.target.value) }} value={name} placeholder="Name" Required />
                <input type="email" onChange={(e) => { setemail(e.target.value) }} value={email} placeholder="Email" Required />
                <input type="number" onChange={(e) => { setage(e.target.value) }} value={age} placeholder="Age" Required />
                <button type="submit">submit</button>
            </form>
        </>
    )

}