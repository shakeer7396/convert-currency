import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <div className='container'>
        <form action="">
            <h1>User Form</h1>
            <div className="form">
                <div className="name">
                <label>User First name</label>
                <input type="text" placeholder='User First name' />
                </div>
                <div className="email">
                <label>User Email</label>
                <input type="text" placeholder='User Email' />
                </div>
                <button className='btn'>Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Form