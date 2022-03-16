import { useEffect, useState } from 'react';
import './User.css'
function Users(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(props.url)
            .then((response) => response.json())
            .then(data => setUsers(data))
    }, [props.url]);
    return (
        <div className="users">
            {users.map((user) => <User name={user.name}></User>)}
        </div>
    );
}
function User(props) {
    return (
        <div className="user">{props.name}</div>
    );
}
export default Users;