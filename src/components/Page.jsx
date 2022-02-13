import React from 'react'
import Header from './Header'

function Page(name,age) {
  return (
    <div className='page'>
      <h1>Page</h1>
        <Header name={name.name} age={age.name}  /> 
    </div>
  )
}
export default Page