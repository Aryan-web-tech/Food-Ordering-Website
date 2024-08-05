import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import { useSignup } from '../hooks/useSignup'


export default function Signup() {
    const [first, setFirst] = useState({name:"",email:"",password:"",location:""})
    

    const handleClick = async (e) => {

        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/api/createuser', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(first)
            })

            const json = await response.json()  //The response.json() method reads the response body and parses it as JSON. The await keyword ensures that the code waits for this operation to complete before moving on.
            console.log(json)

            if (!json.success) {
                alert("Enter valid credentials")
            }
            else {
                alert("Signup successful")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again.");
        }

    }

    const onChange = (e) => {
        setFirst({...first,[e.target.id]:e.target.value})
    }

    return (
        <div className='container'>
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={onChange} value={first.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"  aria-describedby="emailHelp" id="email" onChange={onChange} value={first.email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChange} value={first.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" onChange={onChange} value={first.location}/>
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
                <Link to="/login" className="btn m-3 btn-danger">Already a User</Link>
            </form>
        </div>
    )
}
