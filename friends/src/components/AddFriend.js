import React, { useState } from 'react'

const AddFriend = () => {

    const [friend, setFriend] = useState({
        name: '',
        age: null,
        email: '',
    })

    const handleChange = (e) => {
        const value = 
        e.target.name === "age" ? Number(e.target.value) : e.target.value;
        setFriend({...friend, [e.target.name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div> <br/><br/>
           <form onSubmit={handleSubmit}>
               <label htmlFor="name">Name</label><br/>
               <input
               id='name'
               name='name'
               type='text'
               value={friend.name}
               onChange={handleChange}
               placeholder="Enter Name Here"
               /><br/>
               <label htmlFor="age">Age</label><br/>
               <input
               id='age'
               name='age'
               type='text'
               value={friend.age}
               onChange={handleChange}
               placeholder="Enter Age Here"
               /><br/>
               <label htmlFor="email">Email</label><br/>
               <input
               id='email'
               name='email'
               type='email'
               value={friend.email}
               onChange={handleChange}
               placeholder="Enter Email Here"
               /><br/><br/>
               <button type="submit">Add Friend</button>
           </form>
        </div>
    )
}

export default AddFriend
