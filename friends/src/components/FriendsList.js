import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            // .then(res => setFriends(res.data))
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(friends)

    return (
        <div>
            <AddFriend setFriends={setFriends}/>
            {console.log(friends)}
            {friends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>Age {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
        </div>
    )
}

export default FriendsList;