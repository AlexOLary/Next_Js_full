import {useEffect, useState} from 'react'
import Link from "next/link";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'petya'},
        {id: 1, name: 'vasya'},
    ])

    useEffect(async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()
        setUsers(data)
    },[])

    return (
        <div>
            <h1>список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;