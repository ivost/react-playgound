import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const UserDetails = ({ user }) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        (async () => {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`);
            const json = await resp.json();
            setUserDetails(json);
        })();
    }, [user]);

    if (!userDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {userDetails && (
                <>
                    <ul>
                        <li>Name: {userDetails.name}</li>
                        <li>Company: {userDetails.company.name}</li>
                    </ul>
                </>
            )}
        </div>
    );
};

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        (async () => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await resp.json();
            setUsers(json);
        })();
    }, []);

    return (
        <div>
            <div>
                <h2>User List</h2>
                <ul>
                    {users.map(u => (
                        <li key={u.id} onClick={() => setSelectedUser(u)}>{u.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>User Details</h2>
                { selectedUser ? <UserDetails key={selectedUser.id} user={selectedUser}/> : ""}
            </div>
        </div>
    )
};

const App = () => {
    return (
        <div>
            <h1>Master-detail v.1.6.1.0</h1>
            <UserList/>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

