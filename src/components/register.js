import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const Body = styled.div`
  background-image: url(bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 754px;
  background-position: center;
`

function Register(){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");

    const register = () => {
        Axios.post('http://localhost:3030/register', {
            fname: fname,
            lname: lname,
            username: username,
            email: email,
            password: password,
            age: age,
            address: address,
        }).then((response)=>{
            console.log(response);
        });
    };

    return(
        <Body>
            <nav style={{height:"72px"}} />
            <div className="container">
                <form className="border" style={{width:"400px", margin:"30px auto", padding:"30px 50px", background:"#fff", display:"block", "borderRadius":"20px"}}>
                <h3 style={{color:"#777", fontWeight:"bold"}}>Sign <span style={{color:"#ffc000"}}>in</span></h3><br/>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="fname" aria-describedby="fname" placeholder="Firstname" 
                    onChange={(e)=>{
                        setFname(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="lname" aria-describedby="lname" placeholder="Lastname" 
                    onChange={(e)=>{
                        setLname(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="username" aria-describedby="username" placeholder="Username" 
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="email" className="form-control rounded-pill" id="email" aria-describedby="email" placeholder="E-mail" 
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="password" className="form-control rounded-pill" id="password" placeholder="Password" 
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="number" className="form-control rounded-pill" id="age" aria-describedby="age" placeholder="Age" 
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                    />
                </div>
                <div className="mb-4">
                    <input type="text" className="form-control rounded-pill" id="address" aria-describedby="address" placeholder="Address" 
                    onChange={(e)=>{
                        setAddress(e.target.value);
                    }}
                    />
                </div>
                <button type="submit" className="btn btn-primary rounded-pill" onClick={register}>Sign up</button>
                </form>
            </div>
        </Body>
    );
}
export default Register;
