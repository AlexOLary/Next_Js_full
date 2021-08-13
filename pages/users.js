import {useState} from 'react'
import Link from "next/link";
import '../styles/global.css'

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'petya'},
        {id: 1, name: 'vasya'},
    ])
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