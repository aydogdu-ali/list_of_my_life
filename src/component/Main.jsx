import React from 'react'
import Addtodo from './Addtodo'
import Listtodo from './Listtodo'

const Main = () => {
  return (
    <div className='container'>
        <Addtodo/>
        <Listtodo/>
    </div>
  )
}

export default Main