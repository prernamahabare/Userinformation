import React, {useState, useEffect} from 'react'
import firebase from '../firebase'

export default function Fetchdata() {
    const [userlist, setuserlist] = useState("")
    
    useEffect(() => {
        const userinfo = firebase.database().ref('Userinfo');
        userinfo.on('value', (snapshot) => {
            const info = snapshot.val();
            const userlist = [];
            for (let id in info) {
                userlist.push(info[id]);
            }
            setuserlist(userlist)
        })
    }, [])

    return (
        <div >
            {userlist? userlist.map( user =><div>{user.name}    {user.email}    {user.age}</div>): ""}
        </div>
    )
}
