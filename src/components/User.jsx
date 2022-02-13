import React from 'react'

function User({name,age}) {
  return (
    <div className='user'>
        <h1>User</h1>
        <h2>{name}</h2>
        <h3>{age}</h3>
    </div>
  )
}
export default User