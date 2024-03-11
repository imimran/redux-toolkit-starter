import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../features/users/userSlice'

function UserList() {
    const dispatch = useDispatch()
    const { users, isLoading, isError, error } = useSelector((state) => state.user)

    // console.log("users", users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {error}</p>}
            {users && (
                <div>
                    <h1>User Data</h1>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserList