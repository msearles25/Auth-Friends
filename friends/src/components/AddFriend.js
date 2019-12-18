import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = props => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = e => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', friend)
            .then(res =>  props.setFriends(res.data))
        setFriend({
            name: '',
            age: '',
            email: ''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={friend.name}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Age'
                name='age'
                value={friend.age}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder='Email'
                name='email'
                value={friend.email}
                onChange={handleChange}
            />
            <button>Add friend</button>
        </form>
    )
}

export default AddFriend;