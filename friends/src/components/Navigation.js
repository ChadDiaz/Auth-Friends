import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <Link to='/'>Sign In</Link> <br/>
            
            <Link to='/addFriend'>Add A Friend</Link>
        </div>
    )
}

export default Navigation