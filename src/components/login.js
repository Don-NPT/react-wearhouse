import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Axios from 'axios';

const Body = styled.div`
  background-image: url(bg1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 754px;
  background-position: center;
`
function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginError, setLoginError] = useState("");

  const login = () => {
    Axios.post('http://localhost:3030/login', {
      username: username,
      password: password,
    }).then((response)=>{
      if(response.data.message){
        console.log(response.data.message);
        setLoginError(response.data.message);
      }else{
        console.log(response.data[0].username);
        setLoginError("");
      }
    });
  };

  return (
    <Body>
      <nav style={{ height: "72px" }} />
      <div className="container">
        <div className="border" style={{ width: "400px", margin: "150px auto", padding: "30px", background: "#fff", display: "block", "borderRadius": "20px" }}>
          <h3 style={{ color: "#777", fontWeight: "bold" }}>Log <span style={{ color: "#ffc000" }}>in</span></h3>
          <span style={{color: "red"}}>{loginError}</span>
          <div className="mb-3 mt-3">
            <input type="text" className="form-control rounded-pill" id="username" aria-describedby="username"  placeholder="Username"
              onChange={(e)=>{
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control rounded-pill" id="password" placeholder="Password"
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-success rounded-pill" onClick={login}>Login</button><br /><br />
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </Body>
  );
}
export default Login;
